import React, { useState, useEffect } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AdminRegister from './Components/AdminRegister';
import './Components/CSS/Respo.css';
import CallforHelp from './Components/CallforHelp';
import Dashboard from './Components/Dashboard';
import Directory from './Components/Directory';
import LandingPage from './Components/LandingPage';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import WeatherUpdate from './Components/WeatherUpdate';
import EmergencyTutorials from './Components/EmergencyTutorials';
import UserAdmin from './Components/UserAdmin';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // Set isLoggedIn to true upon successful login
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Set isLoggedIn to false upon logout or perform other logout-related tasks
  };
  
  useEffect(() => {
    document.title = "Respo";
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/dashboard" />
              ) : (
                <>
                  <h1>
                    LOG IN YOUR <span className="red-text">ACCOUNT</span>
                  </h1>
                  <Login onLogin={handleLogin} />
                </>
              )
            }
          />
          <Route path="/dashboard" element={<Dashboard onLogout={handleLogout} />} />
          <Route path="/call-for-help" element={<CallforHelp />} />
          <Route path="/weather-update" element={<WeatherUpdate />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/useradmin" element={<UserAdmin />} />
          <Route path="/admin" element={<AdminRegister />} />
          <Route path="/signup" element={<SignUp />}  />
          <Route path="/emergency-tutorials" element={<EmergencyTutorials />}  />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
