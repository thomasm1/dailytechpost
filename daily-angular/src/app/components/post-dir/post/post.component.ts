import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostDataService } from '../post-data.service';
import { Post } from '../../../models/Post';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PostCancelComponent } from '../post-cancel/post-cancel.component';

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
  @Output() writingExit = new EventEmitter();

  progress = 0;
  timer: any;

  id: number;
  username: string;
  post: Post;

  constructor(
    private dialog: MatDialog,
    private postService: PostDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.startOrResumeWriting();
    this.id = this.route.snapshot.params['id'];
    this.post = new Post(this.id, '', '', '', '', '', '', '', '');

    if (this.id != -1) {
      this.username = sessionStorage.getItem('AuthenticatedUser');
      this.postService.retrievePost(this.username, this.id).subscribe(
        data => this.post = data
      )
    }
  }
  startOrResumeWriting() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 5;
      if (this.progress >= 1000) {
        clearInterval(this.timer);
      }
    }, 1000);
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

  postCancel() {
    console.log(this.post);
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(PostCancelComponent, {
      data: {
        progress: this.progress
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.writingExit.emit();
      } else {
        this.startOrResumeWriting();
      }
    });
  }

}
