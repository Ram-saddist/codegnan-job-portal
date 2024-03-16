import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [activeLink, setActiveLink] = useState('student');
 

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className='signup'>
      <div className="signup-link-button">
        <Link
          className={`link ${activeLink === 'student' ? 'active' : ''}`}
          to="student"
          onClick={() => handleLinkClick('student')}
        >
          Student Signup
        </Link>
        <Link
          className={`link ${activeLink === 'company' ? 'active' : ''}`}
          to="company"
          onClick={() => handleLinkClick('company')}
        >
          Company Signup
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Signup;

// import React from 'react';
// import { Link,Outlet } from 'react-router-dom';
// import './Signup.css'

// const Signup = () => {
//   return (
//     <div className='signup'>
//       <div className="signup-link-button">
//         <Link className='link' to="student">Student Signup</Link>
//         <Link className='link' to="company">Company Signup</Link>
//       </div>
//       <Outlet />
     
//     </div>
//   );
// };

// export default Signup;
