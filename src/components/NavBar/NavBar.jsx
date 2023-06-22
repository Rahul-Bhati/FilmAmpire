import React from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import useStyles from './styles';

function NavBar() {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const isAuthenticated = true;
  // console.log('navBar');
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        {isMobile && (
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            sty
            onClick={() => {}}
            aria-label="menu"
          >
            <Menu />
          </IconButton>
        )}
        <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        {!isMobile && 'Search...'}
        <div>
          {isAuthenticated ? (
            <Button color="inherit" onClick={() => {}}>
              Login &nbsp; <AccountCircle />
            </Button>
          ) : (
            <Button
              color="inherit"
              component={Link}
              to="/profile/:id"
              className={classes.linkButton}
              onClick={() => {}}
            >
              {!isMobile && <>My Movies &nbsp;</>}
              <Avatar
                alt="Profile Picture"
                style={{ width: 30, height: 30 }}
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
              />
            </Button>
          )}
        </div>
        {isMobile && 'Search...'}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
