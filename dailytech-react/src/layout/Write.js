import React, {  Component, useState, useEffect } from "react";
import PostCreate from "../components/PostCreate";
// import PostList from "../components/PostList";
class Write extends  Component {
  constructor() {
    super();
    this.state = {
      news: [], 
      dashboardText:
        "Write Here, Write Now",
      filtered: [],
      loading: true,
    };
  }
 

  render() {
    return ( 
        <div className="container">
 
          <div className="row">
            <div className="col-md-8">
              <h6>Write Post</h6>
              <PostCreate />
              <hr />
            
            </div>
          </div>
        </div> 
    );
  }
}

export default Write;
