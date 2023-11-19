// LoginPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Perform login logic here (e.g., API call or validation)
    // For demo, assuming successful login
    console.log('Login successful:', { email, password });
    
    // Call the onLogin function passed from App.js to update isLoggedIn state
    onLogin();
    
    // Redirect to the dashboard upon successful login
    navigate('/dashboard'); // Use navigate instead of history.push
  };

  return (
    <div className="form-container">
      <div className="form-group">
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your Password"
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      <p>
        Do not have an account?{' '}
        <Link to="/" className="signup-link">
          Sign up here
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;
