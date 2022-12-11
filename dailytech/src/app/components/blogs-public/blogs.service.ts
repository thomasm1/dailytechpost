import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Post } from '../../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http: HttpClient) { }



  protected urlDev2: string = 'https://emfm9dpoeh.execute-api.us-east-1.amazonaws.com/dev2';
  protected urlDev: string = 'https://z3noflrq9b.execute-api.us-east-1.amazonaws.com/dev';

  // private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  blogsUpdated = new Subject();
  private blogs;

  getAllBlogs() {
    //  let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    // })
    return this.http.get<Post[]>(`${this.urlDev}/posts`  // ,
    )
  }

  getBlog(id) {
    //  let basicAuthHeaderString = this.zcreateBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    // })
    console.log(id)
    return this.http.get<Post>(`${this.urlDev2}/post/${id}`,
      // {headers: header}
    )
  }

  // getBlogsArray() {
  //   console.log(this.blogs);
  //   return [...this.blogs];
  // }

  hideBlog(blogName: string) {
    this.blogs = this.blogs.filter(b => b !== blogName);
    this.blogsUpdated.next();
  }

}
