import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router'; 
import { BlogsService } from '../blogs.service';
import { Blog } from 'src/app/models/blog.model';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
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
  blog: Blog;
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
  //   this.blogUpdater(this.blogs);
  }

  refreshBlogs() {
    this.blogsSubscription = this.blogsService
      .getAllBlogs()
      .subscribe((response) => {
        // console.log(response);
        this.blogs = response;
        this.categoryUpdater(this.blogs)
        this.blogsLoading = false;
      });
  }

  categoryUpdater(blogs) {
        // console.log(blogs);
        this.blogsWeb = blogs.filter((x) => x.cat3 == 'Web Dev Affairs');
        this.blogsBlockchain = blogs.filter( (x) => x.cat3 == 'Musing Blockchain'  );
        this.blogsAI =  blogs.filter((x) => x.cat3 == 'A.I.Now.');
        this.blogsSoc = blogs.filter( (x) => x.cat3 == 'Sociology Tomorrow!' );
        this.blogsQuantum = blogs.filter((x) => x.cat3 == 'Quantum Data');
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
