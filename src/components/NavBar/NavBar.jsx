import React, { useEffect } from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { Search, Sidebar } from '../index';
import useStyles from './styles';

import { fetchToken, createSessionId, moviesApi } from '../../utils';
import { setUser, userSelector } from '../../features/auth';

function NavBar() {
  const { isAuthenticated, user } = useSelector(userSelector);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const dispatch = useDispatch();

  // console.log(user);

  const token = localStorage.getItem('request_token');
  const sessionIdFromLocalStorage = localStorage.getItem('session_id');

  useEffect(() => {
    const loginUser = async () => {
      // console.log(`${token} ${localStorage.getItem('session_id')}`);
      if (token) {
        if (sessionIdFromLocalStorage) {
          // console.log(1);
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionIdFromLocalStorage}`,
          );

          dispatch(setUser(userData));
        } else {
          // console.log(2);
          const sessionId = await createSessionId();
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionId}`,
          );

          dispatch(setUser(userData));
        }
      }
    };
    loginUser();
  }, [token]);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              sty
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              aria-label="menu"
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={fetchToken}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/${user.id}`}
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
          {isMobile && <Search />}
        </Toolbar>
      </AppBar>
      <div>
        <div>
          <nav className={classes.drawer}>
            {isMobile ? (
              <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
                classes={{ paper: classes.drawerPaper }}
                ModalProps={{ keepMounted: true }}
              >
                <Sidebar setMobileOpen={setMobileOpen} />
              </Drawer>
            ) : (
              <Drawer
                classes={{ paper: classes.drawerPaper }}
                variant="permanent"
                open
              >
                <Sidebar setMobileOpen={setMobileOpen} />
              </Drawer>
            )}
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavBar;
