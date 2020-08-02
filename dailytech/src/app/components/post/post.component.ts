import { Component, OnInit } from '@angular/core';
import { PostDataService } from 'src/app/service/data/post-data.service';
import { Post } from '../../components/posts-list/posts-list.component';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: [
  ]
})
export class PostComponent implements OnInit {

  id: number;
  username: string;
  post:Post;

  constructor(
    private postService: PostDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.post = new Post(1,'','','','','','','','');
    this.username = sessionStorage.getItem('AuthenticatedUser');
    this.postService.retrievePost(this.username, this.id).subscribe(
      data => this.post = data
    )
  }

}
