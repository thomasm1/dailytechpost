import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PostDataService } from '../../../service/data/post-data.service';
import { BlogsService } from '../../../service/data/blogs.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent implements OnInit {

  username: string;
  blogs = [];
  blogsUpdated = new Subject();
  blog: Post;


  constructor(private blogsService: BlogsService) { }

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
    console.log(id)
    this.blogsService.getBlog(id).subscribe((response) =>{
      console.log(response);
      this.blog = response;
    })
  }
  
}
