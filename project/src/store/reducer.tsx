import { createReducer } from '@reduxjs/toolkit';
import {Genres} from '../const';
import {films} from '../mocks/films';
import {changeGenre, getGenreFilms} from './action';

const initialState = {
  genreFilms: Genres.AllGenres.toString(),
  films: films,
  filteredFilms: films,
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
));

export {reducer};
