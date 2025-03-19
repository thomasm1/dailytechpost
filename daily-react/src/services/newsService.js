import axios from 'axios';
import { CATEGORY_BASE_URL } from '../config';
import { JWT_TOKEN } from '../config'; 

class NewsService {
    async addNews(categoryId, news) {
        const bearerToken = localStorage.getItem('accessToken') || JWT_TOKEN
        const category = await axios.get(`${CATEGORY_BASE_URL}/categories/${categoryId}`, {
            headers: {
                Authorization: `Bearer ${bearerToken}`
            }
        });
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
 