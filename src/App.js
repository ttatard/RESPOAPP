import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './Components/CSS/Respo.css';
import logo from './Components/Images/logo.png';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Dashboard from './Components/Dashboard1';
import WeatherUpdate from './Components/WeatherUpdate';
import Directory from './Components/Directory';
import LandingPage from './Components/LandingPage';
import AdminRegister from './Components/AdminRegister'; // Import your AdminRegister component here
import AdminPage from './Components/AdminPage'; // Import your AdminPage component here
import CallforHelp from './Components/CallforHelp';
import WeatherUpdate1 from './Components/WeatherUpdate1';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/call-for-help" element={<CallforHelp />} />
          <Route path="/weather-update" element={<WeatherUpdate />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/weather-update1" element={<WeatherUpdate1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
