// LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Handle login logic here, for example, form submission or API call
    console.log('Logging in:', { email, password });
    // Add your logic for actual login here
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
        <Link to="/" className="signup-link">Sign up here</Link>
      </p>
    </div>
  );
}

export default LoginPage;
