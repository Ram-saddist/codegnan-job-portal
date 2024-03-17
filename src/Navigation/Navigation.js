import React from 'react';
import { AppBar, Toolbar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './Navigation.css';

// Dummy values for isAuth and userType
const isAuth = true; // Set to true if user is authenticated, false otherwise
const userType = 'student'; // Set user type to 'student', 'company', 'bde', or 'default'

const Navigation = (props) => {
  let navigate = useNavigate();

  const handleClick = (location) => {
    console.log(location);
    navigate(location);
  };

  return (
    <AppBar position="fixed" className="navbar" elevation={0}>
      <Toolbar className="tool">
        <img
          src="https://codegnan.com/wp-content/uploads/2024/02/Codegnan%E2%87%94Destination1.png"
          alt="Codegnan Logo"
          className="logo"
          onClick={() => handleClick("/")}
        />
        <div>
          {isAuth ? (
            userType === "student" ? (
              <>
                <Button color="inherit" id="nav-link" onClick={() => handleClick("/")}>
                  Home
                </Button>
                <Button color="inherit" id="nav-link" onClick={() => handleClick("/profile")}>
                  Profile
                </Button>
                <Button color="inherit" id="nav-link" onClick={() => handleClick("/studentdashboard")}>
                  Jobs List
                </Button>
                <Button color="inherit" id="nav-link" onClick={() => handleClick("/applyjob")}>
                  Apply Job
                </Button>
                <Button color="inherit" id="nav-link" onClick={() => handleClick("/logout")}>
                  Logout
                </Button>
              </>
            ) : userType === "company" ? (
              <>
                <Button color="inherit" id="nav-link" onClick={() => handleClick("/")}>
                  Home
                </Button>
                <Button color="inherit" id="nav-link" onClick={() => handleClick("/addjob")}>
                  Add Jobs
                </Button>
                <Button color="inherit" id="nav-link" onClick={() => handleClick("/myjobs")}>
                  My Jobs
                </Button>
                <Button color="inherit" id="nav-link" onClick={() => handleClick("/profile")}>
                  Profile
                </Button>
                <Button color="inherit" id="nav-link" onClick={() => handleClick("/logout")}>
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
                <Button color="inherit" id="nav-link" onClick={() => handleClick("/logout")}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                {/* Add buttons for default */}
                <Button color="inherit" id="nav-link" onClick={() => handleClick("/login")}>
                  Login
                </Button>
                <Button color="inherit" id="nav-link" onClick={() => handleClick("/signup")}>
                  Signup
                </Button>
              </>
            )
          ) : (
            <>
              <Button color="inherit" id="nav-link" onClick={() => handleClick("/login")}>
                Login
              </Button>
              <Button color="inherit" id="nav-link" onClick={() => handleClick("/signup")}>
                Signup
              </Button>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
