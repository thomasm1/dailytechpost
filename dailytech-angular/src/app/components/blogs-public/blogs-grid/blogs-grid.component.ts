import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // Added ChangeDetectorRef import
import { UntypedFormBuilder, UntypedFormGroup, UntypedFormArray } from '@angular/forms';
import { BlogsService } from '../blogs.service';
import { StatisticsService } from '../Statistics.service';
import { Blog, CategoryStat, BlogStatistics } from '../../../models/blog.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs-grid',
  templateUrl: './blogs-grid.component.html',
  styleUrls: ['./blogs-grid.component.scss']
})
export class BlogsGridComponent implements OnInit {
  categories: string[] = [];
  blogs: Blog[] = [];
  allBlogs: Blog[] = [];
  categoriesForm: UntypedFormGroup;
  fetchBlogsEnabled: boolean = false;
  loading: boolean = true;

  statistics: BlogStatistics | null = null;
  categoryStats: CategoryStat[] = [];

  // Material Table columns
  categoryColumns: string[] = ['category', 'count', 'avgWordCount'];
  authorColumns: string[] = ['author', 'count'];
  monthColumns: string[] = ['month', 'count'];
  stateColumns: string[] = ['state', 'count'];
  blogColumns: string[] = ['date','title', 'category', 'preview', 'wordCount'];

  // charting options for ag-charts v9
  options: any = {
      data: [],
      series: [
        { 
          type: 'bar' as const, 
          xKey: 'category', 
          yKey: 'count',
          yName: 'Blog Count',
          fill: '#ff9800',
          stroke: '#ff9800'
        },
        { 
          type: 'bar' as const, 
          xKey: 'category', 
          yKey: 'avgWordCount',
          yName: 'Avg Word Count',
          fill: '#2196f3',
          stroke: '#2196f3'
        }
      ],
      axes: [
        {
          type: 'category' as const,
          position: 'bottom' as const,
          title: { text: 'Category' }
        },
        {
          type: 'number' as const,
          position: 'left' as const,
          keys: ['count'],
          label: { 
            color: '#ff9800',
            format: '%.0f'
          }
        },
        {
          type: 'number' as const,
          position: 'right' as const,
          keys: ['avgWordCount'],
          label: { 
            color: '#2196f3',
            format: '%.0f'
          }
        }
      ]
  };
  constructor(
    private router: Router,
    private fb: UntypedFormBuilder,
    private blogsService: BlogsService,
    private statisticsService: StatisticsService,
    private cdr: ChangeDetectorRef // Added ChangeDetectorRef injection
  ) {
    this.categoriesForm = this.fb.group({
      selectedCategories: this.fb.array([])
    });
  }

  ngOnInit(): void {
    console.log("Loading blogs and statistics from AWS Lambda...");
    this.loadAllBlogs();
  }

stripHtml(html: string): string {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
}
  loadAllBlogs(): void {
    console.log('Calling blogsService.getAllBlogs()...');
    this.blogsService.getAllBlogs().subscribe({
      next: (blogs: Blog[]) => {
        console.log('SUCCESS: Received blogs:', blogs.length);
        this.allBlogs = blogs;
        this.blogs = blogs;

        // Update statistics service
        this.statisticsService.setBlogs(blogs);

        // Subscribe to statistics
        this.statisticsService.getBlogStatistics().subscribe(stats => {
          console.log('Statistics calculated:', stats);
          this.statistics = stats;
          this.calculateLocalStats();
          this.loading = false;
          this.cdr.detectChanges(); // Added: Force change detection to update view
        });

        // Extract categories from blogs
        this.extractCategoriesFromBlogs();
      },
      error: (err) => {
        console.error('ERROR loading blogs:', err);
        this.loading = false;
        this.cdr.detectChanges(); // Added: Force change detection on error
      }
    });
  }

  extractCategoriesFromBlogs(): void {
    const categorySet = new Set<string>();
    this.allBlogs.forEach(blog => {
      if (blog.cat3) {
        categorySet.add(blog.cat3);
      }
    });
    this.categories = Array.from(categorySet).sort();
    console.log('Categories extracted:', this.categories);
  }

  get selectedCategories() {
    return this.categoriesForm.get('selectedCategories') as UntypedFormArray;
  }

  onCheckboxChange(event: any, category: string): void {
    const selectedCategories = this.categoriesForm.get('selectedCategories') as UntypedFormArray;

    if (event.checked) {
      selectedCategories.push(this.fb.control(category));
    } else {
      const index = selectedCategories.controls.findIndex(x => x.value === category);
      selectedCategories.removeAt(index);
    }

    this.fetchBlogsEnabled = selectedCategories.length > 0;
    
    // Auto-refresh filter on checkbox change
    this.fetchBlogs();
  }

  fetchBlogs(): void {
    const selectedCategories = this.categoriesForm.value.selectedCategories;
    console.log('Filtering blogs by categories:', selectedCategories);

    if (selectedCategories.length > 0) {
      this.blogs = this.allBlogs.filter(blog => selectedCategories.includes(blog.cat3));
    } else {
      this.blogs = this.allBlogs;
    }

    this.calculateLocalStats();
  }

  calculateLocalStats(): void {
    const statsMap = new Map<string, { count: number, totalWords: number }>();

    this.blogs.forEach(blog => {
      const wordCount = blog.wordCount ||  this.calculateWordCount(blog.post || '');
      const category = blog.cat3 || 'Uncategorized';

      if (!statsMap.has(category)) {
        statsMap.set(category, { count: 0, totalWords: 0 });
      }

      const stat = statsMap.get(category)!;
      stat.count++;
      stat.totalWords += wordCount;
    });

    this.categoryStats = [];
    statsMap.forEach((value, key) => {
      this.categoryStats.push({
        category: key,
        count: value.count,
        avgWordCount: value.count > 0 ? Math.round(value.totalWords / value.count) : 0
      });
    });

    this.categoryStats.sort((a, b) => b.count - a.count);
    console.log('Category stats calculated:', this.categoryStats);
    
    // Update chart data
    this.updateChartData();
  }

  updateChartData(): void {
    this.options = {
      ...this.options,
      data: this.categoryStats
    };
  }

 calculateWordCount(text: string): number {
  if (!text) return 0;
  // Remove HTML tags and count words
  const plainText = text.replace(/<[^>]*>/g, ' ');
  const words = plainText.trim().split(/\s+/).filter(word => word.length > 0);
  return words.length;
}
  resetFilters(): void {
    this.selectedCategories.clear();
    this.blogs = this.allBlogs;
    this.calculateLocalStats();
    this.fetchBlogsEnabled = false;
  }


public navigateToBlog(blog: any): void {
  // Adjust the route path based on your routing configuration
  this.router.navigate(['/blog', blog.id]);
  // Alternative: this.router.navigate(['/blogs', blog.id]);
}
}
