import React, {  Component  } from "react";
import NewsList from "./NewsList";
import Filter from "./Filter";
import axios from "axios";
import { CATEGORY_BASE_URL } from "../config";
// import {   useLocation } from 'react-router-dom';

class NewsService extends Component {
    // const location = useLocation();
    constructor() {
        super();
        this.state = {
            news: [],
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
            const response = await axios.get(`${CATEGORY_BASE_URL}/categories`);
            const categories = response.data;
            this.setState({ news: categories, filtered: categories, loading: false });
        } catch (error) {
            console.error("Error fetching news:", error);
            this.setState({ loading: false });
        }
    };

    getKeywords = (keywords) => {
        if (keywords === "") {
            this.setState({ filtered: this.state.news });
            return;
        }
        const filteredCategories = this.state.news
            .map((category) => ({
                ...category,
                news: category.news.filter((item) =>
                (item.title.toLowerCase().includes(keywords.toLowerCase()) ||
                    item.url.toLowerCase().includes(keywords.toLowerCase()))
                ),
            }))
            .filter((category) => category.news.length > 0);

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

export default  NewsService; 
