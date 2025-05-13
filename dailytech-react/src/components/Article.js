import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostDetail, handlePostLikes,clearPostData} from '../state/actions/postsAction';
 
import DataCounter from '../data';

class Post extends Component {

    componentDidMount(){
        this.props.dispatch(getPostDetail(this.props.match.params.id))
    }

    componentWillUnmount(){
        this.props.dispatch(clearPostData())
    }

    addLike = (action) => {
        const id = this.props.match.params.id;
        const data = this.props.posts.postData[0];

        const likes = data.counts[0];
        const bookmarks = data.counts[1];

        const newLikes = action === 'ADD_LIKE' ? [likes+1,bookmarks] : [likes,bookmarks];         
        newLikes = action === 'ADD_BOOKMARK' ? [likes,bookmarks+1] : [likes,bookmarks];

        /// go to dispatch
        this.props.dispatch(handlePostLikes(newLikes, id))
    }


    renderNews = ({postData}) => (
        postData ?
            <div>
                <div className="tags">
                    <span>
                        <i className="fa fa-eye"></i>
                        {postData[0].views}
                    </span>
                    <span>
                        <i className="fa fa-thumbs-up"></i>
                        {postData[0].counts[0]}
                    </span>
                    <span>
                        <i className="fa fa-bookmark"></i>
                        {postData[0].counts[1]}
                    </span>
                </div>
                <div className="top">
                    <h2>{postData[0].title}</h2>
                    <span>Post by: <strong>{postData[0].author}</strong></span>
                </div>
                <img 
                    alt={postData[0].title} 
                    src={`/images/posts/${postData[0].img}`}
                />
                <div className="body_news">
                    {postData[0].body}
                </div>
                <div>
                    <DataCounter
                        addLike={ args => this.addLike(args)}
                        likes={postData[0].counts[0]}
                        bookmarks={postData[0].counts[1]}
                        addBookmark={ args => this.addBookmark(args)}
                    />
                </div>
            </div>
        :null
    )


    render() {
        console.log(this.props)
        return (
            <div className="news_container">
                {this.renderNews(this.props.posts)}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        posts:state.posts
    }
}


export default connect(mapStateToProps)(Post);