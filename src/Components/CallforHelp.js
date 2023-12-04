// CallforHelp.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/CallforHelp.css'; // Import the main CSS

const CallforHelp = ({ handleLogout }) => {
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
      <div className="call-for-help">
        {/* Insert the image here */}

        <h1 className="call-for-help-title">CALL FOR <span className="red-text">HELP</span></h1>
        <div className="button-container">
          <div className="left-button">
            <button className="see-directory-btn" onClick={() => navigate('/directory')}>
              <div className="button-text">See Directory</div>
            </button>
            <div className="button-description button-description-left">
              The RESPO Directory provides you with an extensive directory of emergency services, including hospitals, police stations, fire departments, and more. Access crucial contact details at your fingertips when you need them the most.
            </div>
          </div>
          <div className="right-button">
            <button className="emergency-btn" onClick={() => navigate('/emergency')}>
              <div className="button-text">Emergency</div>
            </button>
            <div className="button-description button-description-right">
              When seconds matter the most, "Emergency" provides a one-tap solution to alert authorities, emergency services, and your selected contacts. Instantly send out distress signals, ensuring help is on its way.
            </div>
          </div>
        </div>
        <p className="centered-text compact-paragraph">
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          We want to bring an important matter to your attention. While RESPO is a platform designed to connect people in need with real and immediate assistance, it has come to our notice that <br></br>there have been instances of fake or fraudulent requests circulating within our community. We want to emphasize the importance of staying vigilant and cautious while using our platform.
        </p>
      </div>
    </div>
  );
};

export default CallforHelp;
