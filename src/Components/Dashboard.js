// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  // Logout logic can be added here
  const handleLogout = () => {
    // Implement logout functionality here
    console.log('Logging out...');
    // Add logic to handle logout, clear session, etc.
  };

  return (
    <div>
      <header>
        <img src="logo.png" alt="Logo" />
        <nav>
          <ul>
            <li>
              <Link to="/call-for-help">Call for Help</Link>
            </li>
            <li>
              <Link to="/weather-update">Weather Update</Link>
            </li>
            <li>
              <Link to="/emergency-tutorials">Emergency Tutorials</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Log-out</button>
            </li>
          </ul>
        </nav>
      </header>
      {/* Other content for the page */}
    </div>
  );
}

export default HomePage;
