import { createSlice } from '@reduxjs/toolkit';
import { OfferData } from '../../types/state';
import { NameSpace, Status } from '../../const';
import { fetchNearOffersAction, fetchOfferIdAction, fetchOffersAction } from '../api-actions';

const initialState: OfferData = {
  offers: [],
  offerLoadingStatus: Status.Idle,
  currentOffer: null,
  statusCurrentOffer: Status.Idle,
  nearOffers: [],
};

export const offerData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.offerLoadingStatus = Status.Loading;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.offerLoadingStatus = Status.Success;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.offerLoadingStatus = Status.Failed;
      })
      .addCase(fetchOfferIdAction.pending, (state) => {
        state.statusCurrentOffer = Status.Loading;
      })
      .addCase(fetchOfferIdAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.statusCurrentOffer = Status.Success;
      })
      .addCase(fetchOfferIdAction.rejected, (state) => {
        state.statusCurrentOffer = Status.Failed;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
      });
  },
});
