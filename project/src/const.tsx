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
  Drama = 'Drama',
  Fantastic = 'Fantastic',
  History = 'History',
  Biography = 'Biography',
  Thriller = 'Thriller',
  Horror = 'Horror',
  Western = 'Western',
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

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
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

export enum NameSpace {
  genre = 'GENRE',
  user = 'USER',
  films = 'FILMS',
  promo = 'PROMO',
  comments = 'COMMENTS',
  favorite = 'FAVORITE',
}

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
  error: string,
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
};
