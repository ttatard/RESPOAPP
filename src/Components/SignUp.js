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

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:8080/user/insertUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fName: firstName,
          lName: lastName,
          pNum: number,
          eMail: email,
          pWord: password
        })
      });

      if (response.ok) {
        setShowSuccessMessage(true);
      } else {
        // Handle signup failure, show error message, etc.
      }
    } catch (error) {
      console.error('Error during signup:', error);
      // Handle signup error, show error message, etc.
    }
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
          <br></br>
          <br></br>
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
