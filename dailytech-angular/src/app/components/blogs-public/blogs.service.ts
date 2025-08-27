import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
 
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/Post';


@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  baseAwsUrl:string;

  constructor(private http: HttpClient) { }


 private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
 protected urlDevAll: string = `${environment.awsUrlDevAll}`;

  protected urlDevId: string = `${environment.awsUrlDevId}`; // ByID   (or dev)
 

  // private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  blogsUpdated = new Subject();
  private blogs;

  getAllBlogs() {
    //  let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    // })
    return this.http.get<Post[]>(`${this.urlDevAll}/dev/posts`  // ,
    )
  }

  getBlog(id) {
    //  let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    // })
    console.log(id)
    return this.http.get<Post>(`${this.urlDevId}/dev/post/${id}`,
      // {headers: header}
    )
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.urlDevAll}/dev/posts/cat3s`);
  }

  getBlogsByCategories(cat3s: string[]): Observable<any[]> {
    return this.http.post<any[]>(`${this.urlDevAll}/dev/posts/blogs`, { cat3s });
  }
  // getBlogsArray() {
  //   console.log(this.blogs);
  //   return [...this.blogs];
  // }

  hideBlog(blogName: string) {
    this.blogs = this.blogs.filter(b => b !== blogName);
    this.blogsUpdated.next({value: this.blogs});
  }

}
