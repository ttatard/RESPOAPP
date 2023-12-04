// LandingPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/LandingPage.css'; // Import the separated CSS file

const LandingPage = () => {
  const handleScroll = () => {
    // Handle scrolling action to show 'About Us' section
    // You can implement the scrolling functionality here
  };

  return (
    <div className="landing-page">
      <h1>WELCOME</h1>
      <div className="buttons">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>SignUp</button>
        </Link>
      </div>
      {/* Implement the 'About Us' section here */}
      <div className="about-us">
        <h2>About Us</h2>
        <p>Some information about your company or application...</p>
      </div>
      {/* Implement the scroll functionality to show 'About Us' section */}
      <div className="scroll-down">
        <p>Scroll down to learn more</p>
        <i className="fa fa-angle-down" onClick={handleScroll}></i>
      </div>
    </div>
  );
};

export default LandingPage;
