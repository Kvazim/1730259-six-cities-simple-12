import { createReducer } from '@reduxjs/toolkit';
import { changeCity, updateOffers } from './action';
import { DEFAULT_CITIES } from '../consts';
import { offers } from '../mocks/offers';

const initialState = {
  city: DEFAULT_CITIES,
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(updateOffers, (state) => {
      state.offers = offers;
    });
});

export {reducer};
