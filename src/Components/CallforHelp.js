import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/CallforHelp.css'; // Import the CallforHelp specific CSS

const CallforHelp = ({ handleLogout }) => {
  const navigate = useNavigate();

  const handleWeatherUpdateClick = () => {
    // Navigate to the Weather Update page
    navigate('/weather-update');
  };

  const handleEmergencyTutorialsClick = () => {
    // Navigate to the Emergency Tutorials page
    navigate('/emergency-tutorials');
  };

  const handleLogoutClick = () => {
    // Perform logout action and redirect to login page
    if (typeof handleLogout === 'function') {
      handleLogout();
      navigate('/login');
    } else {
      console.error('handleLogout function is not defined');
    }
  };

  return (
    <div className="callforhelp-container">
      <nav className="callforhelp-nav">
        <Link to="/call-for-help">Call for Help</Link>
        <button onClick={handleWeatherUpdateClick}>Weather Update</button>
        <button onClick={handleEmergencyTutorialsClick}>Emergency Tutorials</button>
        <button onClick={handleLogoutClick}>Log Out</button>
      </nav>
      {/* Other content in CallforHelp component */}
    </div>
  );
};

export default CallforHelp;

