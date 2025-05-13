
import axios from 'axios';
import { POSTS_BASE_URL, JWT_TOKEN } from '../../config';  

import {CLEAR_POST_DATA, GET_POST_DETAIL, HANDLE_POST_LIKES} from '../types';


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

 
export async function getPosts() {
    const request =  await axios.get(`${POSTS_BASE_URL}/posts`)
    .then(response => response.data);
    return {
        type: POSTS_LIST,
        payload: request
    } 
}


export function handlePostLikes(newLikes,id){

    const request = axios(`${POSTS_BASE_URL}/posts}/${id}`,{
        method: 'PATCH',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        data:JSON.stringify({counts:newLikes})
    }).then( response => response.data )

    return {
        type: HANDLE_POST_LIKES,
        payload: request
    }

}


export async function getPostDetail(id){

    const request =await  axios.get(`${POSTS_BASE_URL}/posts/${id}`);

    return {
        type: GET_POST_DETAIL,
        payload: request
    }

}


export function clearPostData(){
    return {
        type: CLEAR_POST_DATA,
        payload: null
    }
}
