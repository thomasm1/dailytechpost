import { Component, OnInit, OnDestroy } from '@angular/core';
// import { throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
// import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  blogsSubscription: Subscription;
  private cat: string;
  blogs = [];
  blogsByCat = [];
  blogsLoading = true;

  constructor(
    private route: ActivatedRoute,
    private blogsService: BlogsService
  ) {}

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs() {
    this.route.paramMap.subscribe((params) => {
      this.cat = params.get('cat');
      this.blogsSubscription = this.blogsService
        .getAllBlogs()
        .subscribe((response) => {
          if (this.cat == '0') {
            this.blogsByCat = response;
            console.log('0', this.blogsByCat);
          } else {
            this.blogs = response;
            this.blogsByCat = this.blogs.filter((x) => x.cat3 == this.cat);
            console.log('other', this.blogsByCat);
          }
          this.blogsLoading = false;
        });
    });
  }

  ngOnDestroy() {
    if (this.blogsSubscription) {
      this.blogsSubscription.unsubscribe();
    }
  }
}
