// App.js
import React from 'react';
import './App.css';
import logo from './logo.png';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <img src={logo} alt="Logo" className="logo" />
          <Routes>
            <Route path="/" element={<h1>CREATE AN <span className="red-text">ACCOUNT</span></h1>} />
            <Route path="/login" element={<h1>LOGIN TO <span className="red-text">ACCOUNT</span></h1>} />
          </Routes>
        </div>
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
