import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {FavoriteProcess} from '../../const';

const initialState: FavoriteProcess = {
  favorite: [],
  isDataLoaded: false,
};

export const favoriteProcess = createSlice({
  name: NameSpace.Favorite,
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
  },
});

export const {
  loadFavoriteSuccess,
  loadFavoriteRequest,
  postFavoriteSuccess,
  postFavoriteRequest,
} = favoriteProcess.actions;
