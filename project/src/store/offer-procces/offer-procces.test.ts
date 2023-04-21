import { Status } from '../../consts';
import { makeFackeOfferData, makeFackeOffersData } from '../../mocks/mocks';
import { OfferData } from '../../types/state';
import { fetchNearOffersAction, fetchOfferIdAction, fetchOffersAction } from '../api-actions';
import { offerData } from './offer-procces.slice';

const fackeOffersData = makeFackeOffersData();
const fackeOfferData = makeFackeOfferData();
const getModifiedState = (state: OfferData) => JSON.parse(JSON.stringify(state)) as OfferData;

describe('Reducer: offers', () => {
  let initialState: OfferData;

  beforeEach(() => {
    initialState = {
      offers: [],
      offerLoadingStatus: Status.Idle,
      currentOffer: null,
      statusCurrentOffer: Status.Idle,
      nearOffers: [],
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(offerData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(initialState);
  });

  describe('loadOffersAction', () => {
    it('should update offersAction by pending offers', () => {
      const modifiedState = getModifiedState(initialState);
      modifiedState.offerLoadingStatus = Status.Loading;
      expect(offerData.reducer(initialState, {type: fetchOffersAction.pending.type}))
        .toEqual(modifiedState);
    });

    it('should update offersAction by load offers', () => {
      const modifiedState = getModifiedState(initialState);
      modifiedState.offers = fackeOffersData;
      modifiedState.offerLoadingStatus = Status.Success;
      expect(offerData.reducer(initialState, {type: fetchOffersAction.fulfilled.type, payload: fackeOffersData}))
        .toEqual(modifiedState);
    });

    it('should update offersAction by rejected offers', () => {
      const modifiedState = getModifiedState(initialState);
      modifiedState.offerLoadingStatus = Status.Failed;
      expect(offerData.reducer(initialState, {type: fetchOffersAction.rejected.type}))
        .toEqual(modifiedState);
    });
  });

  describe('loadOfferIdAction', () => {
    it('should update offerIdAction by pending', () => {
      const modifiedState = getModifiedState(initialState);
      modifiedState.statusCurrentOffer = Status.Loading;
      expect(offerData.reducer(initialState, {type: fetchOfferIdAction.pending.type}))
        .toEqual(modifiedState);
    });

    it('should update offerIdActions by load offers', () => {
      const modifiedState = getModifiedState(initialState);
      modifiedState.currentOffer = fackeOfferData;
      modifiedState.statusCurrentOffer = Status.Success;
      expect(offerData.reducer(initialState, {type: fetchOfferIdAction.fulfilled.type, payload: fackeOfferData}))
        .toEqual(modifiedState);
    });

    it('should update offerIdAction by rejected', () => {
      const modifiedState = getModifiedState(initialState);
      modifiedState.statusCurrentOffer = Status.Failed;
      expect(offerData.reducer(initialState, {type: fetchOfferIdAction.rejected.type}))
        .toEqual(modifiedState);
    });
  });

  describe('loadNearOffesAction', () => {
    it('should update NearOffersAction by load offers', () => {
      const modifiedState = getModifiedState(initialState);
      modifiedState.nearOffers = fackeOffersData;
      expect(offerData.reducer(initialState, {type: fetchNearOffersAction.fulfilled.type, payload: fackeOffersData}))
        .toEqual(modifiedState);
    });
  });
});
