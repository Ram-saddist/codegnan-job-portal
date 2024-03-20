import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

export default function StudentLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setUsernameError('');
    setPasswordError('');

    // Validation
    let isValid = true;

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!username || !emailPattern.test(username)) {
      setUsernameError('Please enter a valid email address.');
      isValid = false;
    }

    // Password validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!password || !passwordPattern.test(password)) {
      setPasswordError('Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least six characters long.');
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    try {
      const response = await axios.post('/api/v1/studentlogin', { username, password });
      console.log("response from studentlogin", response.data);
      if (response.status === 200) {
        localStorage.setItem("userType", response.data.userType);
        localStorage.setItem("student_id", response.data.student_id);
        navigate('/');
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h1 style={{ color: "black" }}>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username or email address</label>
          <input
            type="text" required
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
          <Link style={{ fontWeight: "bold" }} to="/signup">Signup Here</Link>        
      </div>
    </div>
  );
}
