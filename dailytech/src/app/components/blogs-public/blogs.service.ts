import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
 
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
 
export type Post = { 
  id: number,
  did?: string,
  date?: string,
  author?: string,
  monthOrder?: string,
  cat3?: string,
  title: string,
  post?: string,
  blogcite?: string,
  username?: string,
}

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http: HttpClient) { }


 private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
 private urlAWS: string = `${environment.nft_url}/api/posts`;

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

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.urlDev}/posts/cat3s`);
  }

  getBlogsByCategories(cat3s: string[]): Observable<any[]> {
    return this.http.post<any[]>(`${this.urlDev}/posts/blogs`, { cat3s });
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
