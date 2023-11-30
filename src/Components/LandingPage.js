import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const handleScroll = () => {
    // Handle scrolling action to show 'About Us' section
    // You can implement the scrolling functionality here
  };

  return (
    <div className="landing-page">
      <h1 style={{ color: 'red', textAlign: 'center', fontSize: '48px', fontWeight: 'bold' }}>
        RESPO
      </h1>
      <div className="buttons" style={{ textAlign: 'center' }}>
        <Link to="/login">
          <button style={{ backgroundColor: 'white', color: 'black', marginRight: '10px' }}>
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button style={{ backgroundColor: 'transparent', color: 'black', border: '1px solid black' }}>
            SignUp
          </button>
        </Link>
      </div>
      {/* Implement the 'About Us' section here */}
      <div className="about-us" style={{ display: 'none' }}>
        <h2>About Us</h2>
        <p>Some information about your company or application...</p>
      </div>
      {/* Implement the scroll functionality to show 'About Us' section */}
      <div className="scroll-down" style={{ textAlign: 'center', marginTop: '50px' }}>
        <p>Scroll down to learn more</p>
        <i className="fa fa-angle-down" onClick={handleScroll}></i>
      </div>
    </div>
  );
};

export default LandingPage;
