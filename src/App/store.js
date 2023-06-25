import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';

import { tmdbApi } from '../Services/TMDB';
import genreOrCategoryReducer from '../features/currentGenreOrCategry';
import userReducer from '../features/auth';

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),

});
