import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post } from '../../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http: HttpClient) { }

  private blogs = ['blogA', 'blogB', 'blogC'];
  blogsUpdated = new Subject();

  protected urlProd: string = 'https://emfm9dpoeh.execute-api.us-east-1.amazonaws.com/PROD/posts';
   
  protected urlDev: string = 'https://z3noflrq9b.execute-api.us-east-1.amazonaws.com/dev/posts';

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
 
  getAllBlogs() {
    //  let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    // })
    return this.http.get<Post[]>(`${this.urlDev}`, // , 
    )
  }
 
  getBlog(id) {
    //  let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    // })
    return this.http.get<Post>(`https://emfm9dpoeh.execute-api.us-east-1.amazonaws.com/dev/posts/${id}`,
    // {headers: header}
    )
  }


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
