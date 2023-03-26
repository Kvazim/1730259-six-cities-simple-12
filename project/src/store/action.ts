import {createAction} from '@reduxjs/toolkit';
import { SortType } from '../consts';

export const changeCity = createAction(
  'location/changeLocation',
  (location: string) => ({payload: location})
);

export const updateOffers = createAction(
  'offers/updateOffers'
);

export const changeSort = createAction(
  'offers/changeSort',
  (sort: SortType) => ({payload: sort})
);
