import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './BDE.css';
import axios from 'axios';

export default function BDELogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { username, password });
      // handle successful login
    } catch (error) {
      // handle error
    }
  };

  return (
    <div className="login-container">
      <h1 style={{ color: "black" }}>BDE Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email address</label>
          <input
            type="email" required
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password" required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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