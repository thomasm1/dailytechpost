
import axios from 'axios';
import { POSTS_BASE_URL } from '../config';
import { JWT_TOKEN } from '../config';

class PostsService {
    async createPost(values) {
        const bearerToken = localStorage.getItem('accessToken') || JWT_TOKEN
        try {
            const post = await axios.post(`${POSTS_BASE_URL}/posts`, {
                ...values,
                did: Date.now(),
                date: Date.now(),
                author: "anonymous",
                email: "anonymous@gmail.com",
                categoryId: 12,
                blogcite: values.blogcite.join(', '), // Join the selected citations into a comma-separated string
            });
            alert("Post created successfully!");
        } catch (error) {
            console.error("Error creating post:", error);
            alert("Error creating post. Please check the console for details.");
        }
    }
    
    async addPost(id, news) {
        const bearerToken = localStorage.getItem('accessToken') || JWT_TOKEN
        const post = await axios.get(`${POSTS_BASE_URL}/posts/${id}`, {
            headers: {
                Authorization: `Bearer ${bearerToken}`
            }
        });
        if (!post.news) {
            post.news = [];
        }
        post.news.push(news);
        console.log("postsService :", post);
        await axios.put(`${POSTS_BASE_URL}/posts/${id}`, post
            , {
                headers: {
                    Authorization: `Bearer ${bearerToken}`
                }
            });
    }

    async getPost(id) {
        const response = await axios.get(`${POSTS_BASE_URL}/posts/${id}`);
        console.log("postsService getPosts:", response.data);
        return response.data;

    }

    async getPosts() {
        const response = await axios.get(`${POSTS_BASE_URL}/posts`);
        console.log("postsService getPosts:", response.data);
        return response.data;
    }

}

// export default PostService
const postsService = new PostsService();
export default postsService;  // Single export
