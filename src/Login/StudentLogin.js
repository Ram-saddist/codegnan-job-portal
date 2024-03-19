import React, { useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

export default function StudentLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  useEffect(() => {
    // Check if user is already logged in using stored token/user identifier
    //const isLoggedIn = localStorage.getItem('isLoggedIn');
    //console.log("studentlogin isloggedin",isLoggedIn)
    // if (isLoggedIn) {
    //   navigate('/');
    // }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/v1/studentlogin', { username, password });
      console.log("response from studnetlogin",response.data)
      if (response.status === 200) {
        // Store user login status in localStorage
        //localStorage.setItem('isLoggedIn', true);
        localStorage.setItem("userType",response.data.userType)
        localStorage.setItem("student_id",response.data.student_id)
        const s= localStorage.getItem("student_id")
        console.log("sssssssssssss",s);
        navigate('/');
      } else {
        // Handle unsuccessful login
        alert("Invalid credentials");
        return false;
      }
    }  catch (error) {
      // handle error
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
          <Link style={{ fontWeight: "bold" }} to="/signup">Signup Here</Link>        
      </div>

    </div>
  );
}