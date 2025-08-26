import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
import { API_BASE_URL } from "../config";
import { NavLink, Outlet } from "react-router-dom";
import { styles } from '../config';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/posts`);
      setPosts(res.data.content);
      console.log(res.data.content)
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

const renderedPosts = Object.values(posts).map((post) => {
  return (
    <>
      <NavLink
        context={post}
        className="text-decoration-none d-block"
        to={`/posts/${post.id}`}
        style={{
          color: "inherit",
          width: "100%"
        }}
        key={post.id}
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
          <div className="card-body p-4">
            <h5 className="card-title fw-bold mb-3" style={{
              fontSize: "1.3rem",
              color: "#212121",
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)"
            }}>
              {post.title}
            </h5>
            <p className="card-text mb-4" style={{
              fontSize: "0.95rem",
              lineHeight: "1.6",
              maxHeight: "120px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              color: "rgba(255, 255, 255, 0.9)",
              whiteSpace: 'pre-wrap'
            }}>
              {post.post}
            </p>
            <div className="mt-3" style={{
              background: "rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              padding: "15px",
              border: "1px solid rgba(255, 255, 255, 0.1)"
            }}>
              <CommentList comments={post.comments || []} />
            </div>
          </div>
        </div>
      </NavLink>
      <div style={{ width:"80%",margin: "5px" }}>
        <CommentCreate postId={post.id} />
      </div>
    </>
  );
});

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
            {renderedPosts}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostList;

// {
//       "id": 20,
//       "did": "D1001",
//       "date": "2025-05-01",
//       "author": "TomA",
//       "monthOrder": "May",
//       "cat3": "Blockchain",
//       "title": "Ethereum Merge",
//       "post": "Discussion on Ethereum merge details...",
//       "blogcite": "https://blogsite1.com",
//       "email": "tom.admin@example.com",
//       "state": "Published",
//       "wordCount": 1500,
//       "durationGoal": 10,
//       "categoryId": null,
//       "comments": [
//         {
//           "id": 30,
//           "name": "Sam Reader",
//           "email": "sam@example.com",
//           "body": "Great insights, thanks for sharing!"
//         }
//       ],
//       "weblinks": [
//         {
//           "id": 1,
//           "title": "Spring Boot Reference",
//           "profileUrl": "https://docs.spring.io/spring-boot/docs/current/reference/html/",
//           "ownerEmail": null,
//           "url": "https://docs.spring.io/spring-boot/docs/current/reference/html/",
//           "host": "docs.spring.io",
//           "htmlPage": "htmlpage",
//           "downloadStatus": "NOT_ATTEMPTED",
//           "web3Link": "true"
//         }]
//       }