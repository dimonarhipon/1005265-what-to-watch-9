import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {promoFilmProcess} from './promo-film-process/promo-film-process';
import {filmsProcess} from './films-process/films-process';
import {genreProcess} from './genre-process/genre-process';
import {userProcess} from './user-process/user-process';
import { commentsProcess } from './comments-process/comments-process';
import { favoriteProcess } from './favorite-process/favorite-process';

export const rootReducer = combineReducers({
  [NameSpace.Promo]: promoFilmProcess.reducer,
  [NameSpace.Films]: filmsProcess.reducer,
  [NameSpace.Favorite]: favoriteProcess.reducer,
  [NameSpace.Genre]: genreProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Comments]: commentsProcess.reducer,
});
