import { Component, OnInit, Input, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from 'src/app/models/post.model';
import { BlogsService } from '../../../service/data/blogs.service';

@Component({
  selector: 'app-blog-modal',
  templateUrl: './blog-modal.component.html',
  styleUrls: ['./blog-modal.component.scss']
})
export class BlogModalComponent implements OnInit {

  idFromBlogList: string;
  fromDialog: string;
  blog: Post;

  constructor(
    private blogsService: BlogsService,
    public dialogRef: MatDialogRef<BlogModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {

      this.idFromBlogList = data.idValue;
      console.log("this.fromBlogList string-" + this.idFromBlogList);

        this.blogsService.getBlog(this.idFromBlogList).subscribe((response) =>{

          this.blog = response;
          console.log(this.blog);
        })
   }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close', data: this.fromDialog });
  }
}
