export const MAX_COUNT_FILMS = 8;

export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyList = '/mylist',
  Films = '/films',
  Id = ':id',
  Review = ':id/review',
  Player = '/player/:id',
}

export enum APIRoute {
  Films = '/films',
  FilmPromo = '/promo',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
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

export type ErrorType = unknown;
