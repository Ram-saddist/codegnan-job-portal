import React from 'react';
import { Link,Outlet } from 'react-router-dom';

const Signup = () => {
  return (
    <div style={{marginTop:"10%"}}>
      <div >
        <Link to="student" style={{ marginRight: '10px' }}>Student Signup</Link>
        <Link to="company">Company Signup</Link>
      </div>
      <Outlet />
     
    </div>
  );
};

export default Signup;
