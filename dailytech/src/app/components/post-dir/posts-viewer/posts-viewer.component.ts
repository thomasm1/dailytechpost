import { Component, OnInit, OnDestroy } from '@angular/core';
import { AnimationComponent } from '../../util/animation/animation.component';
import { Subscription } from 'rxjs'; 
import { PostDataService } from '../post-data.service';

@Component({
  selector: 'app-posts-viewer',
  templateUrl: './posts-viewer.component.html',
  styleUrls: ['./posts-viewer.component.scss']
})
export class PostsViewerComponent implements OnInit, OnDestroy {

  toState = 'state1';
  username: string;
  private postsSubscription: Subscription;
  blogName = 'blog 1';
  blogs = ['a','b','c'];
  posts = [];

  constructor(private postDataService: PostDataService) { }

  ngOnInit() {
     this.username = sessionStorage.getItem('AuthenticatedUser');
    this.refreshPosts();

    // this.blogs = this.postDataService.retrieveAllPosts();
    // this.postsSubscription =
    this.postDataService.retrieveAllPosts(this.username).subscribe((response) => {
      console.log(response);
      this.posts = response;
    });
  }
  ngOnDestroy() {
    // this.postsSubscription.unsubscribe();
  }

  refreshPosts() {
    this.postDataService.retrieveAllPosts(this.username).subscribe(
      response => {
        console.log(response);
        this.posts = response;
      }
    );
  }


  changeState(state: any) {
    this.toState = state;
  }
  onBlogClick(blogName: string) {
    this.blogs = this.blogs.filter(b => b !== blogName);
  }

}
