import React, { Component, useState, useEffect } from "react"; 
import Write from "./layout/Write";
const importText = "../as"
class Home extends  Component {
  constructor() {
    super();
    this.state = {
      news: [], 
      homeText:
        "HOME",
      filtered: [],
      loading: true,
    };
  } 

  render() {
    return (
      <div>
       {this.state.homeText}  
        
        <Write />
      </div>
    );
  }
}

export default Home;
