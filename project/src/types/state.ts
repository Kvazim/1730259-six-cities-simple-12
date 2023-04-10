import { AuthorizationStatus, SortType, Status } from '../consts.js';
import {store} from '../store/index.js';
import { Offer, Offers } from './cards.js';
import { Reviews } from './reviews.js';
import { UserData } from './user-data.js';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
};

export type OfferData = {
  offers: Offers;
  offerLoadingStatus: Status;
  currentOffer: Offer | null;
  statusCurrentOffer: Status;
  nearOffers: Offers;
};

export type LocationSortingProcces = {
  city: string;
  sortType: SortType;
}

export type ReviewsData = {
  reviews: Reviews;
  reviewsLoadingStatus: Status;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
