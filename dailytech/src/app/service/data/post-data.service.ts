import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../components/posts-list/posts-list.component';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor(private http:HttpClient) { }

  retrieveAllPosts(username) {
    return this.http.get<Post[]>(`http://localhost:8089/dailytech/${username}/posts`)
  }

   deletePost(username, id) {
    return this.http.delete(`http://localhost:8089/dailytech/${username}/posts/${id}`)
  }
}
