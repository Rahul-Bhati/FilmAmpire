import React from 'react';
import { Grid } from '@mui/material';

import useStyles from './Styles';
import { Movie } from '../index';

export default function MovieList({ movies }) {
  const classes = useStyles();
  console.log('movies list');

  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
}
