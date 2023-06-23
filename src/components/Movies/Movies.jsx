import React, { useEffect, useState } from 'react';
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../Services/TMDB';

function Movies() {
  const { data } = useGetMoviesQuery();
  console.log(data);
  return <div>Movies</div>;
}

export default Movies;
