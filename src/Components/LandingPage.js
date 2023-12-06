import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CSS/LandingPage.css';

import godwinImage from './Images/godwin.png';
import kenImage from './Images/ken.png';
import richardImage from './Images/richard.png';
import zartImage from './Images/zartpic.png';

const LandingPage = () => {
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showTeam, setShowTeam] = useState(false); // Add this line for showTeam

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const teamSection = document.querySelector('.teamedited-bg');
    const aboutUsSection = document.querySelector('.about-us');

    if (teamSection && scrollPosition > teamSection.offsetTop - window.innerHeight / 2) {
      setShowTeam(true);
    } else {
      setShowTeam(false);
    }

    if (aboutUsSection && scrollPosition > aboutUsSection.offsetTop - window.innerHeight / 2) {
      setShowAboutUs(true);
    } else {
      setShowAboutUs(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="landing-page">
      <div className="landingpage-bg"></div>
      
      <div className={`teamedited-bg ${showTeam ? 'show' : ''}`}>
        <div className="team-members">
          <div className="member">
            <img src={zartImage} alt="Zart" />
            <p>Description about Zart</p>
          </div>
          <div className="member">
            <img src={kenImage} alt="Ken" />
            <p>Description about Ken</p>
          </div>
          <div className="member">
            <img src={richardImage} alt="Richard" />
            <p>Description about Richard</p>
          </div>
          <div className="member">
            <img src={godwinImage} alt="Godwin" />
            <p>Description about Godwin</p>
          </div>
        </div>
      </div>

      <div className="content">
        <h1>WELCOME</h1>
        <div className="buttons">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/signup">
            <button>SignUp</button>
          </Link>
        </div>
        <div className={`about-us ${showAboutUs ? 'show' : ''}`}>
          <h2>About Us</h2>
          <p>Some information about your company or application...</p>
        </div>
        <div className="scroll-down">
          <p>Scroll down to learn more</p>
          <i className="fa fa-angle-down"></i>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
