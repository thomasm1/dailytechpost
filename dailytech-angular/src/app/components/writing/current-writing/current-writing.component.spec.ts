import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick, flush } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatLegacyDialog as MatDialog, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of, BehaviorSubject } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CurrentWritingComponent } from './current-writing.component';
import { StopWritingComponent } from './stop-writing.component';
import { WritingService } from '../writing.service';
import { WritingMod } from '../../../models/writing-mods.model';
import * as fromWriting from '../../../reducers/writing.reducer';

describe('CurrentWritingComponent', () => {
  let component: CurrentWritingComponent;
  let fixture: ComponentFixture<CurrentWritingComponent>;
  let mockWritingService: jasmine.SpyObj<WritingService>;
  let mockDialog: jasmine.SpyObj<MatDialog>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockStore: jasmine.SpyObj<Store>;
  let activeWritingSubject: BehaviorSubject<WritingMod>;
  let availableWritingModsSubject: BehaviorSubject<WritingMod[]>;

  // Sample test data following DRY principle and coding instructions
  const mockActiveWriting: WritingMod = {
    id: '123',
    title: 'Tech Article in Progress',
    duration: 45,
    durationGoal: 1800000, // 30 minutes in milliseconds
    wordCount: 150,
    date: new Date('2026-01-05'),
    news: [
      'Breaking: New JavaScript framework released',
      'AI advances in natural language processing',
      'Quantum computing breakthrough announced'
    ],
    state: 'complete'
  } as WritingMod;

  const mockAvailableWritings: WritingMod[] = [
    {
      id: '1',
      name: 'Blog Post',
      duration: 30,
      wordCount: 100
    } as WritingMod,
    {
      id: '2',
      name: 'Tutorial',
      duration: 60,
      wordCount: 200
    } as WritingMod
  ];

  beforeEach(waitForAsync(() => {
    // Create test doubles following Michael Feathers' seam extraction pattern
    mockWritingService = jasmine.createSpyObj('WritingService', [
      'completeWriting',
      'cancelWriting',
      'hardQuitWriting',
      'addFullDataToDatabase'
    ]);

    mockDialog = jasmine.createSpyObj('MatDialog', ['open']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockStore = jasmine.createSpyObj('Store', ['select', 'dispatch']);

    // Setup observables for store selectors
    activeWritingSubject = new BehaviorSubject<WritingMod>(mockActiveWriting);
    availableWritingModsSubject = new BehaviorSubject<WritingMod[]>(mockAvailableWritings);

    TestBed.configureTestingModule({
      declarations: [CurrentWritingComponent],
      imports: [ReactiveFormsModule],
      providers: [
        FormBuilder,
        { provide: WritingService, useValue: mockWritingService },
        { provide: MatDialog, useValue: mockDialog },
        { provide: Router, useValue: mockRouter },
        { provide: Store, useValue: mockStore }
      ],
      schemas: [NO_ERRORS_SCHEMA] // Ignore template errors for unit testing
    }).compileComponents();
  }));

  beforeEach(() => {
    // Setup default store selector responses
    mockStore.select.and.callFake((selector: any) => {
      if (selector === fromWriting.getActiveWriting) {
        return activeWritingSubject.asObservable();
      }
      if (selector === fromWriting.getAvailableWritingMods) {
        return availableWritingModsSubject.asObservable();
      }
      return of(null);
    });

    // Setup default service responses
    mockWritingService.addFullDataToDatabase.and.returnValue(Promise.resolve());

    fixture = TestBed.createComponent(CurrentWritingComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    // Clean up timers to prevent test interference per Roy Osherove's trustworthy tests principle
    if (component.timer) {
      clearInterval(component.timer);
    }
  });

  // Unit of work: component initialization
  // Scenario: component created with active writing session
  // Expected behavior: form initialized and timer started
  describe('component_initialization', () => {
    it('should_create_component_when_valid_dependencies_provided', () => {
      // Act - don't call detectChanges to avoid template binding
      
      // Assert
      expect(component).toBeTruthy();
      expect(component).toBeInstanceOf(CurrentWritingComponent);
    });

    it('should_initialize_progress_to_zero_before_timer_starts', () => {
      // Assert - before any initialization
      expect(component.progress).toBe(0);
    });

    it('should_initialize_reactive_form_with_required_fields', () => {
      // Act - call ngOnInit directly to initialize form without template
      component.ngOnInit();

      // Assert
      expect(component.writingForm).toBeDefined();
      expect(component.writingForm.get('title')).toBeDefined();
      expect(component.writingForm.get('post')).toBeDefined();
      expect(component.writingForm.get('cat3')).toBeDefined();
      expect(component.writingForm.get('did')).toBeDefined();
      expect(component.writingForm.get('state')).toBeDefined();

      // Cleanup
      if (component.timer) {
        clearInterval(component.timer);
      }
    });

    it('should_set_title_field_as_required_validator', () => {
      // Arrange - initialize form
      component.ngOnInit();

      // Act
      component.writingForm.get('title')?.setValue('');
      component.writingForm.get('title')?.markAsTouched();

      // Assert
      expect(component.writingForm.get('title')?.hasError('required')).toBe(true);
      expect(component.writingForm.get('title')?.valid).toBe(false);

      // Cleanup
      if (component.timer) {
        clearInterval(component.timer);
      }
    });

    it('should_set_post_field_as_required_validator', () => {
      // Arrange - initialize form
      component.ngOnInit();

      // Act
      component.writingForm.get('post')?.setValue('');
      component.writingForm.get('post')?.markAsTouched();

      // Assert
      expect(component.writingForm.get('post')?.hasError('required')).toBe(true);
      expect(component.writingForm.get('post')?.valid).toBe(false);

      // Cleanup
      if (component.timer) {
        clearInterval(component.timer);
      }
    });

    it('should_set_cat3_field_as_required_validator', () => {
      // Arrange - initialize form
      component.ngOnInit();

      // Act
      component.writingForm.get('cat3')?.setValue('');
      component.writingForm.get('cat3')?.markAsTouched();

      // Assert
      expect(component.writingForm.get('cat3')?.hasError('required')).toBe(true);
      expect(component.writingForm.get('cat3')?.valid).toBe(false);

      // Cleanup
      if (component.timer) {
        clearInterval(component.timer);
      }
    });
  });

  // Unit of work: ngOnInit lifecycle
  // Scenario: component initialization hook called
  // Expected behavior: timer started and store subscriptions established
  describe('ngOnInit', () => {
    it('should_start_writing_timer_on_initialization', fakeAsync(() => {
      // Act
      component.ngOnInit();
      tick(1000);

      // Assert - timer should be running
      expect(component.timer).toBeDefined();
      expect(component.progress).toBeGreaterThan(0);

      // Cleanup per coding instructions - trustworthy tests clean up resources
      clearInterval(component.timer);
      flush();
    }));

    it('should_load_news_from_active_writing_session', fakeAsync(() => {
      // Act
      component.ngOnInit();
      tick();

      // Assert
      expect(component.news).toEqual(mockActiveWriting.news);
      expect(component.news.length).toBe(3);
      expect(component.news[0]).toContain('JavaScript framework');

      // Cleanup
      clearInterval(component.timer);
      flush();
    }));

    it('should_select_active_writing_from_store', fakeAsync(() => {
      // Act
      component.ngOnInit();
      tick();

      // Assert
      expect(mockStore.select).toHaveBeenCalled();

      // Cleanup
      clearInterval(component.timer);
      flush();
    }));

    it('should_select_available_writing_mods_from_store', fakeAsync(() => {
      // Act
      component.ngOnInit();
      tick();

      // Assert
      expect(mockStore.select).toHaveBeenCalled();
      component.writingMods$.subscribe(mods => {
        expect(mods).toEqual(mockAvailableWritings);
      });

      // Cleanup
      clearInterval(component.timer);
      flush();
    }));

    it('should_initialize_form_before_starting_timer', fakeAsync(() => {
      // Act
      component.ngOnInit();
      tick();

      // Assert - form created before timer logic
      expect(component.writingForm).toBeDefined();
      expect(component.writingForm.get('title')).toBeDefined();

      // Cleanup
      clearInterval(component.timer);
      flush();
    }));
  });

  // Unit of work: startOrResumeWriting method
  // Scenario: timer calculates progress based on duration goal
  // Expected behavior: progress increments until 100% reached
  describe('startOrResumeWriting', () => {
    it('should_calculate_step_based_on_duration_goal', fakeAsync(() => {
      // Arrange - 1800000ms / 100 = 18000ms per percent
      const expectedStep = mockActiveWriting.durationGoal / 100 * 1000;

      // Act
      component.startOrResumeWriting();
      tick(expectedStep);

      // Assert - progress should increment by 1 after one step
      expect(component.progress).toBe(1);

      // Cleanup
      clearInterval(component.timer);
      flush();
    }));

    it('should_increment_progress_on_each_timer_tick', fakeAsync(() => {
      // Arrange
      const step = mockActiveWriting.durationGoal / 100 * 1000;

      // Act
      component.startOrResumeWriting();
      tick(step);
      expect(component.progress).toBe(1);
      
      tick(step);
      expect(component.progress).toBe(2);
      
      tick(step);
      expect(component.progress).toBe(3);

      // Cleanup
      clearInterval(component.timer);
      flush();
    }));

    it('should_complete_writing_when_progress_reaches_100_percent', fakeAsync(() => {
      // Arrange - mock short duration for testing
      const shortDurationWriting: WritingMod = {
        ...mockActiveWriting,
        durationGoal: 1000 // 1 second total
      } as WritingMod;
      activeWritingSubject.next(shortDurationWriting);

      // Act
      component.startOrResumeWriting();
      tick(1100); // Wait for completion

      // Assert
      expect(mockWritingService.completeWriting).toHaveBeenCalled();
      expect(component.progress).toBeGreaterThanOrEqual(100);

      // Cleanup
      flush();
    }));

    it('should_load_news_array_from_active_writing', fakeAsync(() => {
      // Act
      component.startOrResumeWriting();
      tick();

      // Assert
      expect(component.news).toBeDefined();
      expect(component.news).toEqual(mockActiveWriting.news);

      // Cleanup
      clearInterval(component.timer);
      flush();
    }));
  });

  // Unit of work: quitCancel method
  // Scenario: user quits writing without saving
  // Expected behavior: hard quit triggered, form reset, navigate home
  describe('quitCancel', () => {
    beforeEach(() => {
      // Initialize form for these tests
      component.ngOnInit();
      if (component.timer) {
        clearInterval(component.timer);
      }
    });

    it('should_call_hardQuitWriting_service_method', () => {
      // Act
      component.quitCancel();

      // Assert
      expect(mockWritingService.hardQuitWriting).toHaveBeenCalled();
    });

    it('should_reset_form_when_quitting', () => {
      // Arrange
      component.writingForm.patchValue({
        title: 'Test Article',
        post: 'Content here',
        cat3: 'Technology'
      });

      // Act
      component.quitCancel();

      // Assert
      expect(component.writingForm.get('title')?.value).toBe(null);
      expect(component.writingForm.get('post')?.value).toBe(null);
      expect(component.writingForm.get('cat3')?.value).toBe(null);
    });

    it('should_reset_progress_to_zero_when_quitting', () => {
      // Arrange
      component.progress = 75;

      // Act
      component.quitCancel();

      // Assert
      expect(component.progress).toBe(0);
    });

    it('should_navigate_to_home_route_after_quit', () => {
      // Act
      component.quitCancel();

      // Assert
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
    });
  });
 
describe('postCancel', () => {
  it('should_open_stop_writing_dialog_with_current_progress', fakeAsync(() => {
    // Arrange
    component.ngOnInit();
    tick(); // Let ngOnInit complete and start timer
    component.progress = 42;
    const mockDialogRef = { afterClosed: () => of(false) } as MatDialogRef<StopWritingComponent>;
    mockDialog.open.and.returnValue(mockDialogRef);

    // Act
    component.postCancel();
    tick();

    // Assert
    expect(mockDialog.open).toHaveBeenCalledWith(StopWritingComponent, {
      data: { progress: 42 }
    });

    // Cleanup - postCancel clears timer, but if dialog returns false it restarts
    if (component.timer) {
      clearInterval(component.timer);
    }
    flush();
  }));

  it('should_cancel_writing_when_dialog_returns_true', fakeAsync(() => {
    // Arrange
    component.progress = 65;
    const mockDialogRef = { afterClosed: () => of(true) } as MatDialogRef<StopWritingComponent>;
    mockDialog.open.and.returnValue(mockDialogRef);

    // Act
    component.postCancel();
    tick();

    // Assert
    expect(mockWritingService.cancelWriting).toHaveBeenCalledWith(65);

    // Cleanup
    flush();
  }));

  it('should_resume_writing_when_dialog_returns_false', fakeAsync(() => {
    // Arrange
    const mockDialogRef = { afterClosed: () => of(false) } as MatDialogRef<StopWritingComponent>;
    mockDialog.open.and.returnValue(mockDialogRef);
    spyOn(component, 'startOrResumeWriting');

    // Act
    component.postCancel();
    tick();

    // Assert
    expect(component.startOrResumeWriting).toHaveBeenCalled();

    // Cleanup - startOrResumeWriting was spied, no actual timer created
    flush();
  }));
});

  // Unit of work: addUrl method
  // Scenario: user clicks add URL button (future enhancement)
  // Expected behavior: logs action for now
  describe('addUrl', () => {
    it('should_log_add_url_action_to_console', () => {
      // Arrange
      spyOn(console, 'log');

      // Act
      component.addUrl();

      // Assert
      expect(console.log).toHaveBeenCalledWith('add-url');
    });
  });

  // Unit of work: onSubmit method
  // Scenario: user submits completed writing with valid form
  // Expected behavior: data saved to database, form reset, navigate home
  describe('onSubmit_when_form_valid', () => {
    beforeEach(() => {
      // Initialize form for submission tests
      component.ngOnInit();
      if (component.timer) {
        clearInterval(component.timer);
      }
    });

    it('should_save_writing_to_database_when_form_valid', fakeAsync(() => {
      // Arrange
      const formData = {
        title: 'Advanced TypeScript Patterns',
        post: '<p>Deep dive into TypeScript generics and decorators for scalable applications.</p>',
        cat3: 'Web Dev Affairs'
      };
      component.writingForm.patchValue(formData);

      // Act
      component.onSubmit();
      tick();

      // Assert
      expect(mockWritingService.addFullDataToDatabase).toHaveBeenCalled();
      const submittedData = mockWritingService.addFullDataToDatabase.calls.mostRecent().args[0];
      expect(submittedData.title).toBe('Advanced TypeScript Patterns');
      expect(submittedData.cat3).toBe('Web Dev Affairs');

      // Cleanup
      flush();
    }));

    it('should_set_did_field_to_formatted_current_date', fakeAsync(() => {
      // Arrange
      component.writingForm.patchValue({
        title: 'Test',
        post: 'Content',
        cat3: 'Tech'
      });
      const expectedDate = component.formatDate(new Date());

      // Act
      component.onSubmit();
      tick();

      // Assert
      const submittedData = mockWritingService.addFullDataToDatabase.calls.mostRecent().args[0];
      expect(submittedData.did).toBe(expectedDate);

      // Cleanup
      flush();
    }));

    it('should_set_state_to_completed_on_submission', fakeAsync(() => {
      // Arrange
      component.writingForm.patchValue({
        title: 'Article',
        post: 'Text',
        cat3: 'Category'
      });

      // Act
      component.onSubmit();
      tick();

      // Assert
      const submittedData = mockWritingService.addFullDataToDatabase.calls.mostRecent().args[0];
      expect(submittedData.state).toBe('completed');

      // Cleanup
      flush();
    }));

    it('should_calculate_word_count_from_post_length', fakeAsync(() => {
      // Arrange
      const postContent = 'This is a test post with some content';
      component.writingForm.patchValue({
        title: 'Test',
        post: postContent,
        cat3: 'Tech'
      });

      // Act
      component.onSubmit();
      tick();

      // Assert
      const submittedData = mockWritingService.addFullDataToDatabase.calls.mostRecent().args[0];
      expect(submittedData.wordCount).toBe(postContent.length);

      // Cleanup
      flush();
    }));

    it('should_reset_form_after_successful_submission', fakeAsync(() => {
      // Arrange
      component.writingForm.patchValue({
        title: 'Article',
        post: 'Content',
        cat3: 'Category'
      });

      // Act
      component.onSubmit();
      tick();

      // Assert
      expect(component.writingForm.get('title')?.value).toBe(null);
      expect(component.writingForm.get('post')?.value).toBe(null);

      // Cleanup
      flush();
    }));

    it('should_navigate_to_home_after_successful_submission', fakeAsync(() => {
      // Arrange
      component.writingForm.patchValue({
        title: 'Test',
        post: 'Content',
        cat3: 'Tech'
      });

      // Act
      component.onSubmit();
      tick();

      // Assert
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);

      // Cleanup
      flush();
    }));
  });

  // Unit of work: onSubmit method
  // Scenario: user submits form with invalid data
  // Expected behavior: validation errors shown, no database call
  describe('onSubmit_when_form_invalid', () => {
    beforeEach(() => {
      component.ngOnInit();
      if (component.timer) {
        clearInterval(component.timer);
      }
    });

    it('should_not_call_database_service_when_form_invalid', fakeAsync(() => {
      // Arrange
      component.writingForm.patchValue({
        title: '', // Required field empty
        post: 'Content',
        cat3: 'Tech'
      });

      // Act
      component.onSubmit();
      tick();

      // Assert
      expect(mockWritingService.addFullDataToDatabase).not.toHaveBeenCalled();

      // Cleanup
      flush();
    }));

    it('should_log_error_when_form_invalid', fakeAsync(() => {
      // Arrange
      spyOn(console, 'error');
      component.writingForm.patchValue({
        title: 'Test',
        post: '', // Required field empty
        cat3: 'Tech'
      });

      // Act
      component.onSubmit();
      tick();

      // Assert
      expect(console.error).toHaveBeenCalledWith('Form is invalid');

      // Cleanup
      flush();
    }));
  });

  // Unit of work: onSubmit method
  // Scenario: database save fails
  // Expected behavior: error logged, user informed
  describe('onSubmit_when_database_save_fails', () => {
    beforeEach(() => {
      component.ngOnInit();
      if (component.timer) {
        clearInterval(component.timer);
      }
    });

    it('should_log_error_when_database_save_fails', fakeAsync(() => {
      // Arrange
      spyOn(console, 'error');
      const dbError = new Error('Database connection failed');
      mockWritingService.addFullDataToDatabase.and.returnValue(Promise.reject(dbError));
      component.writingForm.patchValue({
        title: 'Test',
        post: 'Content',
        cat3: 'Tech'
      });

      // Act
      component.onSubmit();
      tick();

      // Assert
      expect(console.error).toHaveBeenCalledWith('Submission failed', dbError);

      // Cleanup
      flush();
    }));

    it('should_not_reset_form_when_submission_fails', fakeAsync(() => {
      // Arrange
      const dbError = new Error('Network error');
      mockWritingService.addFullDataToDatabase.and.returnValue(Promise.reject(dbError));
      component.writingForm.patchValue({
        title: 'Important Article',
        post: 'Valuable Content',
        cat3: 'Tech'
      });

      // Act
      component.onSubmit();
      tick();

      // Assert - form data preserved on error
      expect(component.writingForm.get('title')?.value).toBe('Important Article');
      expect(component.writingForm.get('post')?.value).toBe('Valuable Content');

      // Cleanup
      flush();
    }));
  });

  // Unit of work: formatDate method
  // Scenario: convert Date object to YY-MM-DD format
  // Expected behavior: properly formatted string per API requirements
  
// Unit of work: formatDate method
// Scenario: convert Date object to YY-MM-DD format
// Expected behavior: properly formatted string per API requirements
describe('formatDate', () => {
  it('should_format_date_to_yy_mm_dd_format', () => {
    // Arrange - Date objects use 0-indexed months (0=Jan, 11=Dec)
    const testDate = new Date(2026, 0, 5); // January 5, 2026

    // Act
    const result = component.formatDate(testDate);

    // Assert
    expect(result).toBe('26-01-05');
  });

  it('should_pad_single_digit_months_with_zero', () => {
    // Arrange - March = month 2 (0-indexed)
    const testDate = new Date(2026, 2, 15); // March 15, 2026

    // Act
    const result = component.formatDate(testDate);

    // Assert
    expect(result).toBe('26-03-15');
  });

  it('should_pad_single_digit_days_with_zero', () => {
    // Arrange - December = month 11 (0-indexed)
    const testDate = new Date(2026, 11, 7); // December 7, 2026

    // Act
    const result = component.formatDate(testDate);

    // Assert
    expect(result).toBe('26-12-07');
  });

  it('should_handle_december_dates_correctly', () => {
    // Arrange - December = month 11 (0-indexed)
    const testDate = new Date(2025, 11, 31); // December 31, 2025

    // Act
    const result = component.formatDate(testDate);

    // Assert
    expect(result).toBe('25-12-31');
  });

  it('should_extract_last_two_digits_of_year', () => {
    // Arrange - June = month 5 (0-indexed)
    const testDate = new Date(2099, 5, 15); // June 15, 2099

    // Act
    const result = component.formatDate(testDate);

    // Assert
    expect(result).toBe('99-06-15');
  });
});

  // Unit of work: complete user workflow
  // Scenario: user starts writing, completes, and submits
  // Expected behavior: seamless flow from timer to form submission
  describe('complete_user_workflow', () => {
    it('should_support_full_writing_session_from_start_to_completion', fakeAsync(() => {
      // Arrange - short duration for testing
      const quickWriting: WritingMod = {
        ...mockActiveWriting,
        durationGoal: 100 // Very short for testing
      } as WritingMod;
      activeWritingSubject.next(quickWriting);

      // Act - Component initializes
      component.ngOnInit();
      tick(200); // Wait for timer completion

      // Assert - Timer completed
      expect(mockWritingService.completeWriting).toHaveBeenCalled();
      expect(component.progress).toBeGreaterThanOrEqual(100);

      // Act - User fills form and submits
      component.writingForm.patchValue({
        title: 'Completed Article',
        post: 'Final content after timer',
        cat3: 'Technology'
      });
      component.onSubmit();
      tick();

      // Assert - Data saved and navigation occurred
      expect(mockWritingService.addFullDataToDatabase).toHaveBeenCalled();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
      expect(component.progress).toBe(0);

      // Cleanup
      flush();
    }));

    it('should_support_pause_resume_and_submit_workflow', fakeAsync(() => {
      // Arrange
      component.ngOnInit();
      tick(1000);

      // Act - User pauses
      const mockDialogRef = { afterClosed: () => of(false) } as MatDialogRef<StopWritingComponent>;
      mockDialog.open.and.returnValue(mockDialogRef);
      component.postCancel();
      tick();

      // Act - User completes and submits
      component.writingForm.patchValue({
        title: 'Paused Article',
        post: 'Content after pause',
        cat3: 'Tech'
      });
      component.onSubmit();
      tick();

      // Assert - Successfully submitted
      expect(mockWritingService.addFullDataToDatabase).toHaveBeenCalled();

      // Cleanup
      clearInterval(component.timer);
      flush();
    }));
  });
});