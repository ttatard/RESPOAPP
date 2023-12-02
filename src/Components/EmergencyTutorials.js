// EmergencyTutorials.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/EmergencyTutorials.css'; // Import the main CSS

const EmergencyTutorials = ({ handleLogout }) => {
  const navigate = useNavigate();

const handleWeatherUpdateClick = () => {
    navigate('/weather-update');
  };

  const handleEmergencyTutorialsClick = () => {
    navigate('/emergency-tutorials');
  };

  const handleLogoutClick = () => {
    if (typeof handleLogout === 'function') {
      handleLogout();
      navigate('/login');
    } else {
      console.error('handleLogout function is not defined');
    }
  };

  return (
    <div className="callforhelp-container">
      <nav className="dashboard-nav">
        <Link to="/call-for-help" className="dashboard-link">Call for Help</Link>
        <button onClick={handleWeatherUpdateClick} className="dashboard-button">Weather Update</button>
        <button onClick={handleEmergencyTutorialsClick} className="dashboard-button">Emergency Tutorials</button>
        <button onClick={handleLogoutClick} className="dashboard-button">Log Out</button>
      </nav>
    </div>
  );
};

export default EmergencyTutorials;