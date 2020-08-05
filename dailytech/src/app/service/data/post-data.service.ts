import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post } from '../../components/posts-list/posts-list.component';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor(private http: HttpClient) { }

  retrieveAllPosts(username) {
    //  let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    // })
    return this.http.get<Post[]>(`http://localhost:8089/dailytech/${username}/posts`,
    // {headers: header}
    )
  }
 
  retrievePost(username, id) {
    //  let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    // })
    return this.http.get<Post>(`http://localhost:8089/dailytech/${username}/posts/${id}`,
    // {headers: header}
    )
  }

  createPost(username, post) {
    //  let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    // })
    return this.http.post(`http://localhost:8089/dailytech/${username}/posts`, post,
    // {headers: header}
    )
  }
  
  updatePost(username, id, post) {
    //  let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    // }
    // )
    return this.http.put(`http://localhost:8089/dailytech/${username}/posts/${id}`, post,
    // {headers: header}
    )
  }

  deletePost(username, id) {
    //  let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    // })
    return this.http.delete(`http://localhost:8089/dailytech/${username}/posts/${id}`,
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
