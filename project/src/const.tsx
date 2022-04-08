import { dataFilms, dataFilm } from './types/data';

export const MAX_COUNT_FILMS = 8;

export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyList = '/mylist',
  Films = '/films',
  Id = ':id',
  Review = '/review',
  Player = '/player',
  Error = '*',
}

export enum APIRoute {
  Films = '/films',
  FilmPromo = '/promo',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
  Similar = '/similar',
  Comments = '/comments',
}

export enum TabNames {
  Overview = 'overview',
  Details = 'details',
  Reviews = 'reviews',
}

export enum Genres {
  AllGenres = 'All genres',
  Fantasy = 'Fantasy',
}

export enum Rating {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum HttpCode {
  BadRequest = 400,
  Unautorized = 401,
  NotFound = 404,
}

export enum NameSpace {
  Genre = 'GENRE',
  User = 'USER',
  Films = 'FILMS',
  Promo = 'PROMO',
  Comments = 'COMMENTS',
  Favorite = 'FAVORITE',
}

export type AuthData = {
  email: string;
  password: string;
};

export type UserData = {
  id: number;
  email: string;
  token: string;
};

export type CommentData = {
  id: string,
  rating: number,
  comment: string,
}

export type FavoriteData = {
  id: string,
  status: number,
}

export type ErrorType = unknown;

export type FilmsProcess = {
  films: dataFilms,
  isDataLoaded: boolean,
  film: dataFilm | null,
  similarFilms: dataFilms,
  error: string,
}

export type FavoriteProcess = {
  favorite: dataFilms,
  isDataLoaded: boolean,
  error: string,
}

export type PromoFilmProcess = {
  promoFilm: dataFilm | null,
}

export type GenreProcess = {
  filteredFilms: dataFilms,
  genreFilms: string,
  error: string,
};

export type CommentsProcess = {
  comments: [],
  isDataLoaded: boolean,
  commentPostStatus: string,
  error: string,
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  user: {
    avatarUrl: string,
    email: string,
    id: number,
    name: string,
    token: string,
  }
};

export enum CommentPostStatus {
  Unknown = 'UNKNOWN',
  Success = 'SUCCESS',
  Error = 'ERROR',
}
