import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { PostDataService } from '../../../service/data/post-data.service';
import { BlogsService } from '../../../service/data/blogs.service';
import { Post } from 'src/app/models/post.model';
import { MatDialog } from '@angular/material/dialog';
import { BlogModalComponent } from '../blog-modal/blog-modal.component';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.scss'],
})
export class BlogsListComponent implements OnInit, OnDestroy, AfterViewInit {
  blogsSubscription: Subscription;

  username: string;
  // blogsUpdated = new Subject();
  blog: Post;
  blogs = [];

  blogsWeb = [];
  blogsBlockchain = [];
  blogsAI = [];
  blogsSoc = [];
  blogsQuantum = [];

  someVar = '<h5>h5-title</h5>';
  blogsLoading = true;
  dialogValue: string;
  sendValue: string;

  constructor(
    private blogsService: BlogsService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this.username = sessionStorage.getItem('AuthenticatedUser');

    this.refreshBlogs();
  }

  ngAfterViewInit() {
    this.blogUpdater();
  }

  refreshBlogs() {
    this.blogsSubscription = this.blogsService
      .getAllBlogs()
      .subscribe((response) => {
        // console.log(response);
        this.blogs = response;
        this.blogsLoading = false;
      });
  }

  blogUpdater() {
    this.blogsSubscription = this.blogsService
      .getAllBlogs()
      .subscribe((response) => {
        // console.log(response);
        this.blogs = response;
        this.blogsWeb = this.blogs.filter((x) => x.cat3 == 'Web Dev Affairs');
        this.blogsBlockchain = this.blogs.filter(
          (x) => x.cat3 == 'Musing Blockchain'
        );
        this.blogsAI = this.blogs.filter((x) => x.cat3 == 'A.I.Now.');
        this.blogsSoc = this.blogs.filter(
          (x) => x.cat3 == 'Sociology Tomorrow!'
        );
        this.blogsQuantum = this.blogs.filter((x) => x.cat3 == 'Quantum Data');
      });
  }

  viewBlog(id) {
    this.router.navigate(
      ['/blog', id]
      // , { maybe put in query params...   }
    );
  }

  viewAllBlogs(cat) {
    this.router.navigate(['/blogs', cat]);
  }

  openBlogModal(id) {
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
