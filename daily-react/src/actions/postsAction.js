
import axios from 'axios';
import { POSTS_BASE_URL } from '../config';
import { JWT_TOKEN } from '../config';  



import {
    POSTS_LIST, 
} from '../types';


export async function  addPost(postId, news) {
    const bearerToken = localStorage.getItem('accessToken') || JWT_TOKEN

    const request  = await axios.get(`${POSTS_BASE_URL}/posts/${postId}`, {
        headers: {
            Authorization: `Bearer ${bearerToken}`
        }
    }).then(response => response.data);
    
    const post = request;
    if (!post.news) {
        post.news = [];
    }
    post.news.push(news);   
    console.log("postsService :", post);

    await axios.put(`${POSTS_BASE_URL}/posts/${postId}`, post
    , {
        headers: {
            Authorization: `Bearer ${bearerToken}`
        }
    });
    const newRequest = await axios.get(`${POSTS_BASE_URL}/posts`)
    .then(response => response.data);
    return {
        type: POSTS_LIST,
        payload: newRequest
    }
}

export async function getPost(id) {
    const request = await axios.get(`${POSTS_BASE_URL}/posts/${id}`)
    .then(response => response.data);
     
}

export async function getPosts() {
    const request =  await axios.get(`${POSTS_BASE_URL}/posts`)
    .then(response => response.data);
    return {
        type: POSTS_LIST,
        payload: request
    }
}