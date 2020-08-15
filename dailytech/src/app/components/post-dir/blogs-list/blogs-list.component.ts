import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../../../service/data/post-data.service';
import { BlogsService } from '../../../service/data/blogs.service';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent implements OnInit {

  username: string;
  posts = [];

  constructor(private blogsService: BlogsService) { }

  ngOnInit()  {
        this.username = sessionStorage.getItem('AuthenticatedUser');
    this.refreshPosts();
   
    // this.blogs = this.postDataService.retrieveAllPosts();
    // this.postsSubscription = 
    this.blogsService.getAllBlogs().subscribe((response) => {
      console.log(response); 
      this.posts = response;
    });
  }

  refreshPosts() {
    this.blogsService.getAllBlogs().subscribe(
      response => {
        console.log(response);
        this.posts = response;
      }
    );
  }



}
