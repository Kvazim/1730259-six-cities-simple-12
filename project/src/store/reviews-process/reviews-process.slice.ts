import { createSlice } from '@reduxjs/toolkit';
import { ReviewsData } from '../../types/state';
import { NameSpace, Status } from '../../const';
import { addReviewAction, fetchReviewsAction } from '../api-actions';

const initialState: ReviewsData = {
  reviews: [],
  reviewsLoadingStatus: Status.Idle,
};

export const reviewsData = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.pending, (state) => {
        state.reviewsLoadingStatus = Status.Loading;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.reviewsLoadingStatus = Status.Success;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.reviewsLoadingStatus = Status.Failed;
      })
      .addCase(addReviewAction.pending, (state) => {
        state.reviewsLoadingStatus = Status.Loading;
      })
      .addCase(addReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.reviewsLoadingStatus = Status.Success;
      })
      .addCase(addReviewAction.rejected, (state) => {
        state.reviewsLoadingStatus = Status.Failed;
      });
  },
});
