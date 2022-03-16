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
