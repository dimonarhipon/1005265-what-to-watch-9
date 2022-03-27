import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {FilmsProcess} from '../../const';

const initialState: FilmsProcess = {
  films: [],
  isDataLoaded: false,
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
  },
});

export const {loadFilmsSucces, loadFilmsRequest} = filmsProcess.actions;
