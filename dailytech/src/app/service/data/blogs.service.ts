import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor() { }

  private blogs = ['blogA', 'blogB', 'blogC'];
  blogsUpdated = new Subject();

  addBlog(blogName: string) {
    this.blogs.push(blogName);
    this.blogsUpdated.next();
  }
  getBlogs() {
    return [...this.blogs];
  }

  hideBlog(blogName: string) {
    this.blogs = this.blogs.filter(b => b !== blogName);
    this.blogsUpdated.next();
  }

}
