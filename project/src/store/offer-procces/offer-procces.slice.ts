import { createSlice } from '@reduxjs/toolkit';
import { OfferData } from '../../types/state';
import { NameSpace, Status } from '../../consts';
import { fetchOfferIdAction, fetchOffersAction } from '../api-actions';

const initialState: OfferData = {
  offers: [],
  offerLoadingStatus: Status.Idle,
  currentOffer: null,
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
        state.offerLoadingStatus = Status.Loading;
      })
      .addCase(fetchOfferIdAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.offerLoadingStatus = Status.Success;
      })
      .addCase(fetchOfferIdAction.rejected, (state) => {
        state.offerLoadingStatus = Status.Failed;
      });
  },
});
