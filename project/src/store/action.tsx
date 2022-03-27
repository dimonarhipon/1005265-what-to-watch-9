import { createAction } from '@reduxjs/toolkit';
// import {dataFilm, dataFilms} from '../types/data';


// export const changeGenre =
//   createAction<{ genre: string }>('genre/changeGenre');

// export const getGenreFilms =
//   createAction<{ genre: string }>('genreGetGenreFilms');

// export const loadPromoFilm =
//   createAction<dataFilm>('data/loadPromoFilm');

// export const loadFilmsRequest =
//   createAction('data/loadFilmsRequest');
// export const loadFilmsSucces =
//   createAction<dataFilms>('data/loadFilmsSucces');

export const setError =
  createAction<string>('data/setError');
