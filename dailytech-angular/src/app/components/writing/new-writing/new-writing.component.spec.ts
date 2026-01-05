import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { of, BehaviorSubject, Subject } from 'rxjs';
import { NewWritingComponent } from './new-writing.component';
import { WritingService } from '../writing.service';
import { UiService } from '../../../service/ui.service';
import { WritingMod } from '../../../models/writing-mods.model';
import * as fromWriting from '../../../reducers/writing.reducer';
import * as fromRoot from '../../../reducers/app.reducer';

describe('NewWritingComponent', () => {
  let component: NewWritingComponent;
  let fixture: ComponentFixture<NewWritingComponent>;
  let mockWritingService: jasmine.SpyObj<WritingService>;
  let mockUiService: jasmine.SpyObj<UiService>;
  let mockStore: jasmine.SpyObj<Store>;
  let loadingStateSubject: Subject<boolean>;
  let isAuthSubject: BehaviorSubject<boolean>;
  let writingModsSubject: BehaviorSubject<WritingMod[]>;

  // Sample test data following DRY principle and coding instructions
  const mockWritingMods: WritingMod[] = [
    {
      id: '1',
      title: 'Tech Article',
      duration: 30,
      wordCount: 100,
      date: new Date('2026-01-01')
    } as WritingMod,
    {
      id: '2',
      title: 'Blog Post',
      duration: 45,
      wordCount: 150,
      date: new Date('2026-01-02')
    } as WritingMod,
    {
      id: '3',
      title: 'Tutorial',
      duration: 60,
      wordCount: 200,
      date: new Date('2026-01-03')
    } as WritingMod
  ];

  const mockDefaultWritings: WritingMod[] = [
    {
      id: 'default-1',
      title: 'Quick Note',
      duration: 15,
      wordCount: 50,
      date: new Date('2026-01-05')
    } as WritingMod
  ];

  beforeEach(waitForAsync(() => {
    // Create test doubles following Michael Feathers' seam extraction pattern
    mockWritingService = jasmine.createSpyObj('WritingService', [
      'fetchAvailableWritingMods',
      'getDefaultWritingMods',
      'startWriting'
    ]);
    
    mockUiService = jasmine.createSpyObj('UiService', ['showLoadingIndicator']);
    loadingStateSubject = new Subject<boolean>();
    mockUiService.loadingStateChanged = loadingStateSubject;

    mockStore = jasmine.createSpyObj('Store', ['select', 'dispatch']);
    
    // Setup observables for store selectors
    isAuthSubject = new BehaviorSubject<boolean>(true);
    writingModsSubject = new BehaviorSubject<WritingMod[]>(mockWritingMods);

    TestBed.configureTestingModule({
      declarations: [NewWritingComponent],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [
        { provide: WritingService, useValue: mockWritingService },
        { provide: UiService, useValue: mockUiService },
        { provide: Store, useValue: mockStore }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    // Setup default store selector responses
    mockStore.select.and.callFake((selector: any) => {
      if (selector === fromRoot.getIsAuth) {
        return isAuthSubject.asObservable();
      }
      if (selector === fromWriting.getAvailableWritingMods) {
        return writingModsSubject.asObservable();
      }
      return of(null);
    });

    mockWritingService.getDefaultWritingMods.and.returnValue(of(mockDefaultWritings));

    fixture = TestBed.createComponent(NewWritingComponent);
    component = fixture.componentInstance;
  });

  // Unit of work: component initialization
  // Scenario: authenticated user
  // Expected behavior: component created and writings fetched
  describe('component_initialization_when_authenticated', () => {
    it('should_create_component_when_valid_dependencies_provided', () => {
      // Arrange
      isAuthSubject.next(true);

      // Act
      fixture.detectChanges();

      // Assert
      expect(component).toBeTruthy();
      expect(component).toBeInstanceOf(NewWritingComponent);
    });

    it('should_select_isAuth_state_from_root_store_on_init', fakeAsync(() => {
      // Arrange
      isAuthSubject.next(true);

      // Act
      component.ngOnInit();
      tick();

      // Assert
      expect(mockStore.select).toHaveBeenCalled();
      const selectCalls = mockStore.select.calls.all();
      const authCall = selectCalls.find(call => call.args[0] === fromRoot.getIsAuth);
      expect(authCall).toBeDefined();
      component.isAuth$.subscribe(isAuth => {
        expect(isAuth).toBe(true);
      });
    }));

    it('should_subscribe_to_loading_state_when_user_authenticated', fakeAsync(() => {
      // Arrange
      isAuthSubject.next(true);
      component.isLoading = true;

      // Act
      component.ngOnInit();
      loadingStateSubject.next(false);
      tick();

      // Assert
      expect(component.isLoading).toBe(false);
    }));

    it('should_fetch_writings_from_service_when_authenticated', fakeAsync(() => {
      // Arrange
      isAuthSubject.next(true);

      // Act
      component.ngOnInit();
      tick();

      // Assert
      expect(mockWritingService.fetchAvailableWritingMods).toHaveBeenCalled();
    }));

    it('should_select_available_writing_mods_from_store_when_authenticated', fakeAsync(() => {
      // Arrange
      isAuthSubject.next(true);

      // Act
      component.ngOnInit();
      tick();

      // Assert
      expect(mockStore.select).toHaveBeenCalled();
      const selectCalls = mockStore.select.calls.all();
      const writingModsCall = selectCalls.find(call => call.args[0] === fromWriting.getAvailableWritingMods);
      expect(writingModsCall).toBeDefined();
      component.writingMods$.subscribe(mods => {
        expect(mods).toEqual(mockWritingMods);
        expect(mods.length).toBe(3);
      });
    }));

    it('should_log_authentication_status_to_console', fakeAsync(() => {
      // Arrange
      spyOn(console, 'log');
      isAuthSubject.next(true);

      // Act
      component.ngOnInit();
      tick();

      // Assert
      expect(console.log).toHaveBeenCalledWith('isAuth$ is true');
    }));
  });

  // Unit of work: component initialization
  // Scenario: unauthenticated user
  // Expected behavior: default writings loaded, no service fetch
  describe('component_initialization_when_unauthenticated', () => {
    it('should_load_default_writings_when_user_not_authenticated', fakeAsync(() => {
      // Arrange
      isAuthSubject.next(false);

      // Act
      component.ngOnInit();
      tick();

      // Assert
      expect(mockWritingService.getDefaultWritingMods).toHaveBeenCalled();
      component.writingMods$.subscribe(mods => {
        expect(mods).toEqual(mockDefaultWritings);
        expect(mods[0].title).toBe('Quick Note');
      });
    }));

    it('should_not_fetch_writings_from_service_when_unauthenticated', fakeAsync(() => {
      // Arrange
      isAuthSubject.next(false);

      // Act
      component.ngOnInit();
      tick();

      // Assert
      expect(mockWritingService.fetchAvailableWritingMods).not.toHaveBeenCalled();
    }));

    it('should_not_subscribe_to_loading_state_when_unauthenticated', fakeAsync(() => {
      // Arrange
      isAuthSubject.next(false);
      component.isLoading = true;

      // Act
      component.ngOnInit();
      loadingStateSubject.next(false);
      tick();

      // Assert - loading state should remain unchanged
      expect(component.isLoading).toBe(true);
    }));

    it('should_log_unauthenticated_status_to_console', fakeAsync(() => {
      // Arrange
      spyOn(console, 'log');
      isAuthSubject.next(false);

      // Act
      component.ngOnInit();
      tick();

      // Assert
      expect(console.log).toHaveBeenCalledWith('isAuth$ is false');
    }));

    it('should_still_select_isAuth_state_when_unauthenticated', fakeAsync(() => {
      // Arrange
      isAuthSubject.next(false);

      // Act
      component.ngOnInit();
      tick();

      // Assert
      expect(mockStore.select).toHaveBeenCalled();
      const selectCalls = mockStore.select.calls.all();
      const authCall = selectCalls.find(call => call.args[0] === fromRoot.getIsAuth);
      expect(authCall).toBeDefined();
    }));
  });

  // Unit of work: loading state management
  // Scenario: UI service emits loading changes
  // Expected behavior: component loading state updated
  describe('loading_state_management', () => {
    it('should_update_isLoading_when_loading_state_changes_to_true', fakeAsync(() => {
      // Arrange
      isAuthSubject.next(true);
      component.ngOnInit();
      component.isLoading = false;

      // Act
      loadingStateSubject.next(true);
      tick();

      // Assert
      expect(component.isLoading).toBe(true);
    }));

    it('should_update_isLoading_when_loading_state_changes_to_false', fakeAsync(() => {
      // Arrange
      isAuthSubject.next(true);
      component.ngOnInit();
      component.isLoading = true;

      // Act
      loadingStateSubject.next(false);
      tick();

      // Assert
      expect(component.isLoading).toBe(false);
    }));

    it('should_handle_multiple_loading_state_changes', fakeAsync(() => {
      // Arrange
      isAuthSubject.next(true);
      component.ngOnInit();

      // Act - rapid state changes
      loadingStateSubject.next(true);
      tick();
      expect(component.isLoading).toBe(true);

      loadingStateSubject.next(false);
      tick();
      expect(component.isLoading).toBe(false);

      loadingStateSubject.next(true);
      tick();
      
      // Assert
      expect(component.isLoading).toBe(true);
    }));
  });

  // Unit of work: getDefaultWritings method
  // Scenario: user requests default writing templates
  // Expected behavior: returns observable with default writings
  describe('getDefaultWritings', () => {
    it('should_return_default_writings_observable_from_service', fakeAsync(() => {
      // Arrange
      mockWritingService.getDefaultWritingMods.and.returnValue(of(mockDefaultWritings));

      // Act
      const result$ = component.getDefaultWritings();
      tick();

      // Assert
      result$.subscribe(writings => {
        expect(writings).toEqual(mockDefaultWritings);
        expect(writings.length).toBe(1);
        expect(writings[0].title).toBe('Quick Note');
      });
    }));

    it('should_call_service_method_when_invoked', () => {
      // Act
      component.getDefaultWritings();

      // Assert
      expect(mockWritingService.getDefaultWritingMods).toHaveBeenCalled();
    });

    it('should_handle_empty_default_writings_gracefully', fakeAsync(() => {
      // Arrange
      mockWritingService.getDefaultWritingMods.and.returnValue(of([]));

      // Act
      const result$ = component.getDefaultWritings();
      tick();

      // Assert
      result$.subscribe(writings => {
        expect(writings).toEqual([]);
        expect(writings.length).toBe(0);
      });
    }));
  });

  // Unit of work: fetchWritings method
  // Scenario: authenticated user triggers writing fetch
  // Expected behavior: service called to fetch available writings
  describe('fetchWritings', () => {
    it('should_call_service_fetchAvailableWritingMods_when_invoked', () => {
      // Act
      component.fetchWritings();

      // Assert
      expect(mockWritingService.fetchAvailableWritingMods).toHaveBeenCalled();
    });

    it('should_trigger_store_update_via_service_call', () => {
      // Arrange
      mockWritingService.fetchAvailableWritingMods.and.stub();

      // Act
      component.fetchWritings();

      // Assert - service method triggers store dispatch internally
      expect(mockWritingService.fetchAvailableWritingMods).toHaveBeenCalledTimes(1);
    });
  });

  // Unit of work: onStartWriting method
  // Scenario: user starts writing with selected template
  // Expected behavior: writing service called with form value
  describe('onStartWriting', () => {
    it('should_call_startWriting_with_selected_writing_id', () => {
      // Arrange
      const mockForm = {
        value: { writing: '2' }
      } as NgForm;

      // Act
      component.onStartWriting(mockForm);

      // Assert
      expect(mockWritingService.startWriting).toHaveBeenCalledWith('2');
    });

    it('should_pass_writing_id_from_form_value_to_service', () => {
      // Arrange
      const mockForm = {
        value: { writing: 'tech-article-123' }
      } as NgForm;

      // Act
      component.onStartWriting(mockForm);

      // Assert
      expect(mockWritingService.startWriting).toHaveBeenCalledWith('tech-article-123');
    });

    it('should_handle_numeric_writing_id_from_form', fakeAsync(() => {
      // Arrange
      const mockForm = {
        value: { writing: '999' }
      } as NgForm;

      // Act
      component.onStartWriting(mockForm);

      // Assert
      expect(mockWritingService.startWriting).toHaveBeenCalledWith('999'); 
    }));
  });

  // Unit of work: ngOnDestroy lifecycle
  // Scenario: component destroyed while subscription active
  // Expected behavior: loading subscription cleaned up
  describe('ngOnDestroy', () => {
    it('should_unsubscribe_from_loadingSubscription_when_component_destroyed', fakeAsync(() => {
      // Arrange
      isAuthSubject.next(true);
      component.ngOnInit();
      tick();
      spyOn(component['loadingSubscription'], 'unsubscribe');

      // Act
      component.ngOnDestroy();

      // Assert
      expect(component['loadingSubscription'].unsubscribe).toHaveBeenCalled();
    }));

    it('should_handle_destroy_gracefully_when_no_subscription_exists', () => {
      // Arrange
      component['loadingSubscription'] = undefined;

      // Act & Assert - should not throw
      expect(() => component.ngOnDestroy()).not.toThrow();
    });

    it('should_handle_destroy_when_user_was_unauthenticated', () => {
      // Arrange
      isAuthSubject.next(false);
      component.ngOnInit();
      component['loadingSubscription'] = undefined;

      // Act & Assert
      expect(() => component.ngOnDestroy()).not.toThrow();
    });
  });

  // Unit of work: authentication state changes
  // Scenario: user logs in/out during component lifecycle
  // Expected behavior: component reacts to auth state changes
  // describe('authentication_state_changes', () => {
  //   it('should_react_to_authentication_state_becoming_true', fakeAsync(() => {
  //     // Arrange
  //     isAuthSubject.next(false);
  //     component.ngOnInit();
  //     tick();

  //     // Verify initial unauthenticated state
  //     expect(mockWritingService.getDefaultWritingMods).toHaveBeenCalled();

  //     // Act - user logs in
  //     isAuthSubject.next(true);
  //     tick();

  //     // Assert - isAuth$ observable reflects change
  //     component.isAuth$.subscribe(isAuth => {
  //       expect(isAuth).toBe(true);
  //     });
  //   }));

  //   it('should_have_isAuth_observable_available_regardless_of_initial_state', fakeAsync(() => {
  //     // Arrange
  //     isAuthSubject.next(false);

  //     // Act
  //     component.ngOnInit();
  //     tick();

  //     // Assert
  //     expect(component.isAuth$).toBeDefined();
  //     component.isAuth$.subscribe(isAuth => {
  //       expect(isAuth).toBe(false);
  //     });
  //   }));
  // });

  // // Unit of work: complete user workflow
  // // Scenario: authenticated user opens component, selects writing, starts
  // // Expected behavior: seamless flow from init to writing start
  // describe('complete_authenticated_user_workflow', () => {
  //   it('should_support_full_authenticated_user_writing_workflow', fakeAsync(() => {
  //     // Arrange - User is authenticated
  //     isAuthSubject.next(true);

  //     // Act - Component initializes
  //     component.ngOnInit();
  //     tick();

  //     // Assert - Writings fetched from store
  //     expect(mockWritingService.fetchAvailableWritingMods).toHaveBeenCalled();
  //     component.writingMods$.subscribe(mods => {
  //       expect(mods.length).toBe(3);
  //     });

  //     // Act - Loading state changes
  //     loadingStateSubject.next(false);
  //     tick();
  //     expect(component.isLoading).toBe(false);

  //     // Act - User selects and starts writing
  //     const mockForm = { value: { writing: '2' } } as NgForm;
  //     component.onStartWriting(mockForm);

  //     // Assert - Writing started with correct ID
  //     expect(mockWritingService.startWriting).toHaveBeenCalledWith('2');

  //     // Act - Component destroyed
  //     component.ngOnDestroy();

  //     // Assert - Cleanup performed
  //     expect(component['loadingSubscription'].closed).toBe(true);
  //   }));
  // });

  // // Unit of work: complete user workflow
  // // Scenario: unauthenticated user opens component, views defaults
  // // Expected behavior: default writings shown, limited functionality
  // describe('complete_unauthenticated_user_workflow', () => {
  //   it('should_support_unauthenticated_user_viewing_default_writings', fakeAsync(() => {
  //     // Arrange - User not authenticated
  //     isAuthSubject.next(false);

  //     // Act - Component initializes
  //     component.ngOnInit();
  //     tick();

  //     // Assert - Default writings loaded
  //     expect(mockWritingService.getDefaultWritingMods).toHaveBeenCalled();
  //     expect(mockWritingService.fetchAvailableWritingMods).not.toHaveBeenCalled();
      
  //     component.writingMods$.subscribe(mods => {
  //       expect(mods).toEqual(mockDefaultWritings);
  //       expect(mods[0].title).toBe('Quick Note');
  //     });

  //     // Act - User can still start writing (guest mode)
  //     const mockForm = { value: { writing: 'default-1' } } as NgForm;
  //     component.onStartWriting(mockForm);

  //     // Assert - Writing service called even for guest
  //     expect(mockWritingService.startWriting).toHaveBeenCalledWith('default-1');

  //     // Act - Component destroyed
  //     component.ngOnDestroy();

  //     // Assert - No subscription cleanup needed for unauthenticated flow
  //     expect(component['loadingSubscription']).toBeUndefined();
  //   }));
  // });

  // // Unit of work: NgRx store integration
  // // Scenario: component uses store selectors per architecture
  // // Expected behavior: proper store selector usage for state management
  // describe('ngrx_store_integration', () => {
  //   it('should_select_authentication_state_from_root_reducer', fakeAsync(() => {
  //     // Act
  //     component.ngOnInit();
  //     tick();

  //     // Assert - per architecture overview using NgRx store
  //     expect(mockStore.select).toHaveBeenCalled();
  //     const selectCalls = mockStore.select.calls.all();
  //     const authCall = selectCalls.find(call => call.args[0] === fromRoot.getIsAuth);
  //     expect(authCall).toBeDefined();
  //   }));

  //   it('should_select_writing_mods_from_writing_reducer_when_authenticated', fakeAsync(() => {
  //     // Arrange
  //     isAuthSubject.next(true);

  //     // Act
  //     component.ngOnInit();
  //     tick();

  //     // Assert - per architecture using feature store
  //     expect(mockStore.select).toHaveBeenCalled();
  //     const selectCalls = mockStore.select.calls.all();
  //     const writingModsCall = selectCalls.find(call => call.args[0] === fromWriting.getAvailableWritingMods);
  //     expect(writingModsCall).toBeDefined();
  //   }));

  //   it('should_use_observables_for_reactive_state_management', fakeAsync(() => {
  //     // Arrange
  //     isAuthSubject.next(true);

  //     // Act
  //     component.ngOnInit();
  //     tick();

  //     // Assert - reactive programming with RxJS
  //     expect(component.isAuth$).toBeDefined();
  //     expect(component.writingMods$).toBeDefined();
  //   }));
  // });
    
});