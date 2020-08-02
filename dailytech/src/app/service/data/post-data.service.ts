import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../components/posts-list/posts-list.component';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor(private http: HttpClient) { }

  retrieveAllPosts(username) {
    return this.http.get<Post[]>(`http://localhost:8089/dailytech/${username}/posts`)
  }

  retrievePost(username, id) {
    return this.http.get<Post>(`http://localhost:8089/dailytech/${username}/posts/${id}`)
  }

  createPost(username, post) {
    return this.http.post(`http://localhost:8089/dailytech/${username}/posts`, post)
  }
  
  updatePost(username, id, post) {
    return this.http.put(`http://localhost:8089/dailytech/${username}/posts/${id}`, post)
  }

  deletePost(username, id) {
    return this.http.delete(`http://localhost:8089/dailytech/${username}/posts/${id}`)
  }
}
