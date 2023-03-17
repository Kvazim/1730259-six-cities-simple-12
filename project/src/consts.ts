export enum AppRoute {
  Root = '/',
  Login = '/login',
  Offer = '/offer',
  PageNotFound = '/404',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const placesOption = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export const stars = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly',
];

export const SIMILAR_AD_COUNT = 10;
