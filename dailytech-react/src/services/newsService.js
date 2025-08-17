import axios from 'axios';
import { CATEGORY_BASE_URL } from '../config';
import { JWT_TOKEN } from '../config'; 

class NewsService {


    async createCategory(values) {
        const bearerToken = localStorage.getItem('accessToken') || JWT_TOKEN
        try {
            const cat = await axios.post(`${CATEGORY_BASE_URL}/categories`, values, {
                headers: {
                    Authorization: `Bearer ${bearerToken}`
                }
            });
            alert("Category created successfully!");
        } catch (error) {
            console.error("Error creating category:", error);
            alert("Error creating category. Please check the console for details.");
        }
    }
    
    // Original hardcoded category template/demo data:
    // {
    //     "id": 10,
    //     "name": "A.I.Now.",
    //     "description": "AI Technology news",
    //     "news": [
    //         {
    //             "id": 42,
    //             "title": "Tech Giant Merges",
    //             "url": "https://news3.com"
    //         }
    //     ],
    //     "posts": [
    //         {
    //             "id": 23,
    //             "did": "D1004",
    //             "date": "2025-05-04",
    //             "author": "Alice",
    //             "monthOrder": "June",
    //             "cat3": "Tech",
    //             "title": "AI Breakthrough",
    //             "post": "New AI breakthrough discovered...",
    //             "blogcite": "https://blogsite4.com",
    //             "email": "alice.user@example.com",
    //             "state": "Published",
    //             "wordCount": 1600,
    //             "durationGoal": 8,
    //             "comments": [
    //                 {
    //                     "id": 33,
    //                     "name": "TechLover",
    //                     "email": "techie@example.com",
    //                     "body": "Excited about AI updates!"
    //                 }
    //             ]
    //         }
    //     ]
    // }
    async addNews(categoryId, news) {
        const bearerToken = localStorage.getItem('accessToken') || JWT_TOKEN
        const response = await axios.get(`${CATEGORY_BASE_URL}/categories/${categoryId}`, {
            headers: {
                Authorization: `Bearer ${bearerToken}`
            }
        });
        const category = response.data;
        if (!category.news) {
            category.news = [];
        }
        category.news.push(news);   
        console.log("NewsService addNews:", category);
        await axios.put(`${CATEGORY_BASE_URL}/categories/${categoryId}`, category
        , {
            headers: {
                Authorization: `Bearer ${bearerToken}`
            }
        });
    }

    async getCategory(id) {
        const response = await axios.get(`${CATEGORY_BASE_URL}/categories/${id}`);
        console.log("NewsService getCategory:", response.data);
        return response.data;
    }

    async getCategories() {
      const response = await axios.get(`${CATEGORY_BASE_URL}/categories`);
        console.log("NewsService getCategories:", response.data);
        return response.data;
    }
    
}

 const newsService = new NewsService();
export default newsService; 
 