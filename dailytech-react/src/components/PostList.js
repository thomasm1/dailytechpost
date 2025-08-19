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
      className="nav-link" 
      to={`/${post.id}`}
      style={({ isActive }) => ({
        color: isActive ? "brown" : "inherit",
        fontWeight: isActive ? "bold" : "normal",
        textDecoration: "none" ,
        maxHeight: "400px",
        marginBottom: "20px",
        overflow: "auto" 
      })}
      key={post.id}
    >
      <div
        className="card"
        style={{ width: "300px", 
          backgroundColor: "lightblue"
        
        }}
      >
        <div className="card-body"style={{ fontSize: "small" ,
          maxHeight: "3400px" 
           }}>
          <p>{post.title}</p>
          <p style={{ fontSize: "small" ,
          maxHeight: "300px" 
           }}>{post.post}</p>
          <CommentList comments={post.comments || []} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    </NavLink>
    </>
   )
  });
  
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      <Outlet />
      <hr />
     {renderedPosts}
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