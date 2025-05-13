import React, { useEffect, useState } from 'react';
import { useLocation, useOutletContext, useParams } from 'react-router-dom';
import postsService from '../services/postsService.js';

const PostItem = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const location = useLocation();
    const pobj = useOutletContext();

    useEffect(() => {
        const fetchPost = async () => { 
            const response = await postsService.getPost(id);
            console.log("postsService post:", response);
            setPost(response);
        };

        fetchPost();
    }, [id]);

    if (!post) {
        return <div>Loading post...</div>;
    }

    return (
        <div className="post-item-container" >
            <div className="post-header">
                <p className="post-title">{post.title}</p>
                <div className="post-meta">
                    <span className="post-author">By: {post.author}</span>
                    <span className="post-date">Date: {new Date(post.date).toLocaleDateString()}</span>
                </div>
            </div>
            <div className="post-body">
                <p className="post-content">{post.post}</p>
            </div>
            <div className="post-details">
                <div className="detail-item">
                    <span className="detail-label">DID:</span> {post.did}
                </div>
                <div className="detail-item">
                    <span className="detail-label">Category:</span> {post.cat3}
                </div>
                <div className="detail-item">
                    <span className="detail-label">Citation:</span> {post.blogcite}
                </div>
                <div className="detail-item">
                    <span className="detail-label">Email:</span> {post.email}
                </div>
                <div className="detail-item">
                    <span className="detail-label">Category ID:</span> {post.categoryId}
                </div>
                <div className="detail-item">
                    <span className="detail-label">State:</span> {post.state}
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
    );
};

export default PostItem;
