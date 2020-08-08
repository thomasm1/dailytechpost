import { Component, OnInit } from '@angular/core';
import { PostDataService } from 'src/app/service/data/post-data.service';
import { Post } from '../../components/posts-list/posts-list.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: [
    `
    .ng-invalid:not(form) {
      border-left:3px solid red;
    }
    `
  ]
})
export class PostComponent implements OnInit {

  id: number;
  username: string;
  post: Post;

  constructor(
    private postService: PostDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']; 
    this.post = new Post(this.id, '', '', '', '', '', '', '', '');

    if (this.id != -1) {
      this.username = sessionStorage.getItem('AuthenticatedUser');
      this.postService.retrievePost(this.username, this.id).subscribe(
        data => this.post = data
      )
    }
  }

  savePost() {
    if (this.id === -1) {
      this.postService.createPost(this.username, this.post)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['admin/posts'])
          }
        )
    } else {
      this.postService.updatePost(this.username, this.id, this.post)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['admin/posts'])
          }
        )
    }

  }

}
