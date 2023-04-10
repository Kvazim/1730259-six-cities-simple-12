import { AuthorizationStatus, Status } from '../consts.js';
import {store} from '../store/index.js';
import { Offer, Offers } from './cards.js';
import { UserData } from './user-data.js';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
};

export type OfferData = {
  offers: Offers;
  offerLoadingStatus: Status;
  currentOffer: Offer | null;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
