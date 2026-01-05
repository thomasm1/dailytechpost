import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of, BehaviorSubject } from 'rxjs';
import { BlogsComponent } from './blogs.component';
import { BlogsService } from '../blogs.service';
import { Blog } from 'src/app/models/blog.model';

describe('BlogsComponent', () => {
  let component: BlogsComponent;
  let fixture: ComponentFixture<BlogsComponent>;
  let mockBlogsService: jasmine.SpyObj<BlogsService>;
  let paramMapSubject: BehaviorSubject<any>;

  // Sample test data following DRY principle
  const mockBlogs: Blog[] = [
    { id: 1, title: 'Web Dev Blog', cat3: 'Web Dev Affairs', post: 'Content 1', did: 'Jan 1' } as Blog,
    { id: 2, title: 'AI Blog 1', cat3: 'A.I.Now.', post: 'AI Content 1', did: 'Jan 2' } as Blog,
    { id: 3, title: 'AI Blog 2', cat3: 'A.I.Now.', post: 'AI Content 2', did: 'Jan 3' } as Blog,
    { id: 4, title: 'Blockchain Blog', cat3: 'Musing Blockchain', post: 'Blockchain Content', did: 'Jan 4' } as Blog,
    { id: 5, title: 'Quantum Blog', cat3: 'Quantum Data', post: 'Quantum Content', did: 'Jan 5' } as Blog
  ];

  beforeEach(waitForAsync(() => {
    // Create test doubles following Michael Feathers' seam extraction pattern
    mockBlogsService = jasmine.createSpyObj('BlogsService', ['getAllBlogs']);
    
    // Create observable paramMap for route testing
    paramMapSubject = new BehaviorSubject({
      get: (key: string) => '0'
    });

    TestBed.configureTestingModule({
      declarations: [BlogsComponent],
      providers: [
        { provide: BlogsService, useValue: mockBlogsService },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: paramMapSubject.asObservable()
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsComponent);
    component = fixture.componentInstance;
  });

  // Unit of work: component initialization
  // Scenario: valid dependencies provided
  // Expected behavior: component instance created
  describe('component_initialization', () => {
    it('should_create_component_when_dependencies_are_valid', () => {
      // Arrange
      mockBlogsService.getAllBlogs.and.returnValue(of([]));

      // Act
      fixture.detectChanges();

      // Assert
      expect(component).toBeTruthy();
      expect(component).toBeInstanceOf(BlogsComponent);
    });

    it('should_initialize_with_loading_state_true', () => {
      // Assert
      expect(component.blogsLoading).toBe(true);
    });

    it('should_initialize_with_empty_blog_arrays', () => {
      // Assert
      expect(component.blogs).toEqual([]);
      expect(component.blogsByCat).toEqual([]);
    });
  });

  // Unit of work: getBlogs
  // Scenario: category parameter is '0' (all blogs)
  // Expected behavior: loads all blogs without filtering
  describe('getBlogs_when_category_is_all', () => {
    it('should_load_all_blogs_when_category_parameter_is_zero', fakeAsync(() => {
      // Arrange
      mockBlogsService.getAllBlogs.and.returnValue(of(mockBlogs));
      paramMapSubject.next({ get: (key: string) => '0' });

      // Act
      component.ngOnInit();
      tick();

      // Assert
      expect(component.blogsByCat.length).toBe(5);
      expect(component.blogsByCat).toEqual(mockBlogs);
      expect(component.blogsLoading).toBe(false);
    }));

    it('should_not_filter_blogs_when_showing_all_categories', fakeAsync(() => {
      // Arrange
      mockBlogsService.getAllBlogs.and.returnValue(of(mockBlogs));
      paramMapSubject.next({ get: (key: string) => '0' });

      // Act
      component.ngOnInit();
      tick();

      // Assert
      const categories = [...new Set(component.blogsByCat.map(b => b.cat3))];
      expect(categories.length).toBeGreaterThan(1); // Multiple categories present
    }));

    it('should_set_loading_false_when_all_blogs_loaded_successfully', fakeAsync(() => {
      // Arrange
      mockBlogsService.getAllBlogs.and.returnValue(of(mockBlogs));
      paramMapSubject.next({ get: (key: string) => '0' });
      component.blogsLoading = true;

      // Act
      component.ngOnInit();
      tick();

      // Assert
      expect(component.blogsLoading).toBe(false);
    }));
  });

  // Unit of work: getBlogs
  // Scenario: specific category parameter provided
  // Expected behavior: filters blogs by category
  describe('getBlogs_when_specific_category', () => {
    it('should_filter_ai_blogs_when_category_is_ai_now', fakeAsync(() => {
      // Arrange
      mockBlogsService.getAllBlogs.and.returnValue(of(mockBlogs));
      paramMapSubject.next({ get: (key: string) => 'A.I.Now.' });

      // Act
      component.ngOnInit();
      tick();

      // Assert
      expect(component.blogsByCat.length).toBe(2); // Two AI blogs in mock data
      expect(component.blogsByCat.every(b => b.cat3 === 'A.I.Now.')).toBe(true);
      expect(component.blogsLoading).toBe(false);
    }));

    it('should_filter_web_dev_blogs_when_category_is_web_dev_affairs', fakeAsync(() => {
      // Arrange
      mockBlogsService.getAllBlogs.and.returnValue(of(mockBlogs));
      paramMapSubject.next({ get: (key: string) => 'Web Dev Affairs' });

      // Act
      component.ngOnInit();
      tick();

      // Assert
      expect(component.blogsByCat.length).toBe(1);
      expect(component.blogsByCat[0].cat3).toBe('Web Dev Affairs');
      expect(component.blogsLoading).toBe(false);
    }));

    it('should_filter_blockchain_blogs_when_category_is_musing_blockchain', fakeAsync(() => {
      // Arrange
      mockBlogsService.getAllBlogs.and.returnValue(of(mockBlogs));
      paramMapSubject.next({ get: (key: string) => 'Musing Blockchain' });

      // Act
      component.ngOnInit();
      tick();

      // Assert
      expect(component.blogsByCat.length).toBe(1);
      expect(component.blogsByCat[0].cat3).toBe('Musing Blockchain');
    }));

    it('should_return_empty_array_when_category_has_no_matching_blogs', fakeAsync(() => {
      // Arrange
      mockBlogsService.getAllBlogs.and.returnValue(of(mockBlogs));
      paramMapSubject.next({ get: (key: string) => 'NonExistent Category' });

      // Act
      component.ngOnInit();
      tick();

      // Assert
      expect(component.blogsByCat.length).toBe(0);
      expect(component.blogsLoading).toBe(false);
    }));

    it('should_store_all_blogs_before_filtering_by_category', fakeAsync(() => {
      // Arrange
      mockBlogsService.getAllBlogs.and.returnValue(of(mockBlogs));
      paramMapSubject.next({ get: (key: string) => 'A.I.Now.' });

      // Act
      component.ngOnInit();
      tick();

      // Assert
      expect(component.blogs.length).toBe(5); // All blogs stored
      expect(component.blogsByCat.length).toBe(2); // Only AI blogs filtered
    }));
  });

  // Unit of work: getBlogs
  // Scenario: service returns empty data
  // Expected behavior: handles gracefully
  describe('getBlogs_edge_cases', () => {
    it('should_handle_empty_blog_list_gracefully', fakeAsync(() => {
      // Arrange
      mockBlogsService.getAllBlogs.and.returnValue(of([]));
      paramMapSubject.next({ get: (key: string) => '0' });

      // Act
      component.ngOnInit();
      tick();

      // Assert
      expect(component.blogsByCat.length).toBe(0);
      expect(component.blogsLoading).toBe(false);
    }));

    it('should_handle_null_category_parameter_as_filter', fakeAsync(() => {
      // Arrange
      mockBlogsService.getAllBlogs.and.returnValue(of(mockBlogs));
      paramMapSubject.next({ get: (key: string) => null });

      // Act
      component.ngOnInit();
      tick();

      // Assert - should filter by null category (no matches)
      expect(component.blogsByCat.length).toBe(0);
    }));
  });

  // Unit of work: route parameter changes
  // Scenario: user navigates between categories
  // Expected behavior: updates blog list dynamically
  describe('route_parameter_changes', () => {
    it('should_update_blogs_when_category_parameter_changes', fakeAsync(() => {
      // Arrange - start with all blogs
      mockBlogsService.getAllBlogs.and.returnValue(of(mockBlogs));
      paramMapSubject.next({ get: (key: string) => '0' });
      component.ngOnInit();
      tick();
      
      expect(component.blogsByCat.length).toBe(5);

      // Act - change to specific category
      paramMapSubject.next({ get: (key: string) => 'A.I.Now.' });
      tick();

      // Assert - blogs filtered by new category
      expect(component.blogsByCat.length).toBe(2);
      expect(component.blogsByCat.every(b => b.cat3 === 'A.I.Now.')).toBe(true);
    }));

    it('should_reload_from_service_when_category_changes', fakeAsync(() => {
      // Arrange
      mockBlogsService.getAllBlogs.and.returnValue(of(mockBlogs));
      paramMapSubject.next({ get: (key: string) => '0' });
      component.ngOnInit();
      tick();

      // Reset spy to count new calls
      mockBlogsService.getAllBlogs.calls.reset();

      // Act - trigger route change
      paramMapSubject.next({ get: (key: string) => 'Web Dev Affairs' });
      tick();

      // Assert - service called again
      expect(mockBlogsService.getAllBlogs).toHaveBeenCalled();
    }));
  });

  // Unit of work: ngOnDestroy lifecycle
  // Scenario: component destroyed while subscription active
  // Expected behavior: subscription cleaned up to prevent memory leaks
  describe('ngOnDestroy', () => {
    it('should_unsubscribe_from_blogs_when_component_destroyed', fakeAsync(() => {
      // Arrange
      mockBlogsService.getAllBlogs.and.returnValue(of(mockBlogs));
      paramMapSubject.next({ get: (key: string) => '0' });
      component.ngOnInit();
      tick();
      
      spyOn(component.blogsSubscription, 'unsubscribe');

      // Act
      component.ngOnDestroy();

      // Assert
      expect(component.blogsSubscription.unsubscribe).toHaveBeenCalled();
    }));

    it('should_handle_destroy_gracefully_when_no_subscription_exists', () => {
      // Arrange
      component.blogsSubscription = undefined;

      // Act & Assert - should not throw error
      expect(() => component.ngOnDestroy()).not.toThrow();
    });
  });

  // Unit of work: complete user workflow
  // Scenario: user navigates from all blogs to specific category
  // Expected behavior: seamless filtering and data updates
  describe('complete_user_workflow', () => {
    it('should_support_full_navigation_flow_from_all_to_filtered_blogs', fakeAsync(() => {
      // Arrange - Initial load shows all blogs
      mockBlogsService.getAllBlogs.and.returnValue(of(mockBlogs));
      paramMapSubject.next({ get: (key: string) => '0' });

      // Act - Component initialization
      component.ngOnInit();
      tick();

      // Assert - All blogs loaded
      expect(component.blogsByCat.length).toBe(5);
      expect(component.blogsLoading).toBe(false);

      // Act - User navigates to AI category
      paramMapSubject.next({ get: (key: string) => 'A.I.Now.' });
      tick();

      // Assert - Filtered to AI blogs only
      expect(component.blogsByCat.length).toBe(2);
      expect(component.blogsByCat.every(b => b.cat3 === 'A.I.Now.')).toBe(true);

      // Act - User navigates back to all blogs
      paramMapSubject.next({ get: (key: string) => '0' });
      tick();

      // Assert - All blogs displayed again
      expect(component.blogsByCat.length).toBe(5);
    }));
  });

  // Unit of work: service integration
  // Scenario: BlogsService API contract
  // Expected behavior: proper service method usage
  describe('service_integration', () => {
    it('should_call_getAllBlogs_on_initialization', fakeAsync(() => {
      // Arrange
      mockBlogsService.getAllBlogs.and.returnValue(of(mockBlogs));
      paramMapSubject.next({ get: (key: string) => '0' });

      // Act
      component.ngOnInit();
      tick();

      // Assert
      expect(mockBlogsService.getAllBlogs).toHaveBeenCalled();
    }));

    it('should_handle_service_observable_completion', fakeAsync(() => {
      // Arrange
      mockBlogsService.getAllBlogs.and.returnValue(of(mockBlogs));
      paramMapSubject.next({ get: (key: string) => '0' });

      // Act
      component.ngOnInit();
      tick();

      // Assert - subscription should be defined after service call
      expect(component.blogsSubscription).toBeDefined();
      expect(component.blogsLoading).toBe(false);
    }));
  });
});