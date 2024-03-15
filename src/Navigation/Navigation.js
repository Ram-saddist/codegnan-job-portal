import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'fixed',
  zIndex: theme.zIndex.drawer + 1,
}));

export default function Navigation() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        {isMobile && (
          <IconButton
            edge="start"
            sx={{ mr: 2 }}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button color="inherit">Home</Button>
        </Link>
        <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button color="inherit">Signup</Button>
        </Link>
        <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button color="inherit">Login</Button>
        </Link>
      </Toolbar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
      >
        <div
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            <ListItem button component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/signup">
              <ListItemText primary="Signup" />
            </ListItem>
            <ListItem button component={Link} to="/login">
              <ListItemText primary="Login" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </StyledAppBar>
  );
}
