import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './Components/CSS/Respo.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Dashboard from './Components/Dashboard1';
import WeatherUpdate from './Components/WeatherUpdate1';
import Directory from './Components/Directory';
import LandingPage from './Components/LandingPage';
import AdminRegister from './Components/AdminRegister'; // Import your AdminRegister component here
import AdminPage from './Components/AdminPage'; // Import your AdminPage component here
import CallforHelp from './Components/CallforHelp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // Set isLoggedIn to true upon successful login
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Set isLoggedIn to false upon logout or perform other logout-related tasks
  };
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={isLoggedIn ? 
            (<Navigate to="/dashboard" />) : (
                  <>
                    <h1>LOG IN YOUR <span className="red-text">ACCOUNT</span></h1>
                    <Login onLogin={handleLogin} />
                  </>
                )
              }
            />
          <Route path="/dashboard" element={<Dashboard onLogout={handleLogout} />} />
          <Route path="/call-for-help" element={<CallforHelp />} />
          <Route path="/weather-update" element={<WeatherUpdate />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/admin" element={<AdminRegister />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
