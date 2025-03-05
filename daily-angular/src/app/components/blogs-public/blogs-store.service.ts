import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../../models/Post';
import { environment } from '../../../environments/environment';

import { catchError, shareReplay } from 'rxjs/operators';
import { BehaviorSubject, throwError,  Observable, Subject } from 'rxjs'; //catchError, shareReplay  

@Injectable({
  providedIn: 'root'
})
export class BlogsStore  {
  private subjectBlogsUpdated = new BehaviorSubject<Post[]>([]);

  blogsUpdated$: Observable<Post[]> = this.subjectBlogsUpdated.asObservable();

  constructor(
    private httpClient: HttpClient
    ) { }

 private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
 private urlAWS: string = `${environment.nft_url}`;

  protected urlDev2: string = 'https://emfm9dpoeh.execute-api.us-east-1.amazonaws.com/dev2';
  protected urlDev: string = 'https://z3noflrq9b.execute-api.us-east-1.amazonaws.com/dev';
 
  private blogs;
  blogsUpdated = new Subject<any >();

  
  saveBlog(id: number, changes): Observable<any> {

    if(id == -1) {
     console.log(id); 
     changes.id = 99;
     changes.username = 'admin';
     changes.categoryId = 367;
     console.log(changes);
     console.log(changes.title);
     console.log(changes.did);

     return this.httpClient.post(`${this.urlAWS}/posts`, changes)
         .pipe(
             catchError(err => {
                 return throwError(() => 'error in source. Details: ' + err);
             }),
             shareReplay()
         ) 

    } else {
     const posts = this.subjectBlogsUpdated.getValue();

     const postIndex = posts.findIndex(post => +post.id == id); 
     const newPost: Post = {
         ...posts[postIndex],
         ...changes
     };

     const newPosts: Post[] = posts.slice(0);
     newPosts[postIndex] = newPost;

     this.subjectBlogsUpdated.next(newPosts);  
     return this.httpClient.put(`${environment.nft_url}/posts `, changes)
         .pipe(
             catchError(err => { 
                 return throwError(() => 'error in source. Details: ' + err);
             }),
             shareReplay()
  
         ) 
    }
 }

  getAllBlogs() {
    //  let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    // })
    return this.httpClient.get<Post[]>(`${this.urlDev}/posts`  // ,
    )
  }

  getBlog(id) {
    //  let basicAuthHeaderString = this.zcreateBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    // })
    console.log(id)
    return this.httpClient.get<Post>(`${this.urlDev2}/post/${id}`,
      // {headers: header}
    )
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
