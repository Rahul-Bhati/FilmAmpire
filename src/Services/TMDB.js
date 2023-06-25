// here all call from TMDB api located.
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// etmake esay api request
const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
// const page = 1;

// /movie/popular?api_key=API_KEY_HERE&language=en-US&page=1

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    //* Get Genres
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),

    //* Get Movies by {Type}
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page }) => {
        //* Get movies by Search
        // if (searchQuery) {
        //   return `movie/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
        // }

        //* Get movies by category
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
        }

        //* Get Movies by Genre
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
        }

        //* Get popular Movie
        return `/movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;
