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
            <div>
                <header className="app-header">
                    <div className="header-content row">
                        <h6>Write! </h6>

                        <Filter getKeywords={this.getKeywords}>
                            {this.state.loading && <div>Loading...</div>}
                            {!this.state.loading && (
                                <NewsList newsProp={this.state.filtered} />
                            )}
                        </Filter>
                    </div>
                    <hr />
                    <hr />
                </header>
            </div>
        );
    }
}

export default  NewsParent; 
