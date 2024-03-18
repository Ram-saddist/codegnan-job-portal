import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

export default function CompanyLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      await axios.post('/api/v1/companylogin', { username, password })
        .then((response)=>{
          console.log("response from company login",response.data)
          localStorage.setItem("userType",response.data.userType)
          navigate("/")
        })
      // handle successful login
      
    } catch (error) {
      // handle error
      console.log(error)
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