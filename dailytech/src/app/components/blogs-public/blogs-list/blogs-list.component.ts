import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PostDataService } from '../../../service/data/post-data.service';
import { BlogsService } from '../../../service/data/blogs.service';
import { Post } from 'src/app/models/post.model';
import { MatDialog } from '@angular/material/dialog';
import { BlogModalComponent } from '../blog-modal/blog-modal.component';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.scss']
})
export class BlogsListComponent implements OnInit {

  username: string;
  blogsUpdated = new Subject();
  blog: Post;
  blogs = [];

  dialogValue: string;
  sendValue: string;

  constructor(private blogsService: BlogsService,  public dialog: MatDialog) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('AuthenticatedUser');

    // this.blogs = this.postDataService.retrieveAllPosts();
    // this.postsSubscription =


    this.refreshBlogs()
  }

  refreshBlogs() {
    this.blogsService.getAllBlogs().subscribe(
      response => {
        console.log(response);
        this.blogs = response;
      }
    );
  }

  viewBlog(id) {
    this.blogsService.getBlog(id).subscribe((response) =>{
      // console.log(response);
      this.blog = response;
    })
  }

  openBlogModal(id)  {
    console.log("newModal id: "+id)
    // this.sendValue = id;
    // const dialogRef =
    this.dialog.open(BlogModalComponent, {
      width: '80%',
      maxWidth: '450px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: { idValue: id } // this.sendValue }
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('Blog Modal closed', result);
    //   this.dialogValue = result.data;
    // });
  }
}
