import { createAction } from '@reduxjs/toolkit';
import {AppRoute} from '../const';

export const redirectToRoute =
  createAction<AppRoute>('data/redirectToRoute');

export const setError =
  createAction<string>('data/setError');
