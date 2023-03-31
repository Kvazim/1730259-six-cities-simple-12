import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, SortType, AppRoute } from '../consts';
import { Offers } from '../types/cards';
import { UserData } from '../types/user-data';

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
