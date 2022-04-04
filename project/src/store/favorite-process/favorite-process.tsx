import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {FavoriteProcess} from '../../const';

const initialState: FavoriteProcess = {
  favorite: [],
  isDataLoaded: false,
  error: '',
};
/* eslint-disable no-console */
export const favoriteProcess = createSlice({
  name: NameSpace.favorite,
  initialState,
  reducers: {
    loadFavoriteSuccess: (state, action) => {
      state.favorite = action.payload;
      state.isDataLoaded = false;
    },
    loadFavoriteRequest: (state) => {
      state.isDataLoaded = true;
    },

    postFavoriteSuccess: (state) => {
      state.isDataLoaded = false;
    },
    postFavoriteRequest: (state) => {
      state.isDataLoaded = true;
    },

    loadError: (state, action) => {
      state.error = action.payload;
      state.isDataLoaded = false;
      console.log(state);
    },
  },
});

export const {
  loadFavoriteSuccess,
  loadFavoriteRequest,
  postFavoriteSuccess,
  postFavoriteRequest,
  loadError,
} = favoriteProcess.actions;
