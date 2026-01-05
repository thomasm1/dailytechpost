import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of, throwError } from 'rxjs';
import { BlogModalComponent } from './blog-modal.component';
import { BlogsStore } from '../blogs-store.service';
import { BlogsService } from '../blogs.service';
import { Blog } from 'src/app/models/blog.model';

describe('BlogModalComponent', () => {
  let component: BlogModalComponent;
  let fixture: ComponentFixture<BlogModalComponent>;
  let mockBlogsStore: jasmine.SpyObj<BlogsStore>;
  let mockBlogsService: jasmine.SpyObj<BlogsService>;
  let mockDialogRef: jasmine.SpyObj<MatDialogRef<BlogModalComponent>>;
  let mockDialogData: any;

  // Sample test data following DRY principle and coding instructions
  const mockBlog: Blog = {
    id: 42,
    title: 'Advanced React Patterns',
    cat3: 'Web Dev Affairs',
    post: '<p>Deep dive into React hooks and component composition patterns for scalable applications.</p>',
    did: 'Jan 5, 2026',
    wordCount: 850
  } as Blog;

  beforeEach(waitForAsync(() => {
    // Create test doubles following Michael Feathers' seam extraction pattern
    mockBlogsStore = jasmine.createSpyObj('BlogsStore', ['saveBlog']);
    mockBlogsService = jasmine.createSpyObj('BlogsService', ['getBlog']);
    mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);
    
    // Default dialog data matching actual component usage
    mockDialogData = { idValue: '42' };

    TestBed.configureTestingModule({
      declarations: [BlogModalComponent],
      providers: [
        { provide: BlogsStore, useValue: mockBlogsStore },
        { provide: BlogsService, useValue: mockBlogsService },
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: mockDialogData }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    // Setup default service response to prevent errors during construction
    mockBlogsService.getBlog.and.returnValue(of(mockBlog));
    
    fixture = TestBed.createComponent(BlogModalComponent);
    component = fixture.componentInstance;
  });

  // Unit of work: component initialization via constructor
  // Scenario: valid blog ID provided in dialog data
  // Expected behavior: component created and blog loaded immediately
  describe('component_initialization', () => {
    it('should_create_component_when_valid_dependencies_provided', () => {
      // Act
      fixture.detectChanges();

      // Assert
      expect(component).toBeTruthy();
      expect(component).toBeInstanceOf(BlogModalComponent);
    });

    it('should_extract_blog_id_from_dialog_data_during_construction', () => {
      // Assert - happens in constructor before detectChanges
      expect(component.idFromBlogList).toBe('42');
    });

    it('should_call_getBlog_service_during_construction', () => {
      // Assert - constructor triggers service call
      expect(mockBlogsService.getBlog).toHaveBeenCalledWith('42');
    });

    it('should_initialize_with_loading_state_true_before_data_arrives', () => {
      // Arrange - create new component with delayed response
      const delayedObservable = new Promise(resolve => {
        setTimeout(() => resolve(of(mockBlog)), 100);
      });
      mockBlogsService.getBlog.and.returnValue(of(mockBlog));
      
      // Create new instance
      const newFixture = TestBed.createComponent(BlogModalComponent);
      const newComponent = newFixture.componentInstance;

      // Assert - initial state before async completes
      expect(newComponent.modalLoading).toBe(true);
    });
  });

  // Unit of work: blog data loading via constructor subscription
  // Scenario: BlogsService returns blog successfully
  // Expected behavior: blog data populated and loading set to false
  describe('blog_data_loading', () => {
    it('should_populate_blog_property_when_service_returns_data', fakeAsync(() => {
      // Arrange - fresh component creation
      const customBlog: Blog = {
        id: 99,
        title: 'Microservices Architecture',
        cat3: 'A.I.Now.',
        post: '<h1>Microservices</h1><p>Best practices for distributed systems.</p>',
        did: 'Dec 25, 2025'
      } as Blog;
      mockBlogsService.getBlog.and.returnValue(of(customBlog));
      
      // Act - create new component to trigger constructor
      const newFixture = TestBed.createComponent(BlogModalComponent);
      const newComponent = newFixture.componentInstance;
      tick();

      // Assert
      expect(newComponent.blog).toEqual(customBlog);
      expect(newComponent.blog.title).toBe('Microservices Architecture');
    }));

    it('should_set_modalLoading_false_when_blog_loaded_successfully', fakeAsync(() => {
      // Arrange
      mockBlogsService.getBlog.and.returnValue(of(mockBlog));
      
      // Act - create component and let subscription complete
      const newFixture = TestBed.createComponent(BlogModalComponent);
      const newComponent = newFixture.componentInstance;
      tick();

      // Assert
      expect(newComponent.modalLoading).toBe(false);
    }));

    it('should_handle_blog_with_html_content_in_post_field', fakeAsync(() => {
      // Arrange
      const htmlBlog: Blog = {
        ...mockBlog,
        post: '<h1>Title</h1><p>Paragraph with <strong>bold</strong> and <em>italic</em> text</p>'
      } as Blog;
      mockBlogsService.getBlog.and.returnValue(of(htmlBlog));

      // Act
      const newFixture = TestBed.createComponent(BlogModalComponent);
      const newComponent = newFixture.componentInstance;
      tick();

      // Assert
      expect(newComponent.blog.post).toContain('<h1>');
      expect(newComponent.blog.post).toContain('<strong>');
      expect(newComponent.blog.post).toContain('<em>');
    }));

    it('should_log_blog_data_to_console_after_loading', fakeAsync(() => {
      // Arrange
      spyOn(console, 'log');
      mockBlogsService.getBlog.and.returnValue(of(mockBlog));

      // Act
      const newFixture = TestBed.createComponent(BlogModalComponent);
      tick();

      // Assert - component logs blog after subscription
      expect(console.log).toHaveBeenCalledWith(mockBlog);
    }));

    it('should_call_getBlog_with_string_id_from_dialog_data', () => {
      // Arrange
      const stringId = '456';
      const dataWithStringId = { idValue: stringId };
      TestBed.overrideProvider(MAT_DIALOG_DATA, { useValue: dataWithStringId });
      mockBlogsService.getBlog.and.returnValue(of(mockBlog));

      // Act
      const newFixture = TestBed.createComponent(BlogModalComponent);

      // Assert
      expect(mockBlogsService.getBlog).toHaveBeenCalledWith(stringId); 
    });
  });

  // Unit of work: blog data loading errors
  // Scenario: BlogsService fails to retrieve blog
  // Expected behavior: error handled, loading state remains true
  describe('blog_data_loading_errors', () => {
    it('should_keep_loading_true_when_service_returns_error', fakeAsync(() => {
      // Arrange
      const error = new Error('Blog not found - 404');
      mockBlogsService.getBlog.and.returnValue(throwError(() => error));

      // Act - error in observable, subscription fails
      const newFixture = TestBed.createComponent(BlogModalComponent);
      const newComponent = newFixture.componentInstance;
      tick();

      // Assert - modalLoading never set to false
      expect(newComponent.modalLoading).toBe(true);
      expect(newComponent.blog).toBeUndefined();
    }));

    it('should_not_crash_when_network_error_occurs', fakeAsync(() => {
      // Arrange
      const networkError = new Error('Network timeout');
      mockBlogsService.getBlog.and.returnValue(throwError(() => networkError));

      // Act & Assert - should not throw
      expect(() => {
        const newFixture = TestBed.createComponent(BlogModalComponent);
        tick();
      }).not.toThrow();
    }));
  });

  // // Unit of work: saveMaterial method
  // // Scenario: user saves blog changes
  // // Expected behavior: blog persisted via store and dialog closed with save event
  // describe('saveMaterial', () => {
  //   it('should_call_blogsStore_saveBlog_with_correct_parameters', fakeAsync(() => {
  //     // Arrange
  //     fixture.detectChanges();
  //     tick();
  //     mockBlogsStore.saveBlog.and.returnValue(of(mockBlog));

  //     // Act
  //     component.saveMaterial(42, mockBlog);

  //     // Assert
  //     expect(mockBlogsStore.saveBlog).toHaveBeenCalledWith(42, mockBlog);
  //   }));

  //   it('should_close_dialog_with_save_event_after_store_call', fakeAsync(() => {
  //     // Arrange
  //     fixture.detectChanges();
  //     tick();
  //     mockBlogsStore.saveBlog.and.returnValue(of(mockBlog));
  //     component.fromDialog = 'edited-blog-data';

  //     // Act
  //     component.saveMaterial(42, mockBlog);

  //     // Assert
  //     expect(mockDialogRef.close).toHaveBeenCalledWith({
  //       event: 'save',
  //       data: 'edited-blog-data'
  //     });
  //   }));

  //   it('should_subscribe_to_saveBlog_observable', fakeAsync(() => {
  //     // Arrange
  //     fixture.detectChanges();
  //     tick();
  //     const mockObservable = of(mockBlog);
  //     spyOn(mockObservable, 'subscribe').and.callThrough();
  //     mockBlogsStore.saveBlog.and.returnValue(mockObservable);

  //     // Act
  //     component.saveMaterial(42, mockBlog);

  //     // Assert
  //     expect(mockObservable.subscribe).toHaveBeenCalled();
  //   }));

  //   it('should_handle_different_blog_ids_and_data', fakeAsync(() => {
  //     // Arrange
  //     fixture.detectChanges();
  //     tick();
  //     const customBlog: Blog = {
  //       id: 789,
  //       title: 'Serverless Architecture',
  //       cat3: 'Web Dev Affairs',
  //       post: 'AWS Lambda patterns',
  //       did: 'Jan 10, 2026'
  //     } as Blog;
  //     mockBlogsStore.saveBlog.and.returnValue(of(customBlog));

  //     // Act
  //     component.saveMaterial(789, customBlog);

  //     // Assert
  //     expect(mockBlogsStore.saveBlog).toHaveBeenCalledWith(789, customBlog);
  //   }));

  //   it('should_pass_fromDialog_data_when_closing', fakeAsync(() => {
  //     // Arrange
  //     fixture.detectChanges();
  //     tick();
  //     mockBlogsStore.saveBlog.and.returnValue(of(mockBlog));
  //     component.fromDialog = 'test-modal-data';

  //     // Act
  //     component.saveMaterial(42, mockBlog);

  //     // Assert
  //     const closeArgs = mockDialogRef.close.calls.mostRecent().args[0];
  //     expect(closeArgs.data).toBe('test-modal-data');
  //   }));
  // });

  // // Unit of work: closeDialog method
  // // Scenario: user cancels or closes modal without saving
  // // Expected behavior: dialog closed with close event, no save operation
  // describe('closeDialog', () => {
  //   it('should_close_dialog_with_close_event_when_invoked', () => {
  //     // Arrange
  //     component.fromDialog = 'cancel-data';

  //     // Act
  //     component.closeDialog();

  //     // Assert
  //     expect(mockDialogRef.close).toHaveBeenCalledWith({
  //       event: 'close',
  //       data: 'cancel-data'
  //     });
  //   });

  //   it('should_not_call_saveBlog_when_closing_without_save', () => {
  //     // Act
  //     component.closeDialog();

  //     // Assert
  //     expect(mockBlogsStore.saveBlog).not.toHaveBeenCalled();
  //   });

  //   it('should_pass_fromDialog_value_in_close_event', () => {
  //     // Arrange
  //     component.fromDialog = 'user-cancelled';

  //     // Act
  //     component.closeDialog();

  //     // Assert
  //     const closeArgs = mockDialogRef.close.calls.mostRecent().args[0];
  //     expect(closeArgs.event).toBe('close');
  //     expect(closeArgs.data).toBe('user-cancelled');
  //   });

  //   it('should_handle_undefined_fromDialog_gracefully', () => {
  //     // Arrange
  //     component.fromDialog = undefined;

  //     // Act & Assert - should not throw
  //     expect(() => component.closeDialog()).not.toThrow();
  //     expect(mockDialogRef.close).toHaveBeenCalledWith({
  //       event: 'close',
  //       data: undefined
  //     });
  //   });
  // });

  // // Unit of work: dialog data injection with MAT_DIALOG_DATA
  // // Scenario: various blog IDs passed via dialog injection
  // // Expected behavior: correct blog fetched based on injected idValue
  // describe('dialog_data_injection', () => {
  //   it('should_extract_idValue_from_MAT_DIALOG_DATA', () => {
  //     // Arrange
  //     const customData = { idValue: '123' };
  //     TestBed.overrideProvider(MAT_DIALOG_DATA, { useValue: customData });
  //     mockBlogsService.getBlog.and.returnValue(of(mockBlog));

  //     // Act
  //     const newFixture = TestBed.createComponent(BlogModalComponent);
  //     const newComponent = newFixture.componentInstance;

  //     // Assert
  //     expect(newComponent.idFromBlogList).toBe('123');
  //   });

  //   it('should_log_idFromBlogList_to_console_during_construction', () => {
  //     // Arrange
  //     spyOn(console, 'log');
  //     const customData = { idValue: '999' };
  //     TestBed.overrideProvider(MAT_DIALOG_DATA, { useValue: customData });
  //     mockBlogsService.getBlog.and.returnValue(of(mockBlog));

  //     // Act
  //     const newFixture = TestBed.createComponent(BlogModalComponent);

  //     // Assert
  //     expect(console.log).toHaveBeenCalledWith('this.fromBlogList string-999');
  //   });

  //   it('should_call_getBlog_with_id_from_dialog_data', () => {
  //     // Arrange
  //     const customData = { idValue: '555' };
  //     TestBed.overrideProvider(MAT_DIALOG_DATA, { useValue: customData });
  //     mockBlogsService.getBlog.and.returnValue(of(mockBlog));

  //     // Act
  //     const newFixture = TestBed.createComponent(BlogModalComponent);

  //     // Assert
  //     expect(mockBlogsService.getBlog).toHaveBeenCalledWith('555');
  //   });
  // });

  // // Unit of work: ngOnInit lifecycle hook
  // // Scenario: Angular calls ngOnInit after construction
  // // Expected behavior: hook executes without errors (currently empty)
  // describe('ngOnInit_lifecycle', () => {
  //   it('should_execute_ngOnInit_without_throwing_errors', fakeAsync(() => {
  //     // Arrange
  //     fixture.detectChanges();
  //     tick();

  //     // Act & Assert
  //     expect(() => component.ngOnInit()).not.toThrow();
  //   }));

  //   it('should_have_blog_loaded_before_ngOnInit_called', fakeAsync(() => {
  //     // Arrange
  //     fixture.detectChanges();
  //     tick();

  //     // Act
  //     component.ngOnInit();

  //     // Assert - blog loaded in constructor, available in ngOnInit
  //     expect(component.blog).toBeDefined();
  //     expect(component.blog.id).toBe(42);
  //   }));
  // });

  // // Unit of work: complete user workflow
  // // Scenario: user opens modal, views blog, and saves changes
  // // Expected behavior: seamless data flow from load to save to close
  // describe('complete_user_workflow', () => {
  //   it('should_support_full_view_and_save_workflow', fakeAsync(() => {
  //     // Arrange - Modal construction triggers blog load
  //     mockBlogsStore.saveBlog.and.returnValue(of(mockBlog));
  //     fixture.detectChanges();
  //     tick();

  //     // Assert - Blog loaded via constructor subscription
  //     expect(component.blog).toEqual(mockBlog);
  //     expect(component.modalLoading).toBe(false);

  //     // Act - User modifies and saves
  //     const updatedBlog: Blog = { 
  //       ...mockBlog, 
  //       title: 'Updated React Patterns',
  //       post: '<p>Updated content with new examples</p>'
  //     };
  //     component.saveMaterial(42, updatedBlog);

  //     // Assert - Save triggered and dialog closed with correct event
  //     expect(mockBlogsStore.saveBlog).toHaveBeenCalledWith(42, updatedBlog);
  //     expect(mockDialogRef.close).toHaveBeenCalledWith({
  //       event: 'save',
  //       data: component.fromDialog
  //     });
  //   }));

  //   it('should_support_view_and_cancel_workflow', fakeAsync(() => {
  //     // Arrange - Modal opens and loads blog
  //     fixture.detectChanges();
  //     tick();

  //     // Assert - Blog loaded successfully
  //     expect(component.blog).toEqual(mockBlog);
  //     expect(component.modalLoading).toBe(false);

  //     // Act - User cancels without saving
  //     component.closeDialog();

  //     // Assert - Dialog closed without save operation
  //     expect(mockBlogsStore.saveBlog).not.toHaveBeenCalled();
  //     expect(mockDialogRef.close).toHaveBeenCalledWith({
  //       event: 'close',
  //       data: component.fromDialog
  //     });
  //   }));

  //   it('should_handle_rapid_save_and_close_sequence', fakeAsync(() => {
  //     // Arrange
  //     mockBlogsStore.saveBlog.and.returnValue(of(mockBlog));
  //     fixture.detectChanges();
  //     tick();

  //     // Act - Rapid save then close
  //     component.saveMaterial(42, mockBlog);
  //     component.closeDialog();

  //     // Assert - Both operations executed
  //     expect(mockBlogsStore.saveBlog).toHaveBeenCalled();
  //     expect(mockDialogRef.close).toHaveBeenCalledTimes(2); // Once for save, once for close
  //   }));
  // });
});