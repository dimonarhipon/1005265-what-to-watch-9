import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {FilmsProcess} from '../../const';

const initialState: FilmsProcess = {
  films: [],
  film: null,
  similarFilms: [],
  isDataLoaded: false,
  error: '',
};

export const filmsProcess = createSlice({
  name: NameSpace.films,
  initialState,
  reducers: {
    loadFilmsSucces: (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = false;
    },
    loadFilmsRequest: (state) => {
      state.isDataLoaded = true;
    },

    loadFilmSimilarSucces: (state, action) => {
      state.similarFilms = action.payload;
      state.isDataLoaded = false;
    },
    loadFilmSimilarRequest: (state) => {
      state.isDataLoaded = true;
    },

    loadFilmSucces: (state, action) => {
      state.film = action.payload;
      state.isDataLoaded = false;
    },
    loadFilmRequest: (state) => {
      state.isDataLoaded = true;
    },

    loadError: (state, action) => {
      state.error = action.payload;
      state.isDataLoaded = false;
    },
  },
});

export const {
  loadFilmsSucces,
  loadFilmsRequest,
  loadFilmSucces,
  loadFilmRequest,
  loadFilmSimilarSucces,
  loadFilmSimilarRequest,
  loadError,
} = filmsProcess.actions;
