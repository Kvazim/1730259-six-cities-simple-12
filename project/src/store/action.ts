
import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction(
  'location/changeLocation',
  (location: string) => ({payload: location})
);

export const updateOffers = createAction(
  'offers/updateOffers'
);
