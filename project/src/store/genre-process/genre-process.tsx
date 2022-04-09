import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {Genres, GenreProcess} from '../../const';
import { dataFilm } from '../../types/data';

const initialState: GenreProcess = {
  filteredFilms: [],
  genreFilms: Genres.AllGenres.toString(),
};

export const genreProcess = createSlice({
  name: NameSpace.Genre,
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
  },
});

export const {changeGenre, getGenreFilms} = genreProcess.actions;
