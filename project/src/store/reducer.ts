import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  changeSort,
  loadOffers,
  setDataLoadingStatus,
  loadOfferId,
  loadReviews,
  loadNearOffers,
  setReviewLoading,
  setCurrentOfferLoadingStatus,
  setReviewStatus
} from './action';
import { DEFAULT_CITIES, DEFAULT_SORT } from '../consts';
import { Offer, Offers } from '../types/cards';
import { SortType } from '../consts';
import { UserData } from '../types/user-data';
import { Reviews } from '../types/reviews';

type InitialState = {
  city: string;
  offers: Offers;
  sortType: SortType;
  isDataLoading: boolean;
  isCurrentOfferLoadingStatus: boolean;
  userData: UserData | null;
  offerId: Offer | null;
  reviews: Reviews;
  nearOffers: Offers;
  setReviewUserLoading: boolean;
  setReviewStatus: string;
};

const initialState: InitialState = {
  city: DEFAULT_CITIES,
  offers: [],
  sortType: DEFAULT_SORT,
  isDataLoading: false,
  isCurrentOfferLoadingStatus: true,
  userData: null,
  offerId: null,
  reviews: [],
  nearOffers: [],
  setReviewUserLoading: false,
  setReviewStatus: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOfferId, (state, action) => {
      state.offerId = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(setCurrentOfferLoadingStatus, (state, action) => {
      state.isCurrentOfferLoadingStatus = action.payload;
    })
    .addCase(setReviewLoading, (state, action) => {
      state.setReviewUserLoading = action.payload;
    })
    .addCase(setReviewStatus, (state, action) => {
      state.setReviewStatus = action.payload;
    });
});

export { reducer };
