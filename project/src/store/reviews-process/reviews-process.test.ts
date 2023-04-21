import { Status } from '../../consts';
import { makeFackeReviews } from '../../mocks/mocks';
import { ReviewsData } from '../../types/state';
import { addReviewAction, fetchReviewsAction } from '../api-actions';
import { reviewsData } from './reviews-process.slice';

const fakeReviewsData = makeFackeReviews();
const getModifiedState = (state: ReviewsData) => JSON.parse(JSON.stringify(state)) as ReviewsData;

describe('Reducer: reviews', () => {
  let initialState: ReviewsData;

  beforeEach(() => {
    initialState = {
      reviews: [],
      reviewsLoadingStatus: Status.Idle,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(reviewsData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(initialState);
  });

  describe('reviewsAction', () => {
    it('should update reviewsLoadingStatus by pending', () => {
      const modifiedState = getModifiedState(initialState);
      modifiedState.reviewsLoadingStatus = Status.Loading;
      expect(reviewsData.reducer(initialState, {type: fetchReviewsAction.pending.type}))
        .toEqual(modifiedState);
    });

    it('should update reviewsAction by load reviews', () => {
      const modifiedState = getModifiedState(initialState);
      modifiedState.reviews = fakeReviewsData;
      modifiedState.reviewsLoadingStatus = Status.Success;
      expect(reviewsData.reducer(initialState, {type: fetchReviewsAction.fulfilled.type, payload: fakeReviewsData}))
        .toEqual(modifiedState);
    });

    it('should update reviewsLoadingStatus by rejected', () => {
      const modifiedState = getModifiedState(initialState);
      modifiedState.reviewsLoadingStatus = Status.Failed;
      expect(reviewsData.reducer(initialState, {type: fetchReviewsAction.rejected.type}))
        .toEqual(modifiedState);
    });
  });

  describe('addReviewAction', () => {
    it('should update reviews after send review', () => {
      const modifiedState = getModifiedState(initialState);
      modifiedState.reviewsLoadingStatus = Status.Loading;
      expect(reviewsData.reducer(initialState, {type: addReviewAction.pending.type}))
        .toEqual(modifiedState);

      modifiedState.reviews = fakeReviewsData;
      modifiedState.reviewsLoadingStatus = Status.Success;
      expect(reviewsData.reducer(initialState, {type: addReviewAction.fulfilled.type, payload: fakeReviewsData}))
        .toEqual(modifiedState);

      modifiedState.reviews = [];
      modifiedState.reviewsLoadingStatus = Status.Failed;
      expect(reviewsData.reducer(initialState, {type: addReviewAction.rejected.type}))
        .toEqual(modifiedState);
    });
  });
});
