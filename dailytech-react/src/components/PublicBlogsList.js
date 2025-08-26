import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
import { awsUrlDevAll } from "../config";
import { NavLink, Outlet } from "react-router-dom";
import { styles } from '../config';
import DOMPurify from 'dompurify';

const PublicBlogsList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${awsUrlDevAll}/dev/posts`);
      setBlogs(res.data);
      console.log(res.data)
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const renderedBlogs = blogs.map((blog) => {
    return (
      <>
        <NavLink
          context={blog}
          className="text-decoration-none d-block"
          to={`/${blog.id}`}
          style={{
            color: "#212121",
            width: "100%"
          }}
          key={blog.did}
        >
          <div
            className="card border-0"
            style={{
              width: "100%",
              maxWidth: "700px",
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(10px)",
              borderRadius: "15px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.3)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.2)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
            }}
          >
            <div className="card-body p-4  blog-html" >
              <h5 className="card-title fw-bold mb-3" style={{
                fontSize: "1.3rem",
                color: "#212121",
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)"
              }}>
                
                {blog.title}
              </h5>
           <div
  className="card-text mb-4 blog-html blog-html--dark"
  style={{
    fontSize: "0.95rem",
    lineHeight: "1.6",
    maxHeight: "140px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)"
  }}
  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.post || "") }}
/>
 
              {/* <div className="mt-3" style={{
                background: "rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                padding: "15px",
                border: "1px solid rgba(255, 255, 255, 0.1)"
              }}>
               <CommentList comments={blog.comments || []} />
                <CommentCreate blogId={blog.did} /> 
              </div> */}
            </div>
          </div>
        </NavLink>
        <br />
      </>
    )
  });

  if (loading) {
    return (
      <div className="posts-page" style={{
        minHeight: '100vh',
        padding: '40px 20px',
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="loading-container" style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          padding: '60px 40px',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Fast spinning hexagon loader */}
          <div className="hexagon-spinner" style={{
            width: '80px',
            height: '80px',
            backgroundImage: 'url(/the_time_machine.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)',
            animation: 'hexSpinFast 0.8s linear infinite',
            margin: '0 auto 20px auto',
            filter: 'brightness(1.2) contrast(1.1)'
          }} />
          <div style={{
            color: '#212121',
            fontSize: '1.2rem',
            fontWeight: '500',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            marginBottom: '10px'
          }}>Loading Daily Tech Posts</div>
          <div style={{
            color: 'rgba(33, 33, 33, 0.7)',
            fontSize: '0.9rem',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
          }}>Fetching latest content...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="posts-page" style={{
      minHeight: '100vh',
      padding: '40px 20px',
      background: 'transparent'
    }}>
      <div className="posts-container" style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        maxWidth: '900px',
        width: '90%',
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 10
      }}>
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
          opacity: 0.3,
          clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)',
          animation: 'hexRotate 20s linear infinite',
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
          opacity: 0.25,
          clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)',
          animation: 'hexRotateReverse 25s linear infinite',
          zIndex: 1,
          pointerEvents: 'none'
        }} />
        <div className="posts-container-inner" style={{
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
          }}>Daily Tech Posts</h2>
          <Outlet />
          <div className="d-flex flex-column align-items-center gap-4">
            {renderedBlogs}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicBlogsList;