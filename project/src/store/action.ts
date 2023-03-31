import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, SortType } from '../consts';
import { Offers } from '../types/cards';

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
