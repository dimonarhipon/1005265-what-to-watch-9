import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, FilmsProcess} from '../../const';

const initialState: FilmsProcess = {
  films: [],
  film: null,
  similarFilms: [],
  isDataLoaded: false,
};

export const filmsProcess = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    loadFilmsSuccess: (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = false;
    },
    loadFilmsRequest: (state) => {
      state.isDataLoaded = true;
    },

    loadFilmSimilarSuccess: (state, action) => {
      state.similarFilms = action.payload;
      state.isDataLoaded = false;
    },
    loadFilmSimilarRequest: (state) => {
      state.isDataLoaded = true;
    },

    loadFilmSuccess: (state, action) => {
      state.film = action.payload;
      state.isDataLoaded = false;
    },
    loadFilmRequest: (state) => {
      state.isDataLoaded = true;
    },
  },
});

export const {
  loadFilmsSuccess,
  loadFilmsRequest,
  loadFilmSuccess,
  loadFilmRequest,
  loadFilmSimilarSuccess,
  loadFilmSimilarRequest,
} = filmsProcess.actions;
