import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import {dataFilms} from '../types/data';


export const changeGenre =
  createAction<{ genre: string }>('genre/changeGenre');

export const getGenreFilms =
  createAction<{ genre: string }>('genreGetGenreFilms');

export const loadFilms =
  createAction<dataFilms>('data/loadFilms');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
