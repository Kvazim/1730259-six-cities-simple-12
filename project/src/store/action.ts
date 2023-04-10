import { createAction } from '@reduxjs/toolkit';
import { SortType, AppRoute } from '../consts';
import { Offers } from '../types/cards';
import { Reviews } from '../types/reviews';

export const changeCity = createAction(
  'location/changeLocation',
  (location: string) => ({ payload: location })
);

export const changeSort = createAction(
  'offers/changeSort',
  (sort: SortType) => ({ payload: sort })
);

export const loadReviews = createAction<Reviews>(
  'data/loadReviews'
);

export const setCurrentOfferLoadingStatus = createAction<boolean>(
  'data/isCurrenOffer'
);

export const redirectToRoute = createAction<AppRoute>(
  'app/redirectToRoute'
);

export const setReviewLoading = createAction<boolean>(
  'data/setUserReview'
);

export const setReview = createAction<Reviews>(
  'data/setNewReview'
);

export const setReviewStatus = createAction<string>(
  'data/setNewReviewStatus'
);



export const loadNearOffers = createAction<Offers>(
  'data/loadNearOffers'
);
