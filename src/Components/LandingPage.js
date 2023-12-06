// LandingPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/LandingPage.css'; // Import the separated CSS file

const LandingPage = () => {
  const [showAboutUs, setShowAboutUs] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const aboutUsSection = document.querySelector('.about-us');

    if (scrollPosition > aboutUsSection.offsetTop - window.innerHeight / 2) {
      setShowAboutUs(true);
    } else {
      setShowAboutUs(false);
    }
  };

  // Attach the scroll event listener
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`landing-page ${showAboutUs ? 'scroll-active' : ''}`}>
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
      <div className={`about-us ${showAboutUs ? 'show' : ''}`}>
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
