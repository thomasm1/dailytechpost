import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { of, throwError } from 'rxjs';
import { BlogsListComponent } from './blogs-list.component';
import { BlogsService } from '../blogs.service';
import { Blog } from 'src/app/models/blog.model';
import { BlogModalComponent } from '../blog-modal/blog-modal.component';

describe('BlogsListComponent', () => {
  let component: BlogsListComponent;
  let fixture: ComponentFixture<BlogsListComponent>;
  let mockBlogsService: jasmine.SpyObj<BlogsService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockDialog: jasmine.SpyObj<MatDialog>;

  // Sample test data following DRY principle
  const mockBlogs: Blog[] = [
    { id: 1, title: 'Web Dev Blog', cat3: 'Web Dev Affairs', post: 'Content 1', did: 'Jan 1' } as Blog,
    { id: 2, title: 'AI Blog', cat3: 'A.I.Now.', post: 'Content 2', did: 'Jan 2' } as Blog,
    { id: 3, title: 'Blockchain Blog', cat3: 'Musing Blockchain', post: 'Content 3', did: 'Jan 3' } as Blog,
    { id: 4, title: 'Sociology Blog', cat3: 'Sociology Tomorrow!', post: 'Content 4', did: 'Jan 4' } as Blog,
    { id: 5, title: 'Quantum Blog', cat3: 'Quantum Data', post: 'Content 5', did: 'Jan 5' } as Blog
  ];

  beforeEach(waitForAsync(() => {
    // Create test doubles following Michael Feathers' seam extraction pattern
    mockBlogsService = jasmine.createSpyObj('BlogsService', ['getAllBlogs']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockDialog = jasmine.createSpyObj('MatDialog', ['open']);

    TestBed.configureTestingModule({
      declarations: [BlogsListComponent],
      providers: [
        { provide: BlogsService, useValue: mockBlogsService },
        { provide: Router, useValue: mockRouter },
        { provide: MatDialog, useValue: mockDialog }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    // Setup session storage for authentication context
    spyOn(sessionStorage, 'getItem').and.returnValue('testuser');
    
    fixture = TestBed.createComponent(BlogsListComponent);
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
      expect(component).toBeInstanceOf(BlogsListComponent);
    });

    it('should_retrieve_authenticated_username_from_session_on_init', () => {
      // Arrange
      mockBlogsService.getAllBlogs.and.returnValue(of([]));

      // Act
      component.ngOnInit();

      // Assert
      expect(sessionStorage.getItem).toHaveBeenCalledWith('AuthenticatedUser');
      expect(component.username).toBe('testuser');
    });
  });

  // Unit of work: refreshBlogs
  // Scenario: service returns blog data successfully
  // Expected behavior: blogs loaded and categorized
  describe('refreshBlogs', () => {
    it('should_load_and_categorize_blogs_when_service_returns_data', fakeAsync(() => {
      // Arrange
      mockBlogsService.getAllBlogs.and.returnValue(of(mockBlogs));

      // Act
      component.refreshBlogs();
      tick();

      // Assert
      expect(component.blogs.length).toBe(5);
      expect(component.blogsLoading).toBe(false);
      expect(mockBlogsService.getAllBlogs).toHaveBeenCalled();
    }));

    it('should_set_loading_false_when_blogs_fetched_successfully', fakeAsync(() => {
      // Arrange
      mockBlogsService.getAllBlogs.and.returnValue(of(mockBlogs));
      component.blogsLoading = true;

      // Act
      component.refreshBlogs();
      tick();

      // Assert
      expect(component.blogsLoading).toBe(false);
    }));

    it('should_handle_empty_blog_list_gracefully', fakeAsync(() => {
      // Arrange
      mockBlogsService.getAllBlogs.and.returnValue(of([]));

      // Act
      component.refreshBlogs();
      tick();

      // Assert
      expect(component.blogs.length).toBe(0);
      expect(component.blogsLoading).toBe(false);
    }));

    it('should_handle_service_error_gracefully', fakeAsync(() => {
      // Arrange
      const error = new Error('Network error');
      mockBlogsService.getAllBlogs.and.returnValue(throwError(() => error));

      // Act
      component.refreshBlogs();
      tick();

      // Assert
      expect(component.blogsLoading).toBe(true); // Loading state preserved on error
    }));
  });

  // Unit of work: categoryUpdater
  // Scenario: blogs contain multiple categories
  // Expected behavior: blogs sorted into category arrays
  describe('categoryUpdater', () => {
    it('should_filter_web_dev_blogs_when_category_is_web_dev_affairs', () => {
      // Arrange
      const webDevBlogs = mockBlogs.filter(b => b.cat3 === 'Web Dev Affairs');

      // Act
      component.categoryUpdater(mockBlogs);

      // Assert
      expect(component.blogsWeb.length).toBe(webDevBlogs.length);
      expect(component.blogsWeb[0].cat3).toBe('Web Dev Affairs');
    });

    it('should_filter_ai_blogs_when_category_is_ai_now', () => {
      // Arrange
      const aiBlogs = mockBlogs.filter(b => b.cat3 === 'A.I.Now.');

      // Act
      component.categoryUpdater(mockBlogs);

      // Assert
      expect(component.blogsAI.length).toBe(aiBlogs.length);
      expect(component.blogsAI[0].cat3).toBe('A.I.Now.');
    });

    it('should_filter_blockchain_blogs_when_category_is_musing_blockchain', () => {
      // Arrange
      const blockchainBlogs = mockBlogs.filter(b => b.cat3 === 'Musing Blockchain');

      // Act
      component.categoryUpdater(mockBlogs);

      // Assert
      expect(component.blogsBlockchain.length).toBe(blockchainBlogs.length);
      expect(component.blogsBlockchain[0].cat3).toBe('Musing Blockchain');
    });

    it('should_filter_sociology_blogs_when_category_is_sociology_tomorrow', () => {
      // Arrange
      const sociologyBlogs = mockBlogs.filter(b => b.cat3 === 'Sociology Tomorrow!');

      // Act
      component.categoryUpdater(mockBlogs);

      // Assert
      expect(component.blogsSoc.length).toBe(sociologyBlogs.length);
      expect(component.blogsSoc[0].cat3).toBe('Sociology Tomorrow!');
    });

    it('should_filter_quantum_blogs_when_category_is_quantum_data', () => {
      // Arrange
      const quantumBlogs = mockBlogs.filter(b => b.cat3 === 'Quantum Data');

      // Act
      component.categoryUpdater(mockBlogs);

      // Assert
      expect(component.blogsQuantum.length).toBe(quantumBlogs.length);
      expect(component.blogsQuantum[0].cat3).toBe('Quantum Data');
    });

    it('should_handle_blogs_with_no_matching_categories', () => {
      // Arrange
      const unknownBlogs: Blog[] = [
        { id: 99, title: 'Unknown', cat3: 'Unknown Category', post: 'Content', did: 'Jan 1' } as Blog
      ];

      // Act
      component.categoryUpdater(unknownBlogs);

      // Assert
      expect(component.blogsWeb.length).toBe(0);
      expect(component.blogsAI.length).toBe(0);
      expect(component.blogsBlockchain.length).toBe(0);
      expect(component.blogsSoc.length).toBe(0);
      expect(component.blogsQuantum.length).toBe(0);
    });
  });

  // Unit of work: viewBlog
  // Scenario: user clicks to view individual blog
  // Expected behavior: navigates to blog detail page
  describe('viewBlog', () => {
    it('should_navigate_to_blog_detail_when_valid_id_provided', () => {
      // Arrange
      const blogId = 123;

      // Act
      component.viewBlog(blogId);

      // Assert
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/blog', blogId]);
    });

    it('should_navigate_with_zero_id_when_first_blog_selected', () => {
      // Arrange
      const blogId = 0;

      // Act
      component.viewBlog(blogId);

      // Assert
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/blog', 0]);
    });
  });

  // Unit of work: viewAllBlogs
  // Scenario: user clicks to view all blogs in category
  // Expected behavior: navigates to category list page
  describe('viewAllBlogs', () => {
    it('should_navigate_to_category_page_when_category_provided', () => {
      // Arrange
      const category = 'A.I.Now.';

      // Act
      component.viewAllBlogs(category);

      // Assert
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/blogs', category]);
    });

    it('should_navigate_with_web_dev_category_when_web_dev_selected', () => {
      // Arrange
      const category = 'Web Dev Affairs';

      // Act
      component.viewAllBlogs(category);

      // Assert
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/blogs', 'Web Dev Affairs']);
    });
  });

  // Unit of work: openBlogModal
  // Scenario: user clicks to open blog in modal dialog
  // Expected behavior: modal opens with blog content
  describe('openBlogModal', () => {
    it('should_open_modal_dialog_when_valid_blog_id_provided', () => {
      // Arrange
      const blogId = 42;
      const expectedConfig = {
        width: '80%',
        maxWidth: '600px',
        backdropClass: 'custom-dialog-backdrop-class',
        panelClass: 'custom-dialog-panel-class',
        data: { id: blogId }
      };

      // Act
      component.openBlogModal(blogId);

      // Assert
      expect(mockDialog.open).toHaveBeenCalledWith(BlogModalComponent, expectedConfig);
    });

    it('should_pass_correct_blog_id_to_modal_component', () => {
      // Arrange
      const blogId = 99;

      // Act
      component.openBlogModal(blogId);

      // Assert
      const callArgs = mockDialog.open.calls.mostRecent().args;
      expect((callArgs[1].data as { id: number }).id).toBe(blogId);
    });
  });

  // Unit of work: ngOnDestroy lifecycle
  // Scenario: component destroyed while subscription active
  // Expected behavior: subscription cleaned up to prevent memory leaks
  describe('ngOnDestroy', () => {
    it('should_unsubscribe_from_blogs_when_component_destroyed', fakeAsync(() => {
      // Arrange
      mockBlogsService.getAllBlogs.and.returnValue(of(mockBlogs));
      component.refreshBlogs();
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

  // Unit of work: integration workflow
  // Scenario: complete user journey from component init to blog view
  // Expected behavior: data loads, categorizes, and navigation works
  describe('complete_user_workflow', () => {
    it('should_load_categorize_and_enable_navigation_on_successful_init', fakeAsync(() => {
      // Arrange
      mockBlogsService.getAllBlogs.and.returnValue(of(mockBlogs));

      // Act - simulate component lifecycle
      component.ngOnInit();
      tick();

      // Assert - verify complete workflow
      expect(component.blogs.length).toBe(5);
      expect(component.blogsAI.length).toBeGreaterThan(0);
      expect(component.blogsLoading).toBe(false);

      // Act - simulate user navigation
      component.viewBlog(1);
      
      // Assert - verify navigation triggered
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/blog', 1]);
    }));
  });
});