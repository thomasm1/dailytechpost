import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { BlogsGridComponent } from './blogs-grid.component';
import { BlogsService } from '../blogs.service';

describe('BlogsGridComponent', () => {
  let component: BlogsGridComponent;
  let fixture: ComponentFixture<BlogsGridComponent>;
  let mockBlogService: jasmine.SpyObj<BlogsService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockBlogService = jasmine.createSpyObj('BlogService', ['getAllBlogs', 'getBlogsByCategories']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [BlogsGridComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: BlogsService, useValue: mockBlogService },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BlogsGridComponent);
    component = fixture.componentInstance;
  });

  describe('navigateToBlog', () => {
    it('should_navigate_to_blog_detail_page_when_valid_blog_provided', () => {
      // Arrange
      const mockBlog = { id: 123, title: 'Test Blog', did: 'Jan 1, 2026' };

      // Act
      component.navigateToBlog(mockBlog);

      // Assert
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/blog', 123]);
    });
  });

  describe('calculateWordCount', () => {
    it('should_return_zero_when_text_is_null_or_empty', () => {
      // Arrange & Act
      const result1 = component.calculateWordCount('');
      const result2 = component.calculateWordCount(null as any);

      // Assert
      expect(result1).toBe(0);
      expect(result2).toBe(0);
    });

    it('should_count_words_correctly_when_text_has_multiple_words', () => {
      // Arrange
      const text = 'The quick brown fox jumps';

      // Act
      const result = component.calculateWordCount(text);

      // Assert
      expect(result).toBe(5);
    });

    it('should_handle_multiple_spaces_between_words', () => {
      // Arrange
      const text = 'word1    word2   word3';

      // Act
      const result = component.calculateWordCount(text);

      // Assert
      expect(result).toBe(3);
    });
  });

  describe('stripHtml', () => {
    it('should_remove_html_tags_when_text_contains_markup', () => {
      // Arrange
      const htmlText = '<p>Hello <strong>World</strong></p>';

      // Act
      const result = component.stripHtml(htmlText);

      // Assert
      expect(result).toBe('Hello World');
    });
  });

  describe('fetchBlogs', () => {
    it('should_filter_blogs_based_on_selected_categories', () => {
      // Arrange
      component.allBlogs = [
        { id: 1, cat3: 'Tech', post: '<p>Post 1</p>' },
        { id: 2, cat3: 'Health', post: '<p>Post 2</p>' },
        { id: 3, cat3: 'Tech', post: '<p>Post 3</p>' }
      ];
      component.categoriesForm.setValue({ selectedCategories: ['Tech'] });

});

  });
});