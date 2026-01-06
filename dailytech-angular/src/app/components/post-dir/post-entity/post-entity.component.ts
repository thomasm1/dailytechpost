import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostEntityService } from '../post-entity.service';
import {  PostEntity } from '../../../models/PostEntity.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { PostCancelComponent } from '../post-cancel/post-cancel.component';

@Component({
  selector: 'app-post',
  templateUrl: './post-entity.component.html',
  styles: [
    `
    .ng-invalid:not(form) {
      border-left:3px solid red;
    }
    `
  ]
})
export class PostEntityComponent implements OnInit {
  @Output() writingExit = new EventEmitter();

  progress = 0;
  timer: any;

  id: number;
  username: string;
  post: PostEntity;

  constructor(
    private dialog: MatDialog,
    private postEntityService: PostEntityService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.startOrResumeWriting();
    this.id = this.route.snapshot.params['id'];
    this.post = new PostEntity(this.id, '', '', '', '', '', '', '', '');

    if (this.id != -1) {
      this.username = sessionStorage.getItem('AuthenticatedUser');
      this.postEntityService.retrievePost(this.username, this.id).subscribe(
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
      this.postEntityService.createPost(this.username, this.post)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['admin/posts'])
          }
        )
    } else {
      this.postEntityService.updatePost(this.username, this.id, this.post)
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
