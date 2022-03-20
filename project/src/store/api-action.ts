import { createAsyncThunk } from '@reduxjs/toolkit';
import {api, store} from './index';
import {loadFilms} from '../store/action';
import { APIRoute } from '../const';
import {dataFilms} from '../types/data';

export const loadFilmsAction = createAsyncThunk(
  'data/loadFilms',
  async () => {
    const {data} = await api.get<dataFilms>(APIRoute.Films);
    store.dispatch(loadFilms(data));
  },
);
