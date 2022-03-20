import { createReducer } from '@reduxjs/toolkit';
import {Genres} from '../const';
import {changeGenre, getGenreFilms, loadFilms, requireAuthorization} from './action';
import { AuthorizationStatus } from '../const';
import {dataFilms} from '../types/data';

type InitialState = {
  genreFilms: string,
  films: dataFilms,
  filteredFilms: dataFilms,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
};

const initialState: InitialState = {
  genreFilms: Genres.AllGenres.toString(),
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
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
));

export {reducer};
