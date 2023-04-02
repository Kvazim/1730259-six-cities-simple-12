import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, SortType, AppRoute } from '../consts';
import { Offers, Offer } from '../types/cards';
import { UserData } from '../types/user-data';
import { Reviews } from '../types/reviews';

export const changeCity = createAction(
  'location/changeLocation',
  (location: string) => ({ payload: location })
);

export const changeSort = createAction(
  'offers/changeSort',
  (sort: SortType) => ({ payload: sort })
);

export const loadOffers = createAction<Offers>(
  'data/loadOffers'
);

export const loadOfferId = createAction<Offer>(
  'data/loadOfferId'
);

export const loadReviewId = createAction<Reviews>(
  'data/loadReviewId'
);

export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);

export const setError = createAction<string | null>(
  'data/setError'
);

export const setDataLoadingStatus = createAction<boolean>(
  'data/isDataLoading'
);

export const redirectToRoute = createAction<AppRoute>(
  'app/redirectToRoute'
);

export const getUserData = createAction(
  'user/loadUserData',
  (userData: UserData) => ({payload: userData})
);

export const loadNearOffers = createAction<Offers>(
  'data/loadNearOffers'
);
