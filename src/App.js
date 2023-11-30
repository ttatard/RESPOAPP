import React, { useState } from 'react';
import './Components/CSS/Respo.css';
import logo from './Components/Images/logo.png';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './Components/Login';
import CallforHelp from './Components/CallforHelp'; 
import SignUpPage from './Components/SignUp';
import DashboardPage from './Components/Dashboard';
import WeatherUpdate from './Components/WeatherUpdate';
import Directory from './Components/Directory';
import LandingPage from './Components/LandingPage';
import AdminRegister from './Components/AdminRegister'; // Import your AdminRegister component here
import AdminPage from './Components/AdminPage'; // Import your AdminPage component here

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <div className="header">
          <img src={logo} alt="Logo" className="logo" />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/login"
              element={
                isLoggedIn ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <>
                    <h1>LOG IN YOUR <span className="red-text">ACCOUNT</span></h1>
                    <LoginPage onLogin={handleLogin} />
                  </>
                )
              }
            />
            <Route
              path="/dashboard"
              element={
                isLoggedIn ? (
                  <DashboardPage onLogout={handleLogout} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/weather-update"
              element={
                isLoggedIn ? (
                  <WeatherUpdate onLogout={handleLogout} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/call-for-help"
              element={
                isLoggedIn ? (
                  <CallforHelp onLogout={handleLogout} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/directory"
              element={
                isLoggedIn ? (
                  <Directory />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/adminpage"
              element={
                isLoggedIn ? (
                  <AdminPage />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/admin" element={<AdminRegister />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
