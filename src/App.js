import React, { useState } from 'react';
import './Components/CSS/Respo.css';
import logo from './Components/Images/logo.png';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './Components/Login';
import SignUpPage from './Components/SignUp';
import DashboardPage from './Components/Dashboard';
import WeatherUpdate from './Components/WeatherUpdate'; // Import WeatherUpdate component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle successful login
  const handleLogin = () => {
    // Perform your login logic here
    // For demo, assuming successful login
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout logic here
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <div className="header">
          <img src={logo} alt="Logo" className="logo" />
          <Routes>
            <Route
              path="/"
              element={
                isLoggedIn ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <h1>CREATE AN <span className="red-text">ACCOUNT</span></h1>
                )
              }
            />
            <Route
              path="/login"
              element={
                isLoggedIn ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <h1>LOGIN TO <span className="red-text">ACCOUNT</span></h1>
                )
              }
            />
          </Routes>
        </div>
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route
            path="/dashboard"
            element={isLoggedIn ? <DashboardPage onLogout={handleLogout} /> : <Navigate to="/login" />}
          />
          <Route path="/weather-update" element={<WeatherUpdate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
