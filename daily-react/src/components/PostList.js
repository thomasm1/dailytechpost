import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
import { API_BASE_URL } from "../config";
import { NavLink, Outlet } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/posts`);
      setPosts(res.data.content);
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
      to={`/posts/${post.id}`}
      style={({ isActive }) => ({
        color: isActive ? "brown" : "inherit",
        fontWeight: isActive ? "bold" : "normal",
        textDecoration: "none",
      })}
      key={post.id}
    >
      <div
        className="card"
        style={{ width: "300px",  marginBottom: "10px" }}
      >
        <div className="card-body">
          <p>{post.title}</p>
          <p style={{ fontSize: "small" }}>{post.post}</p>
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
