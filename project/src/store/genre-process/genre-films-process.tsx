import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {Genres, GenreProcess} from '../../const';
import { dataFilm } from '../../types/data';

const initialState: GenreProcess = {
  filteredFilms: [],
  genreFilms: Genres.AllGenres.toString(),
  error: '',
};

export const genreProcess = createSlice({
  name: NameSpace.genre,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.genreFilms = action.payload;
    },
    getGenreFilms: (state, action) => {
      state.filteredFilms = state.genreFilms === Genres.AllGenres
        ? action.payload
        : action.payload.filter((item: dataFilm) => item.genre === state.genreFilms);
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {changeGenre, setError, getGenreFilms} = genreProcess.actions;
