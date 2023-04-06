import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSort, loadOffers, requireAuthorization, setError, setDataLoadingStatus, getUserData, loadOfferId, loadReviews, loadNearOffers, setReviewLoading, setCurrentOfferLoadingStatus } from './action';
import { AuthorizationStatus, DEFAULT_CITIES, DEFAULT_SORT } from '../consts';
import { Offer, Offers } from '../types/cards';
import { SortType } from '../consts';
import { UserData } from '../types/user-data';
import { Reviews } from '../types/reviews';

type InitialState = {
  city: string;
  offers: Offers;
  sortType: SortType;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isDataLoading: boolean;
  isCurrentOfferLoadingStatus: boolean;
  userData: UserData | null;
  offerId: Offer | null;
  reviews: Reviews;
  nearOffers: Offers;
  setReviewUserLoading: boolean;
};

const initialState: InitialState = {
  city: DEFAULT_CITIES,
  offers: [],
  sortType: DEFAULT_SORT,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isDataLoading: false,
  isCurrentOfferLoadingStatus: true,
  userData: null,
  offerId: null,
  reviews: [],
  nearOffers: [],
  setReviewUserLoading: false,
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
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
    .addCase(getUserData, (state, action) => {
      state.userData = action.payload;
    });
});

export { reducer };
