import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {PromoFilmProcess} from '../../const';

const initialState: PromoFilmProcess = {
  promoFilm: null,
};

export const promoFilmProcess = createSlice({
  name: NameSpace.promo,
  initialState,
  reducers: {
    loadPromoFilm: (state, action) => {
      state.promoFilm = action.payload;
    },
  },
});

export const {loadPromoFilm} = promoFilmProcess.actions;
