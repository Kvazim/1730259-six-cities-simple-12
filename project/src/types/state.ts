import { AuthorizationStatus } from '../consts.js';
import {store} from '../store/index.js';
import { Offers, OfferId } from './cards.js';
import { UserData } from './user-data.js';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
};

export type OfferProcess = {
  offers: Offers;
  offerId: OfferId;
  offerLoadingStatus: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
