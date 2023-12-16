import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { userSelector } from '../../features/auth';

function Profile() {
  const { user } = useSelector(userSelector);
  const favMovie = [];
  console.log(user);

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>My Profile</Typography>
        <Button color="inherit" onClick={logout}>Logout &nbsp; <ExitToApp /></Button>
      </Box>
      {!favMovie.length ? (
        <Typography variant="h5">add your favourite & watchlist movies</Typography>
      ) : (
        <Box>Favourite Movies</Box>
      )}
      {/* <div>Profile - {user.username}</div> */}
    </Box>
  );
}

export default Profile;
