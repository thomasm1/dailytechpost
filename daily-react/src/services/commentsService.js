 



import axios from 'axios';
import { POSTS_BASE_URL } from '../config';
import { JWT_TOKEN } from '../config';  

class CommentsService { 
    async addComment(values, postId) {
        const bearerToken = localStorage.getItem('accessToken') || JWT_TOKEN;
        const comments = await axios.get(`${POSTS_BASE_URL}/posts/${postId}/comments`, values,{
            headers: {
                Authorization: `Bearer ${bearerToken}`
            }
        });
        if (!comments) {
            comments = [];
        }
        comments.push(values);   
        console.log("commentsService :", comments);
        await axios.post(`${POSTS_BASE_URL}/posts/${postId}/comments`, comments
        , {
            headers: {
                Authorization: `Bearer ${bearerToken}`
            }
        });
    }

    async getComment(postId, commentId) {
        return await axios.get(`${POSTS_BASE_URL}/posts/${postId}/comments/${commentId}`);
    }

    async getComments(postId) {
        const response =  await axios.get(`${POSTS_BASE_URL}/posts/${postId}/comments`);
        console.log("commentsService getComments:", response.data);
        return response.data;
    }
    
}


const commentService = new CommentsService();
export default commentService;  // Single export
 