import { Component, OnInit, OnDestroy } from '@angular/core'; 
import { Subscription } from 'rxjs'; 
import { PostEntityService } from '../post-entity.service';
 

@Component({
  selector: 'app-posts-viewer',
  templateUrl: './posts-viewer.component.html',
  styleUrls: ['./posts-viewer.component.scss']
})
export class PostEntityViewerComponent implements OnInit, OnDestroy {

  toState = 'state1';
  email: string | null = '';
  private postsSubscription: Subscription | null = null;
  blogName = 'blog 1';
  blogs = ['a','b','c'];
  posts: any[] = [];

  constructor(private postEntityService: PostEntityService) { }

  ngOnInit() {
    this.email = sessionStorage.getItem('AuthenticatedUser') || '';
    this.refreshPosts();

    // this.blogs = this.postDataService.retrieveAllPosts();
    this.postsSubscription =
    this.postEntityService.retrieveAllPostsByEmail(this.email!).subscribe((response) => {
      console.log(response);
      this.posts = response;
    });
  }
  ngOnDestroy() {
    if (this.postsSubscription) {
      this.postsSubscription.unsubscribe();
    }
  }

  refreshPosts() {
    this.postEntityService.retrieveAllPostsByEmail(this.email!).subscribe(
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
