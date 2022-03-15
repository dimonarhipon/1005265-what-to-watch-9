import { createReducer } from '@reduxjs/toolkit';
import {Genres, COUNT_FILMS} from '../const';
import {films} from '../mocks/films';
import {changeGenre, getGenreFilms} from './action';

const initialState = {
  genreFilms: Genres.AllGenres.toString(),
  films: films,
};

const reducer = createReducer(initialState, (bundler) => (
  bundler
    .addCase(changeGenre, (state, action) => {
      const {genre} = action.payload;
      state.genreFilms = genre;
    })
    .addCase(getGenreFilms, (state, action) => {
      const {genre} = action.payload;
      state.films = genre === Genres.AllGenres
        ? films.slice(0, COUNT_FILMS)
        : films.filter((film) => film.genre === genre).slice(0, COUNT_FILMS);
    })
));

export {reducer};
