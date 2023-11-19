import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUpPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = () => {
    // Handle sign-up logic here, for example, form submission or API call
    console.log('Signing up:', { firstName, lastName, number, email, password });
    // Add your logic for actual sign-up here

    // Show success message after sign-up
    setShowSuccessMessage(true);
  };

  const handleProceed = () => {
    // Redirect to the login page
    window.location.href = '/login';
  };

  return (
    <div className="form-container">
      {showSuccessMessage ? (
        <div className="success-message">
          <p>You have successfully registered! You may proceed to login to your account</p>
          <button onClick={handleProceed}>Proceed</button>
        </div>
      ) : (
        <>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
              placeholder="Enter your first name"
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
              placeholder="Enter your last name"
            />
          </div>
          <div className="form-group">
            <label>Number:</label>
            <input
              type="text"
              value={number}
              onChange={handleNumberChange}
              placeholder="Enter your number"
            />
          </div>
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
          <button onClick={handleSignUp}>Sign Up</button>
          <p>
            Already have an account?{' '}
            <Link to="/login" className="login-link">
              Login here
            </Link>
          </p>
        </>
      )}
    </div>
  );
}

export default SignUpPage;
