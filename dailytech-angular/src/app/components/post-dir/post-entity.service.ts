import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PostEntity } from '../../models/PostEntity.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostEntityService {

  baseUrl:string;

  constructor(private http: HttpClient) {
    
    this.baseUrl = environment.API_URL;

   }
createBasicAuthenticationHttpHeader() {
  let bearerAuthHeaderString = 'Bearer ' + sessionStorage.getItem('token');
     bearerAuthHeaderString;
return new HttpHeaders({
          Authorization: bearerAuthHeaderString
      }) 
  }
   retrieveAllPosts() {
     let header = this.createBasicAuthenticationHttpHeader();
    return this.http.get<PostEntity[]>(`${this.baseUrl}/posts`,
    {headers: header}
    )
  }
 
 
  retrieveAllPostsByEmail(email: string) {
    //  let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    // })
    return this.http.get<PostEntity[]>(`${this.baseUrl}/posts/email/${email}`,
    // {headers: header}
    )
  }
  retrievePost(email: string, id: number) {
    //  let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    // })
    return this.http.get<PostEntity>(`${this.baseUrl}/dailytech/${email}/posts/${id}`,
    // {headers: header}
    )
  }

  createPost(email: string, post: PostEntity) {
    //  let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    // })
    return this.http.post(`${this.baseUrl}/dailytech/${email}/posts`, post,
    // {headers: header}
    )
  }
  
  updatePost(email: string, id: number, post: PostEntity) {
    //  let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    // }
    // )
    return this.http.put(`${this.baseUrl}/dailytech/${email}/posts/${id}`, post,
    // {headers: header}
    )
  }

  deletePost(email: string, id: number) {
    //  let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    // })
    return this.http.delete(`${this.baseUrl}/dailytech/${email}/posts/${id}`,
    // {headers: header}
    )
  }

  
  // createBasicAuthenticationHttpHeader() {
  //   let email = 'user'
  //   let password = 'pass'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(email + ':' + password);
  //   return basicAuthHeaderString;
  // }

}
