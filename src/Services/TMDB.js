// here all call from TMDB api located.
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// etmake esay api request
const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
const page = 1;

// /movie/popular?api_key=API_KEY_HERE&language=en-US&page=1

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    //* Get Movies by {Type}
    getMovies: builder.query({
      query: () => `movie/popular?page=${page}&api_key=${tmdbApiKey}`,
    }),
  }),
});

export const { useGetMoviesQuery } = tmdbApi;
