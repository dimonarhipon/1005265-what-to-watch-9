import { AppRoute } from '../const';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {api, store} from './store';
import {redirectToRoute} from './action';
import {getGenreFilms} from './genre-process/genre-process';
import {requireAuthorization, loadDataLogin} from './user-process/user-process';
import {loadFilmsSuccess, loadFilmsRequest, loadFilmSuccess, loadFilmRequest, loadFilmSimilarSuccess, loadFilmSimilarRequest, loadError} from './films-process/films-process';
import {loadFavoriteSuccess, loadFavoriteRequest, postFavoriteRequest, postFavoriteSuccess} from './favorite-process/favorite-process';
import {loadCommentsSuccess, loadCommentsRequest, postCommentSuccess, postCommentRequest, postCommentError} from './comments-process/comments-process';
import {loadPromoFilm} from './promo-film-process/promo-film-process';
import { APIRoute, AuthorizationStatus, AuthData, UserData, CommentData, FavoriteData } from '../const';
import {dataFilm, dataFilms, dataComments} from '../types/data';
import { saveToken, dropToken } from '../services/token';
import errorHandle from '../services/error-handle';

export const loadFilmsAction = createAsyncThunk(
  'data/loadFilms',
  async () => {
    try {
      store.dispatch(loadFilmsRequest());
      const {data} = await api.get<dataFilms>(APIRoute.Films);
      store.dispatch(loadFilmsSuccess(data));
      store.dispatch(getGenreFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const loadFilmAction = createAsyncThunk('data/loadFiml',
  async (filmId: string) => {
    try {
      store.dispatch(loadFilmRequest());
      const {data} = await api.get<dataFilm>(`${APIRoute.Films}/${filmId}`);
      store.dispatch(loadFilmSuccess(data));
    } catch (error) {
      store.dispatch(redirectToRoute(AppRoute.Error));
      store.dispatch(loadError(error));
      errorHandle(error);
    }
  },
);

export const loadFilmSimilarAction = createAsyncThunk('data/loadFimlSimilar',
  async (filmId: string) => {
    try {
      store.dispatch(loadFilmSimilarRequest());
      const {data} = await api.get<dataFilms>(`${APIRoute.Films}/${filmId}${APIRoute.Similar}`);
      store.dispatch(loadFilmSimilarSuccess(data));
    } catch (error) {
      store.dispatch(loadError(error));
      errorHandle(error);
    }
  },
);

export const loadPromoFilmAction = createAsyncThunk('loadPromoFilm',
  async () => {
    try {
      const {data} = await api.get<dataFilm>(APIRoute.FilmPromo);
      store.dispatch(loadPromoFilm(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const loadFavofiteAction = createAsyncThunk('data/loadFavorite',
  async () => {
    try {
      store.dispatch(loadFavoriteRequest());
      const {data} = await api.get<dataFilms>(APIRoute.Favorite);
      store.dispatch(loadFavoriteSuccess(data));
    }
    catch (error) {
      errorHandle(error);
    }
  },
);

export const changeFavorite = createAsyncThunk('data/changeFavorite',
  async ({id, status}: FavoriteData) => {
    try {
      store.dispatch(postFavoriteRequest());
      await api.post<FavoriteData>(`${APIRoute.Favorite}/${id}/${status}`);
      store.dispatch(loadFilmAction(id));
      store.dispatch(loadPromoFilmAction());

      store.dispatch(postFavoriteSuccess());
    } catch(error) {
      errorHandle(error);
    }
  },
);

export const loadCommentsAction = createAsyncThunk('data/loadComments',
  async (filmId: string) => {
    try {
      store.dispatch(loadCommentsRequest());
      const {data} = await api.get<dataComments>(`${APIRoute.Comments}/${filmId}`);
      store.dispatch(loadCommentsSuccess(data));
    } catch (error) {
      store.dispatch(loadError(error));
      errorHandle(error);
    }
  },
);

export const postCommentAction = createAsyncThunk('data/sendComment',
  async ({id, rating, comment}: CommentData) => {
    try {
      store.dispatch(postCommentRequest());
      await api.post<CommentData>(`${APIRoute.Comments}/${id}`, {rating, comment});
      store.dispatch(postCommentSuccess());
    } catch(error) {
      store.dispatch(postCommentError(error));
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk('user/requireAuthorization',
  async () => {
    try {
      const {data} = await api.get<string>(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(loadDataLogin(data));
    } catch(error) {
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      errorHandle(error);
    }
  },
);

export const loginAction = createAsyncThunk('user/login',
  async ({email, password}: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);

      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk('user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);
