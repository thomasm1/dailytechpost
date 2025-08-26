
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
                blogcite: values.blogcite, // blogcite is already a string
            });
            alert("Post created successfully!");
        } catch (error) {
            console.error("Error creating post:", error);
            // alert("Error creating post. Please check the console for details.");
        }
    }

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

    async addWeblink(postId, weblink) {
        const bearerToken = localStorage.getItem('accessToken') || JWT_TOKEN
         
        await axios.post(`${POSTS_BASE_URL}/weblinks/posts/${postId}`, weblink, {
            headers: {
                Authorization: `Bearer ${bearerToken}`
            }
        });
    }
    
    async editWeblink(weblinkId, weblink) {
        const bearerToken = localStorage.getItem('accessToken') || JWT_TOKEN
         
        await axios.put(`${POSTS_BASE_URL}/weblinks/${weblinkId}`, weblink, {
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
