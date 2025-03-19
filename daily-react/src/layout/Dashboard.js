import React, { PureComponent, useState, useEffect } from "react";
import PostCreate from "../components/PostCreate";
import PostList from "../components/PostList";
class Dashboard extends PureComponent {
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
 

  render() {
    return (
      <div>
        <div className="container">
 
          <div className="row">
            <div className="col-md-8">
              <h1>Write Post</h1>
              <PostCreate />
              <hr />
              <hr />
              <h1>Posts</h1>
              <PostList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
