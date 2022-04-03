import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {promoFilmProcess} from './promo-film-process/promo-film-process';
import {filmsProcess} from './films-process/films-process';
import {genreProcess} from './genre-process/genre-films-process';
import {userProcess} from './user-process/user-process';
import { commentsProcess } from './comments-process/comments-process';
import { favoriteProcess } from './favorite-process/favorite-process';

export const rootReducer = combineReducers({
  [NameSpace.promo]: promoFilmProcess.reducer,
  [NameSpace.films]: filmsProcess.reducer,
  [NameSpace.favorite]: favoriteProcess.reducer,
  [NameSpace.genre]: genreProcess.reducer,
  [NameSpace.user]: userProcess.reducer,
  [NameSpace.comments]: commentsProcess.reducer,
});
