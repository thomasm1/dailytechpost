
// import axios from 'axios';
// import { POSTS_BASE_URL } from '../config';
// import { JWT_TOKEN } from '../config';  

// class PostsService { 
//     async addPost(postId, news) {
//         const bearerToken = localStorage.getItem('accessToken') || JWT_TOKEN
//         const post = await axios.get(`${POSTS_BASE_URL}/posts/${postId}`, {
//             headers: {
//                 Authorization: `Bearer ${bearerToken}`
//             }
//         });
//         if (!post.news) {
//             post.news = [];
//         }
//         post.news.push(news);   
//         console.log("postsService :", post);
//         await axios.put(`${POSTS_BASE_URL}/posts/${postId}`, post
//         , {
//             headers: {
//                 Authorization: `Bearer ${bearerToken}`
//             }
//         });
//     }

//     async getPost(id) {
//         return await axios.get(`${POSTS_BASE_URL}/posts/${id}`);
//     }

//     async getPosts() {
//         const response =  await axios.get(`${POSTS_BASE_URL}/posts`);
//         console.log("postsService getPosts:", response.data);
//         return response.data;
//     }
    
// }


// const postService = new PostsService();
// export default postService;  // Single export
 