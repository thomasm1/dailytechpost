import React, { Component, useState, useEffect } from "react";
import PostCreate from "../components/PostCreate";
import { styles } from '../config';
import '../styles.css';

class Write extends Component {
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
      <div style={{      
         minHeight: '100vh',
        padding: '40px 20px',
        background: 'transparent',
 
           display: "grid",
    placeItems: "center", // Centers content both horizontally and vertically

        justifyContent: 'center'// Centers content both horizontally and vertically
   
    }}>
        <div
          className="card border-0 blog-card"
          style={{
            width: "100%",
      maxWidth: "800px",
      background: "rgba(255, 255, 255, 0.15)",
      borderRadius: "15px",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
  
         }}>
          <div className="card-body p-4  " >
            <h2 className="card-title  mb-3" style={{
          
            color: '#212121',
            textAlign: 'center',
            fontSize: '2.2em',
            fontWeight: '400',
            marginBottom: '30px',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'

                }}>
                  Write Here, Write Now! 
            </h2>

            <div className="row">
              <div className="col-md-12">
                
          <div
                className="card-text mb-4 blog-html blog-html--dark"
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.6", 
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)"
                }}>

                  <PostCreate />
                  <hr /> 
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Write;
