import React, { useEffect, useState } from 'react';
import { useLocation, useOutletContext, useParams } from 'react-router-dom';
import blogsService from '../services/publicBlogsService.js';
import DOMPurify from 'dompurify';
import { styles } from '../config';


const PublicBlogItem = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const location = useLocation();
    const pobj = useOutletContext();

    useEffect(() => {
        const fetchBlog = async () => { 
            const response = await blogsService.getBlog(id);
            console.log("blogsService blog:", response);
            setBlog(response);
        };

        fetchBlog();
    }, [id]);

    if (!blog) {
        return <div>Loading blog...</div>;
    }

    return (
        <div className="post-item-container" >
            <div className="post-header">
                 <h5 className="detail-label">{blog.cat3}</h5> 
                <p className="post-title">{blog.title}</p>
                <div className="post-meta">
                    <span className="post-author">{blog.author}</span>
                    <span className="post-date">{blog.date}</span>
                </div>
            </div>
            <div className="post-body">
<div
  className="post-content blog-html blog-html--dark"
  dangerouslySetInnerHTML={{
    __html: DOMPurify.sanitize(blog.post || "", {
      FORBID_TAGS: ["style"],
      FORBID_ATTR: ["style", "color"]
    })
  }}
/>
<div className="detail-item">
  <div
    className="detail-value blog-html blog-html--dark"
    dangerouslySetInnerHTML={{
      __html: DOMPurify.sanitize(blog.blogcite || "", {
        FORBID_TAGS: ["style"],
        FORBID_ATTR: ["style", "color"]
      })
    }}
  />
</div>
                {/* <div className="detail-item">
                    <span className="detail-label">Email:</span> {blog.email}
                </div> */}
                {/* <div className="detail-item">
                    <span className="detail-label">Category ID:</span> {blog.categoryId}
                </div> */}
                {/* <div className="detail-item">
                    <span className="detail-label">State:</span> {blog.state}
                </div> */}
      
            
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

export default PublicBlogItem;
