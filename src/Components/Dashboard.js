import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/Respo.css'; // Import your CSS file

function DashboardPage({ onLogin }) {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);


  const handleLogout = () => {
    // Redirect to the login page
    window.location.href = '/login';
  };
  
  const cancelLogout = () => {
    setShowConfirmation(false);
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

      {/* Logout confirmation box */}
    </div>
  );
}

export default Dashboard;