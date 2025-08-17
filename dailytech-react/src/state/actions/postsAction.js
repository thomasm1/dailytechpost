
import axios from 'axios';
import { POSTS_BASE_URL, JWT_TOKEN } from '../../config';  

import {CLEAR_POST_DATA, GET_POST_DETAIL, HANDLE_POST_LIKES} from '../types';


import {
    POSTS_LIST, 
} from '../types';

    // ADD WEBLINK TO POST specifiied by post ID:   /api/weblinks/posts/24

    // { 
//     UPDATEABLE---->  "title": "https://www.thomasmaestas.com/cc",
//     "profileUrl": "thomasmaestas.net/ccccccprofileUrl.html",
//    "ownerEmail":   "thomasm1.BB@gmail.com",
//   UPDATEABLE----> "url": "thomasmaestas.net/ccccindex.html",
//    UPDATEABLE---->   "host": "thomasmaestas.netcc",
//     "htmlPage": "<html><head></head><body>hey thomasmaestas!!!!!</body></html>",
//     "downloadStatus": "SUCCESS",
//     "itemData": "<item><type>WebLink</type><title>https://www.thomasmaestas.com</title><url>thomasmaestas.net/index.html</url><host>thomasmaestas.net</host></item>",
//     "web3Link": true 
// } 

// UPDATE WEBLINK by weblink ID:  /api/weblinks/13
//     UPDATEABLE---->  "title": "https://www.thomasmaestas.com/cc",
//   UPDATEABLE----> "url": "thomasmaestas.net/ccccindex.html",
//    UPDATEABLE---->   "host": "thomasmaestas.netcc",

export async function  addWeblink(postId, weblink) {
    const bearerToken = localStorage.getItem('accessToken') || JWT_TOKEN

    const request  = await axios.get(`${POSTS_BASE_URL}/posts/${postId}`, {
        headers: {
            Authorization: `Bearer ${bearerToken}`
        }
    }).then(response => response.data);
    
    const post = request;
    if (!post.weblinks) {
        post.weblinks = [];
    }
    post.weblinks.push(weblink);   
    console.log("postsAction addWeblink:", post);

    await axios.put(`${POSTS_BASE_URL}/posts/${postId}`, post, {
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
