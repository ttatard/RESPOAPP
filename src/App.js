// App.js
import React, { useState } from 'react';
import './App.css';
import logo from './logo.png';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle successful login
  const handleLogin = () => {
    // Perform your login logic here
    // For demo, assuming successful login
    setIsLoggedIn(true);
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
            element={isLoggedIn ? <DashboardPage /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
