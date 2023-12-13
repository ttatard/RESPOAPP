import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AdminRegister() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [emptyFieldError, setEmptyFieldError] = useState('');

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
    setPasswordError(''); // Clear password error on input change
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSignUp = () => {
    if (!firstName || !lastName || !number || !email || !password || !gender) {
      setEmptyFieldError('Please fill in all fields');
      return;
    }

    setEmptyFieldError('');

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one special character.'
      );
    } else {
      setPasswordError('');
      setShowConfirmation(true);
    }
  };

  const confirmSignUp = async () => {
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
          pWord: password,
          gender: gender, // Include the gender in the request body
          isAdmin: true // Set isAdmin to true for admin registration
        })
      });

      if (response.ok) {
        setShowSuccessMessage(true);
      } else {
        // Handle signup failure, show error message, etc.
      }
    } catch (error) {
      console.error('Error during admin signup:', error);
      // Handle signup error, show error message, etc.
    } finally {
      setShowConfirmation(false); // Close the confirmation dialog after signup attempt
    }
  };

  const handleProceed = () => {
    // Redirect to the login page
    window.location.href = '/login';
  };

  return (
    <div className="form-container">
      <h1> ADMIN <span className="red-text"> REGISTRATION </span></h1>
        

      {showConfirmation && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to sign up as admin?</p>
          <button onClick={confirmSignUp}>Yes</button>
          <button onClick={() => setShowConfirmation(false)}>No</button>
        </div>
      )}
      {showSuccessMessage ? (
        <div className="success-message">
          <p>You have successfully registered as admin!</p>
          <button onClick={handleProceed}>Proceed to Login</button>
        </div>
      ) : (
        <>
          {emptyFieldError && <p style={{ color: 'red', marginTop: '5px' }}>{emptyFieldError}</p>}
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
            <label>Gender:</label>
            <select className="gender-select" value={gender} onChange={handleGenderChange}>
              <option disabled value="">Select a gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
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
          {passwordError && <p style={{ color: 'red', marginTop: '5px' }}>{passwordError}</p>}
          <button onClick={handleSignUp}>Sign Up as Admin</button>
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

export default AdminRegister;
