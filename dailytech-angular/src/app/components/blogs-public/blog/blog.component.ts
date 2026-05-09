import { Component, OnInit, OnDestroy, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogsService } from '../blogs.service';
import { Blog } from 'src/app/models/blog.model';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { UiService } from '../../../service/ui.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {

  blogSubscription: Subscription;

  @Input() blogName: string;
  @Output() blogClicked = new EventEmitter();
  private id: string;
  public blog: Blog;
  blogsLoading = true;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogsService: BlogsService,
    private uiService: UiService) { }

  ngOnInit() {
    this.getBlog();
  }

  getBlog() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.blogsLoading = true;
      this.uiService.startLoading();
      this.blogSubscription = this.blogsService.getBlog(this.id)
        .pipe(finalize(() => {
          this.blogsLoading = false;
          this.uiService.stopLoading();
        }))
        .subscribe((response) => {
          this.blog = response;
          console.log(this.blog);
        });
    })
  }

  onClicked() {
    // this.blogClicked.emit();
    this.blogsService.hideBlog(this.blogName);
  }

   ngOnDestroy() {
    if (this.blogSubscription) {
      this.blogSubscription.unsubscribe();
    }
  }

  // addBlog(blogName: string) {
  //   this.blogs.push(blogName);
  //   this.blogsUpdated.next();
  // }

  // getBlogsArray() {
  //   console.log(this.blogs);
  //   return [...this.blogs];
  // }

  // hideBlog(blogName: string) {
  //   this.blogs = this.blogs.filter(b => b !== blogName);
  //   this.blogsUpdated.next();
  // }


}
