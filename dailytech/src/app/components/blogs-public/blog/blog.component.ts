import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BlogsService } from '../../../service/data/blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input() blogName: string;
  @Output() blogClicked = new EventEmitter();

  constructor(private blogsService: BlogsService) { }

  ngOnInit(): void {
  }

  onClicked() {
    // this.blogClicked.emit();
    this.blogsService.hideBlog(this.blogName);
  }
  // addBlog(blogName: string) {
  //   this.blogs.push(blogName);
  //   this.blogsUpdated.next();
  // }

  // getBlogsArray() {
  //   console.log(this.blogs);
  //   return [...this.blogs];
  // }

  // hideBlog(blogName: string) {
  //   this.blogs = this.blogs.filter(b => b !== blogName);
  //   this.blogsUpdated.next();
  // }


}
