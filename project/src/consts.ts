export enum AppRoute {
  Root = '/',
  Login = '/login',
  Offer = '/offer/',
  PageNotFound = '/404',
}

export enum APIRoute {
  Offers = '/hotels',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const DEFAULT_CITIES = CITIES[0];

export enum SortType {
  Popular = 'Popular',
  LowPrice = 'Price: low to high',
  HightPrice = 'Price: high to low',
  Rating = 'Top rated first'
}

export const DEFAULT_SORT = SortType.Popular;

export const stars = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly',
];

export const LeafletParameters = {
  TILE_LAYER: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};


export const URL_MARKER_DEFAULT =
  '/img/pin.svg';

export const URL_MARKER_CURRENT =
  '/img/pin-active.svg';

export const SIMILAR_AD_COUNT = 10;

export const MAX_IMAGES_OFFER = 6;

export const SIMILAR_AD_OFFERS_COUNT = 3;

export const STAR_NAME = 'rating';

export const BASE_URL = 'https://12.react.pages.academy/six-cities-simple';

export const REQUEST_TIMEOUT = 5000;

export const MIN_VALUE_REVIEW_LENGHT = 50;

export const MAX_VALUE_REVIEW_LENGHT = 300;

export enum NameSpace {
  User = 'USER',
  Offers = 'OFFERS',
}

export enum Status {
  Idle = 'Idle',
  Loading = 'Loading',
  Success = 'Success',
  Failed = 'Failed',
}
