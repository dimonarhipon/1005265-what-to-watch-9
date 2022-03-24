import { createReducer } from '@reduxjs/toolkit';
import {Genres} from '../const';
import {changeGenre, getGenreFilms, loadFilmsRequest, loadFilmsSucces, loadPromoFilm, requireAuthorization} from './action';
import { AuthorizationStatus } from '../const';
import {dataFilm, dataFilms} from '../types/data';

type InitialState = {
  genreFilms: string,
  promoFilm: dataFilm | null,
  films: dataFilms,
  filteredFilms: dataFilms,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
};

const initialState: InitialState = {
  genreFilms: Genres.AllGenres.toString(),
  promoFilm: null,
  films: [],
  filteredFilms: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
};

const reducer = createReducer(initialState, (bundler) => (
  bundler
    .addCase(changeGenre, (state, action) => {
      const {genre} = action.payload;
      state.genreFilms = genre;
    })
    .addCase(getGenreFilms, (state, action) => {
      const {genre} = action.payload;
      state.filteredFilms = genre === Genres.AllGenres
        ? state.films
        : state.films.filter((film) => film.genre === genre);
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(loadFilmsSucces, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = false;
    })
    .addCase(loadFilmsRequest, (state) => {
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
));

export {reducer};
