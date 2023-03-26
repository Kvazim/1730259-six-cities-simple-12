import { createReducer } from '@reduxjs/toolkit';
import { changeCity, updateOffers, changeSort } from './action';
import { DEFAULT_CITIES, DEFAULT_SORT } from '../consts';
import { offers } from '../mocks/offers';
import { Offers } from '../types/cards';
import { SortType } from '../consts';

type InitialState = {
  city: string;
  offers: Offers;
  sortType: SortType;
};

const initialState: InitialState = {
  city: DEFAULT_CITIES,
  offers: offers,
  sortType: DEFAULT_SORT,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(updateOffers, (state) => {
      state.offers = offers;
    })
    .addCase(changeSort, (state, action) => {
      state.sortType = action.payload;
    });
});

export {reducer};
