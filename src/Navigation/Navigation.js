import React, { useState } from 'react';
import { AppBar, Toolbar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './Navigation.css';

// Dummy values for isAuth and userType
const isAuth = true; // Set to true if user is authenticated, false otherwise
// Set user type to 'student', 'company', 'bde', or 'default'

const Navigation = (props) => {
  let navigate = useNavigate();
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [showBlur, setShowBlur] = useState(false);
  const userType = localStorage.getItem("userType")
  console.log("usertype from navigation", userType)
  const handleClick = (location) => {
    console.log(location);
    navigate(location);
    setShowNavLinks(false); // Close the navigation menu after clicking a link
    setShowBlur(false); // Close the blur effect
  };

  const handleToggle = () => {
    setShowNavLinks(!showNavLinks);
    setShowBlur(!showBlur);
  };

  const handleClose = () => {
    setShowNavLinks(false);
    setShowBlur(false);
  };

  return (
    <div className={`navigation-container ${showBlur ? 'blur' : ''}`}>
      <AppBar position="fixed" className="navbar" elevation={0}>
        <Toolbar className="tool">
          <img
            src="https://codegnan.com/wp-content/uploads/2024/02/Codegnan%E2%87%94Destination1.png"
            alt="Codegnan Logo"
            className="logo"
            onClick={() => handleClick("/")}
          />
          <div className={`nav-links ${showNavLinks ? 'show' : ''}`}>
            {isAuth ? (
              userType === "student" ? (
                <>
                  
                  {/* <Button color="inherit" id="nav-link" onClick={() => handleClick("/profile")}>
                    Profile
                  </Button> */}
                  <Button color="inherit" id="nav-link" onClick={() => handleClick("/jobslist")}>
                    Jobs List
                  </Button>
                  <Button color="inherit" id="nav-link" onClick={() => handleClick("/studentsapplied")}>
                    Applied Jobs
                  </Button>
                  <Button color="inherit" id="nav-link"  onClick={() => {
                    // Remove userType from localStorage
                    localStorage.removeItem('userType');
                    // Redirect to home page
                    navigate("/");
                  }}>
                    Logout
                  </Button>
                </>
              ) : userType === "company" ? (
                <>
                  {/* <Button color="inherit" id="nav-link" onClick={() => handleClick("/")}>
                    Home
                  </Button> */}
                  <Button color="inherit" id="nav-link" onClick={() => handleClick("/addjob")}>
                    Add Jobs
                  </Button>
                  <Button color="inherit" id="nav-link" onClick={() => handleClick("/myjobs")}>
                    My Jobs
                  </Button>
                  <Button color="inherit" id="nav-link" onClick={() => handleClick("/profile")}>
                    Profile
                  </Button>
                  <Button color="inherit" id="nav-link" onClick={() => {
                    // Remove userType from localStorage
                    localStorage.removeItem('userType');
                    // Redirect to home page
                    navigate("/");
                  }}>
                    Logout
                  </Button>
                </>
              ) : userType === "bde" ? (
                <>
                  <Button color="inherit" id="nav-link" onClick={() => handleClick("/addjob")}>
                    Add Job
                  </Button>
                  <Button color="inherit" id="nav-link" onClick={() => handleClick("/bdedashboard")}>
                    Dashboard
                  </Button>
                  <Button  color="inherit" id="nav-link" onClick={() => {
                    // Remove userType from localStorage
                    localStorage.removeItem('userType');
                    // Redirect to home page
                    navigate("/");
                  }}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  {/* Add buttons for default */}
                  <Button color="inherit" id="nav-link" onClick={() => handleClick("/login/student")}>
                    Login
                  </Button>
                  <Button color="inherit" id="nav-link" onClick={() => handleClick("/signup/student")}>
                    Signup
                  </Button>
                </>
              )
            ) : (
              <>
                <Button color="inherit" id="nav-link" onClick={() => handleClick("/login/student")}>
                  Login
                </Button>
                <Button color="inherit" id="nav-link" onClick={() => handleClick("/signup/student")}>
                  Signup
                </Button>
              </>
            )}
            <span className="close-btn" onClick={handleClose}>X</span>
          </div>
          <button className={`toggler ${showNavLinks ? 'show' : ''}`} onClick={handleToggle}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </Toolbar>
      </AppBar>
      <div className={`blur-bg ${showBlur ? 'show' : ''}`} onClick={handleClose}></div>
    </div>
  );
};

export default Navigation;
