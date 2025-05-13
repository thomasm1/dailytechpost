import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post } from '../../models/Post';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  baseUrl:string;

  constructor(private http: HttpClient) {
    
    this.baseUrl = environment.API_URL;

   }

   retrieveAllPosts() {
    //  let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    // })
    return this.http.get<Post[]>(`${this.baseUrl}/posts`,
    // {headers: header}
    )
  }
  retrieveAllPostsByUsername(username) {
    //  let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    // })
    return this.http.get<Post[]>(`${this.baseUrl}/posts/username/${username}`,
    // {headers: header}
    )
  }
 
  retrieveAllPostsByEmail(email) {
    //  let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    // })
    return this.http.get<Post[]>(`${this.baseUrl}/posts/email/${email}`,
    // {headers: header}
    )
  }
  retrievePost(username, id) {
    //  let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    // })
    return this.http.get<Post>(`${this.baseUrl}/dailytech/${username}/posts/${id}`,
    // {headers: header}
    )
  }

  createPost(username, post) {
    //  let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    // })
    return this.http.post(`${this.baseUrl}/dailytech/${username}/posts`, post,
    // {headers: header}
    )
  }
  
  updatePost(username, id, post) {
    //  let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    // }
    // )
    return this.http.put(`${this.baseUrl}/dailytech/${username}/posts/${id}`, post,
    // {headers: header}
    )
  }

  deletePost(username, id) {
    //  let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    // })
    return this.http.delete(`${this.baseUrl}/dailytech/${username}/posts/${id}`,
    // {headers: header}
    )
  }

  
  // createBasicAuthenticationHttpHeader() {
  //   let username = 'user'
  //   let password = 'pass'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }

}
