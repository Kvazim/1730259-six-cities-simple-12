export enum AppRoute {
  Root = '/',
  Login = '/login',
  Offer = '/offer/:id',
  PageNotFound = '/404',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const SIMILAR_AD_COUNT = 10;
