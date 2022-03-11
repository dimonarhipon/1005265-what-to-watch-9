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

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
