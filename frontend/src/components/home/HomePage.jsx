import React, { useState } from "react";
import '../../App.css';
import TopBar from "../TopBar";

const HomePage = () => {
    return (
      <div>
        <TopBar /> {/* Render the TopBar component */}
        
        <h1>Welcome to My Home Page</h1>
        <p>This is the content of my home page...</p>
      </div>
    );
}

export default HomePage;