import React, {  Component  } from "react";
import NewsList from "./NewsList";
import Filter from "./Filter"; 
import  newsService   from "../services/newsService";
// import {   useLocation } from 'react-router-dom';

class NewsParent extends Component {
    // const location = useLocation();
    constructor() {
        super();
        this.state = {
            categories: [],
            footerText:
                "&copy; 2021 All Rights Reserved | thomasmaestas.net | The News Room",
            filtered: [],
            loading: true,
        };
    }

    componentDidMount() {
        this.fetchNews();
    }

    fetchNews = async () => {
        try {
            const categories = await newsService.getCategories(); 
            console.log("NewsParent fetchNews:", categories);
            this.setState({ categories: categories, filtered: categories, loading: false });
        } catch (error) {
            console.error("Error fetching news:", error);
            this.setState({ loading: false });
        }
    };

getKeywords = (keywords) => {
    if (!keywords || keywords.trim() === "") {
        this.setState({ filtered: this.state.categories });
        return;
    }
    const lowerKeywords = keywords.toLowerCase();
    const filteredCategories = this.state.categories.filter((category) => {
        // Check category name/description
        const categoryMatch =
            (category.name && category.name.toLowerCase().includes(lowerKeywords)) ||
            (category.description && category.description.toLowerCase().includes(lowerKeywords));

        // Check any news item property
        const newsMatch = Array.isArray(category.news) && category.news.some((item) =>
            (item.title && item.title.toLowerCase().includes(lowerKeywords)) ||
            (item.url && item.url.toLowerCase().includes(lowerKeywords)) ||
            (item.description && item.description.toLowerCase().includes(lowerKeywords)) ||
            (item.name && item.name.toLowerCase().includes(lowerKeywords))
        );

        // Show category if ANY match
        return categoryMatch || newsMatch;
    });

    this.setState({ filtered: filteredCategories });
};
    render() {
        return (
            <div className="news-page" style={{
                minHeight: '100vh',
                padding: '40px 20px',
                background: 'transparent'
            }}>
                <div className="news-container" style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '20px',
                    padding: '40px',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    maxWidth: '1200px',
                    width: '90%',
                    margin: '0 auto',
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 10
                }}>                    
                    {/* Animated hexagons */}
                    <div style={{
                        content: '',
                        position: 'absolute',
                        top: '-20px',
                        right: '-20px',
                        width: '100px',
                        height: '100px',
                        backgroundImage: 'url(/the_time_machine.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.15,
                        clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)',
                        animation: 'hexRotate 45s linear infinite',
  willChange: 'transform',
  transform: 'translateZ(0)',
                        zIndex: 1,
                        pointerEvents: 'none'
                    }} />
                    <div style={{
                        content: '',
                        position: 'absolute',
                        bottom: '-15px',
                        left: '-15px',
                        width: '80px',
                        height: '80px',
                        backgroundImage: 'url(/the_time_machine.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.15,
                        clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)',
                        animation: 'hexRotateReverse 60s linear infinite',
  willChange: 'transform',
  transform: 'translateZ(0)',
                        zIndex: 1,
                        pointerEvents: 'none'
                    }} />
                    
                    <div className="news-container-inner" style={{
                        background: 'rgba(0, 0, 0, 0.1)',
                        borderRadius: '15px',
                        padding: '30px',
                        margin: '0',
                        position: 'relative',
                        zIndex: 2
                    }}>                        
                        <h2 style={{
                            color: '#212121',
                            textAlign: 'center',
                            fontSize: '2.2em',
                            fontWeight: '300',
                            marginBottom: '30px',
                            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
                        }}>Daily Tech Research</h2>
                        
                        <div className="search-section" style={{
                            marginBottom: '30px',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>                        
                            <Filter getKeywords={this.getKeywords} />
                        </div>
                        
                        <div className="news-content">
                            {this.state.loading && (
                                <div style={{
                                    textAlign: 'center',
                                    padding: '40px',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: '12px',
                                    color: '#212121',
                                    fontSize: '1.1rem',
                                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                                }}>Loading research categories...</div>
                            )}
                            {!this.state.loading && (
                                <NewsList newsProp={this.state.filtered} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default  NewsParent; 
