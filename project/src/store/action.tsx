import { createAction } from '@reduxjs/toolkit';


export const changeGenre =
  createAction<{ genre: string }>('genre/changeGenre');

export const getGenreFilms =
  createAction<{ genre: string }>('genreGetGenreFilms');
