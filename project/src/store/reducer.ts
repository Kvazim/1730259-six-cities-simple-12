import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSort, loadOffers, requireAuthorization } from './action';
import { AuthorizationStatus, DEFAULT_CITIES, DEFAULT_SORT } from '../consts';
import { Offers } from '../types/cards';
import { SortType } from '../consts';

type InitialState = {
  city: string;
  offers: Offers;
  sortType: SortType;
  authorizationStatus: AuthorizationStatus;
};

const initialState: InitialState = {
  city: DEFAULT_CITIES,
  offers: [],
  sortType: DEFAULT_SORT,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
