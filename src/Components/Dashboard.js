import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/Dashboard.css'; // Import your CSS file
import zartImage from './zart.png'; // Ensure the correct path to the imag


function Dashboard({ onLogout }) {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleLogout = () => {
    onLogout();
    // Redirect to the login page
    navigate('/login');
  };
  
  const handleWeatherUpdateClick = () => {
    // Navigate to the Weather Update page when the button is clicked
    navigate('/weather-update');
  };

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <Link to="/call-for-help">Call for Help</Link>
        <Link to="/weather-update">Weather Update</Link>
        <Link to="/emergency-tutorials">Emergency Tutorials</Link>
        <button onClick={handleLogout}>Log Out</button>
      </nav>

      {/* Additional content or components can be added here */}
      <div className="allyouneed">
  <p>Welcome!</p>
  <p className="respohead">ALL YOU NEED<br />IN <span style={{color: 'red'}}>RESPO</span></p><br />
  <p className="description">
    In 2026, we aim to become Cebu's top service provider with our cutting-edge<br />
    emergency response app. Our goal is to help ensure the safety and well-being<br />
    of every resident and visitor in Cebu by providing a reliable and efficient<br />
    platform that connects people in need with the assistance they require in times<br />
    of crisis.
  </p><br /><br />
  <p>Scroll down to see more.</p><br /><br />

  <div className="scroll-line">
    <div>
      <img src={zartImage} alt="Zart" className="zart-image" />
    </div>
  </div>
</div>

  <div className="callforhelp">
        <br /><br /><p className="callforhead">CALL FOR <span style={{color: 'red'}}>HELP</span></p>
        <p className="description">
        Your lifeline during critical moments. Our mission is simple yet essential: to streamline<br />
        communication to emergency services authorities, ensuring that help is just a call away<br />
        when you need it most. We understand that in emergencies, every second counts. With<br />
        our service, you can connect with the right assistance swiftly and efficiently, putting your<br /> 
        safety and peace of mind as our top priority. Join us in making your community safer and<br />
        more responsive in times of need. When you're facing a crisis, "Call for Help" is your<br /> 
        trusted partner for immediate support.
        </p><br /><br />

  {/* Other content */}
    <Link to="/call-for-help" className="get-started-btn">Get Started on Call for Help</Link>
    {/* Other content */}
          <div className="extended-line"></div>
        
  </div>

  <div className="weatherupdate">
        <br /><br /><p className="weatherhead">WEATHER <span style={{color: 'red'}}>UPDATE</span></p>
        <p className="description">
        Your go-to source for all things weather-related! We are here to keep you informed,<br /> 
        prepared, and in the know about the latest weather conditions, forecasts, and <br />
        meteorological insights. With our real-time updates and expert analysis, you can stay <br />
        ahead of the weather and make informed decisions for your daily activities.
        </p><br /><br />

  <div className="dashboard">
    <Link to="/weather-update" className="get-started-btn">Get Started on Weather Update</Link>

        <div className="third-line"></div>
        
        
        </div>
  </div>

        <div className="emergencytutorials">
        <br /><br /><p className="emergencyhead">EMERGENCY <span style={{ color: 'red' }}>TUTORIALS</span></p>
        <p className="description">
        Our step-by-step guides and expert insights will walk you through the procedures, <br />
        providing you with the confidence and know-how to handle emergencies with a level head. <br />
        We believe that knowledge is the key to resilience, and our tutorials are your key to being <br />
        well-prepared. Join us on this journey to a safer, more secure future, where you have the <br />
        power to protect yourself and your community. Knowledge is empowerment, and we're here <br />
        to help you every step of the way.
        </p><br /><br />

        <div className="emergencytutorials">
  {/* Other content */}
  <div className="dashboard">
    <Link to="/emergency-tutorials" className="get-started-btn">Get Started on Emergency Tutorials</Link>
    {/* Other content */}
  </div>
        

        </div><br /><br /><br />
  </div>
  </div>  
  );
}


export default Dashboard;