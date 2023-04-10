import { NameSpace, Status } from '../../consts';
import { Offer, Offers } from '../../types/cards';
import { State } from '../../types/state';

export const getOffers = (state: State): Offers => state[NameSpace.Offers].offers;
export const getOfferStatus = (state: State): Status => state[NameSpace.Offers].offerLoadingStatus;
export const getOfferId = (state: State): Offer | null => state[NameSpace.Offers].currentOffer;
export const getStatusOfferId = (state: State): Status => state[NameSpace.Offers].statusCurrentOffer;
export const getNearOfferId = (state: State): Offers => state[NameSpace.Offers].nearOffers;
