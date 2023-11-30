import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false); // State to track login errors
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setLoginError(false); // Reset error state when email changes
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setLoginError(false); // Reset error state when password changes
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/user/getAllUsers');
      if (response.ok) {
        const users = await response.json();
        const user = users.find(
          (u) => u.eMail === email && u.pWord === password
        );
        if (user) {
          // If login successful, proceed to dashboard
          onLogin();
          navigate('/dashboard');
        } else {
          // Handle invalid credentials
          setLoginError(true); // Set login error state to display the prompt
        }
      } else {
        // Handle API error
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle login error
    }
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
      {loginError && <p style={{ color: 'red' }}>Incorrect email or password. Please try again.</p>}
      <button onClick={handleLogin}>Login</button>
      <br></br>
      <br></br>
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