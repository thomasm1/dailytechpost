import React, { useEffect, useState } from 'react';
import { newsService } from '../services/newsService';
import { useLocation, useOutletContext, useParams } from 'react-router-dom';
// import { css } from 'glamor'

let news_item = css({
    padding: '20px',
    boxSizing: 'border-box',
    borderBottom: '1px solid grey',
    ':hover':{
        color:'red'
    }
})

let item_back = css({
    background:'grey'
})



const NewsItem = ({item}) =>{
    
    const { id } = useParams();
    const [category, setCategory] = useState(null);
        const location = useLocation();
        const pobj = useOutletContext();
    
    useEffect(() => {
        const fetchCategory = async () => {
            try {
           const response = newsService.getCategory(id);
                setCategory(response );
                console.log("Category NewsItem fetched:", response );
                console.log("Category NewsItem fetched:", response?.data);
                console.log("Category NewsItem fetched:", response?.data?.content);
            } catch (error) {
                console.error("Error fetching category:", error);
            }
        };
    
        fetchCategory();
    }, [id]);
    
    if (!category) {
        return <div>Loading category...</div>;
    }
    return(
        <div style={news_item} className="news_item">
<div className="post-item-container" style={{ height: "400px" }}>   
    
<div className="post-body">
                <p className="post-content">{category.post}</p>
            </div>
            <div className="post-details"> 
                <div className="detail-item">
                    <span className="detail-label">News:</span> {category?.name}
                </div>
                <div className="detail-item">
                    <span className="detail-label">News:</span> {category?.description}
                </div>
                <div className="detail-item">
                    <span className="detail-label">News:</span> {category?.news}
                </div>
                <div className="detail-item">
                    <span className="detail-label">URL:</span> {category?.news?.title}
                </div>
                <div className="detail-item">
                    <span className="detail-label">url:</span> {category?.news?.url}
                </div> 
            </div>
            <hr />
            <div  >
                <p><small>{console.log("__________pobj______________")}</small></p>
                <p><small>{console.log(JSON.stringify(pobj))}</small></p>
                <p><small>{console.log("__________location______________")}</small></p>
                <p><small>{console.log(JSON.stringify(location))}</small></p>
            </div>
            </div>
            
            <span>News Category</span>
            <h6>{ category.name }</h6>
            <h6>{ category.description }</h6>
            <h6>{ category.news }</h6>
            <h6>{ category.news.id }</h6>
            <h6>{ category.news.title }</h6>
            <h6>{ category.news.url }</h6>
            <hr /> 
            <span>URL</span>
            <h6>{ item.id }</h6>
            <h6>{ item.title }</h6>  
            <div> 
               <a href    = {item.url}
                    target = "_blank"
                    rel    = "noopener noreferrer"
                    className = "post-content"
                >
                    {item.url}
                </a>  
            </div>
            <div  >
                <p><small>{console.log("__________pobj______________")}</small></p>
                <p><small>{console.log(JSON.stringify(pobj))}</small></p>
                <p><small>{console.log("__________location______________")}</small></p>
                <p><small>{console.log(JSON.stringify(location))}</small></p>
            </div>
        </div>
    )
    
}


export default NewsItem