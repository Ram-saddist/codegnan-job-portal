import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BDE.css';
import axios from 'axios';

export default function BDELogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Function to validate email format
  const isValidEmail = (value) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value);
  };

  // Function to validate password format
  const isValidPassword = (value) => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return pattern.test(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setUsernameError('');
    setPasswordError('');
    setError('');

    // Validation
    let isValid = true;

    if (!username) {
      setUsernameError('Please enter your email.');
      isValid = false;
    } else if (!isValidEmail(username)) {
      setUsernameError('Please enter a valid email address.');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Please enter your password.');
      isValid = false;
    } else if (!isValidPassword(password)) {
      setPasswordError('Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least six characters long.');
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    try {
      console.log("try block")
      const response = await axios.post('/api/v1/bdelogin', { username, password });
      console.log("response from bdelogin", response.data);
      alert("Login Successful")
      localStorage.setItem("userType", response.data.userType);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h1 style={{ color: "black" }}>BDE Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email address</label>
          <input
            type="email" required
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password" required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        </div>
        <div className='forgot'>
          <button className="btn">Login</button>
          <Link className='forgot-password'>Forgot password?</Link>
        </div>
      </form>
      <div className='bottom-div'>
          <span style={{ color: "black" }}>Don't have an account?</span>
          <Link style={{ fontWeight: "bold" }} to="/login">Signup Here</Link>        
      </div>
    </div>
  );
}
