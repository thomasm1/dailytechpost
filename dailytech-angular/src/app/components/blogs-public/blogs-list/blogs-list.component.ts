import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router'; 
import { BlogsService } from '../blogs.service';
import { Blog } from '../../../models/blog.model';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { BlogModalComponent } from '../blog-modal/blog-modal.component';
import { AfterViewInit } from '@angular/core';
import { UiService } from '../../../service/ui.service';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.scss'],
})
export class BlogsListComponent implements OnInit, OnDestroy, AfterViewInit {
  blogsSubscription: Subscription | undefined;

  username: string | null = '' ;
  // blogsUpdated = new Subject();
  blog: Blog | undefined;
  blogs: Blog[] = [];

  blogsWeb: Blog[] = [];
  blogsBlockchain: Blog[] = [];
  blogsAI: Blog[] = [];
  blogsSoc: Blog[] = [];
  blogsQuantum: Blog[] = [];

  someVar = '<h5>h5-title</h5>';
  blogsLoading = true;
  selectedTabIndex = 0;
  dialogValue: string = '';
  sendValue: string = '';

  constructor(
    private blogsService: BlogsService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private uiService: UiService
  ) {}

  ngOnInit() {
    this.username = sessionStorage.getItem('AuthenticatedUser');
    this.route.queryParamMap.subscribe((params) => {
      this.selectedTabIndex = this.getCategoryTabIndex(params.get('category'));
    });

    this.refreshBlogs();
  }

  private getCategoryTabIndex(category: string | null): number {
    const categoryTabs: Record<string, number> = {
      'Web Dev Affairs': 1,
      'Musing Blockchain': 2,
      'A.I.Now.': 3,
      'Sociology Tomorrow!': 4,
      'Quantum Data': 5
    };

    return category ? categoryTabs[category] ?? 0 : 0;
  }

  ngAfterViewInit() {
  //   this.blogUpdater(this.blogs);
  }

  refreshBlogs() {
    this.blogsLoading = true;
    this.uiService.startLoading();
    this.blogsSubscription = this.blogsService
      .getAllBlogs()
      .pipe(finalize(() => this.uiService.stopLoading()))
      .subscribe({
        next: (response) => {
          // console.log(response);
          this.blogs = response;
          this.categoryUpdater(this.blogs);
          this.blogsLoading = false;
        },
        error: (error) => {
          console.error('Failed to load blogs', error);
          this.blogsLoading = false;
        }
      });
  }

  /**
   * Force refresh blogs from API (bypass cache)
   */
  forceRefreshBlogs() {
    this.blogsLoading = true;
    this.uiService.startLoading();
    this.blogsSubscription = this.blogsService
      .getAllBlogs(true)  
      .pipe(finalize(() => this.uiService.stopLoading()))
      .subscribe({
        next: (response) => {
          this.blogs = response;
          this.categoryUpdater(this.blogs);
          this.blogsLoading = false;
        },
        error: (error) => {
          console.error('Failed to force refresh blogs', error);
          this.blogsLoading = false;
        }
      });
  }

  private categoryUpdater(blogs: Blog[]) {
        // console.log(blogs);
        this.blogsWeb = blogs.filter((x) => x.cat3 == 'Web Dev Affairs');
        this.blogsBlockchain = blogs.filter( (x) => x.cat3 == 'Musing Blockchain'  );
        this.blogsAI =  blogs.filter((x) => x.cat3 == 'A.I.Now.');
        this.blogsSoc = blogs.filter( (x) => x.cat3 == 'Sociology Tomorrow!' );
        this.blogsQuantum = blogs.filter((x) => x.cat3 == 'Quantum Data');
  }

  viewBlog(id: string) {
    this.router.navigate(
      ['/blog', id]
      // , { maybe put in query params...   }
    );
  }

  viewAllBlogs(cat: string) {
    this.router.navigate(['/blogs', cat]);
  }

  openBlogModal(id: string) {
    console.log('newModal id: ' + id);
    // this.sendValue = id;
    // const dialogRef =
    this.dialog.open(BlogModalComponent, {
      width: '80%',
      maxWidth: '600px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: { idValue: id }, // this.sendValue }
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('Blog Modal closed', result);
    //   this.dialogValue = result.data;
    // });
  }

  ngOnDestroy() {
    if (this.blogsSubscription) {
      this.blogsSubscription.unsubscribe();
    }
  }
}
