import {
  AppBar,
  Toolbar,
  Button
} from "@mui/material";
//import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import './Navigation.css' 

//import isAuth, { userType } from "../lib/isAuth";


// const useStyles = styled((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

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
          className="logo" // Add a class for styling purposes if needed
          onClick={() => handleClick("/")} // Add onClick event handler if necessary
        />
        <div>
            <Button color="inherit" id="nav-link" onClick={() => handleClick("/login")}>
              Login
            </Button>
            <Button color="inherit" id="nav-link" onClick={() => handleClick("/signup")}>
              Signup
            </Button>
          </div>
        {/* {isAuth() ? (
          userType() === "recruiter" ? (
            <>
              <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => handleClick("/addjob")}>
                Add Jobs
              </Button>
              <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                My Jobs
              </Button>
              <Button color="inherit" onClick={() => handleClick("/employees")}>
                Employees
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => handleClick("/applications")}
              >
                Applications
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          )
        ) : (
          <>
            <Button color="inherit" onClick={() => handleClick("/login")}>
              Login
            </Button>
            <Button color="inherit" onClick={() => handleClick("/signup")}>
              Signup
            </Button>
          </>
        )} */}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
