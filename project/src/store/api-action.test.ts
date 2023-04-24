import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../services/api';
import {
  addReviewAction,
  checkAuthAction,
  fetchNearOffersAction,
  fetchOfferIdAction,
  fetchOffersAction,
  fetchReviewsAction,
  logOutAction,
  loginAction
} from './api-actions';
import { State } from '../types/state';
import { APIRoute } from '../const';
import {
  makeFackeAuthUserData,
  makeFackeOfferData,
  makeFackeOffersData,
  makeFackeReviews,
  makeFackeUserData,
  makeFakeId,
  makeFakeNewReview
} from '../mocks/mocks';
import { redirectToRoute } from './action';

describe('Async action', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action<string>,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  describe('Async auth action', () => {
    it('should authorization status is «auth» when server return 200', async () => {
      const fakeStore = mockStore();

      mockAPI
        .onGet(APIRoute.Login)
        .reply(200, []);

      expect(fakeStore.getActions()).toEqual([]);

      await fakeStore.dispatch(checkAuthAction());

      const actions = fakeStore.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.fulfilled.type
      ]);
    });

    it('should dispatch loginAction when POST /login', async () => {
      const fakeStore = mockStore();
      Storage.prototype.setItem = jest.fn();
      const fakeAutorizationUserData = makeFackeAuthUserData();
      const fakeToken = makeFackeUserData();

      mockAPI
        .onPost(APIRoute.Login)
        .reply(200, { token: fakeToken.token });

      await fakeStore.dispatch(loginAction(fakeAutorizationUserData));

      const actions = fakeStore.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        loginAction.pending.type,
        redirectToRoute.type,
        loginAction.fulfilled.type,
      ]);

      expect(Storage.prototype.setItem).toBeCalledTimes(1);
      expect(Storage.prototype.setItem).toBeCalledWith('authToken', fakeToken.token);
    });

    it('should dispatch Logout when Delete /logout', async () => {
      const fakeStore = mockStore();
      Storage.prototype.removeItem = jest.fn();

      mockAPI
        .onDelete(APIRoute.Logout)
        .reply(204);

      await fakeStore.dispatch(logOutAction());

      const actions = fakeStore.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        logOutAction.pending.type,
        logOutAction.fulfilled.type
      ]);

      expect(Storage.prototype.removeItem).toBeCalledTimes(1);
      expect(Storage.prototype.removeItem).toBeCalledWith('authToken');
    });
  });

  describe('Async offer action', () => {
    it('responds with a list of offers from hosts if response 200', async () => {
      const fakeStore = mockStore();
      const fakeOffersData = makeFackeOffersData();

      mockAPI
        .onGet(APIRoute.Offers)
        .reply(200, fakeOffersData);

      await fakeStore.dispatch(fetchOffersAction());
      const actions = fakeStore.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.fulfilled.type
      ]);
    });

    it('responds with a list of offers from hosts if response 404', async () => {
      const fakeStore = mockStore();

      mockAPI
        .onGet(APIRoute.Offers)
        .reply(404);

      await fakeStore.dispatch(fetchOffersAction());
      const actions = fakeStore.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.rejected.type
      ]);
    });

    it('should dispatch fetchOfferIdAction return 200', async () => {
      const fakeStore = mockStore();
      const fakeOfferData = makeFackeOfferData();
      const fakeId = makeFakeId();
      const url = `${APIRoute.Offers}/${fakeId}`;

      mockAPI
        .onGet(url)
        .reply(200, fakeOfferData);

      await fakeStore.dispatch(fetchOfferIdAction(fakeId));
      const actions = fakeStore.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchOfferIdAction.pending.type,
        fetchOfferIdAction.fulfilled.type
      ]);
    });

    it('should dispatch fetchOfferIdAction return 404', async () => {
      const fakeStore = mockStore();
      const fakeId = makeFakeId();
      const url = `${APIRoute.Offers}/${fakeId}`;

      mockAPI
        .onGet(url)
        .reply(404);

      await fakeStore.dispatch(fetchOfferIdAction(fakeId));
      const actions = fakeStore.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchOfferIdAction.pending.type,
        fetchOfferIdAction.rejected.type
      ]);
    });

    it('should dispatch fetchNearOffersAction return 200', async () => {
      const fakeStore = mockStore();
      const fakeOffersData = makeFackeOffersData();
      const fakeId = makeFakeId();
      const url = `${APIRoute.Offers}/${fakeId}/nearby`;

      mockAPI
        .onGet(url)
        .reply(200, fakeOffersData);

      await fakeStore.dispatch(fetchNearOffersAction(fakeId));
      const actions = fakeStore.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchNearOffersAction.pending.type,
        fetchNearOffersAction.fulfilled.type
      ]);
    });

    it('should dispatch fetchNearOffersAction return 404', async () => {
      const fakeStore = mockStore();
      const fakeId = makeFakeId();
      const url = `${APIRoute.Offers}/${fakeId}/nearby`;

      mockAPI
        .onGet(url)
        .reply(404);

      await fakeStore.dispatch(fetchNearOffersAction(fakeId));
      const actions = fakeStore.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchNearOffersAction.pending.type,
        fetchNearOffersAction.rejected.type
      ]);
    });
  });

  describe('Async reviews action', () => {
    it('responds with a list of reviews from hosts if response 200', async () => {
      const fakeStore = mockStore();
      const fakeId = makeFakeId();
      const url = `${APIRoute.Reviews}/${fakeId}`;
      const fakeReviewsData = makeFackeReviews();

      mockAPI
        .onGet(url)
        .reply(200, fakeReviewsData);

      await fakeStore.dispatch(fetchReviewsAction(fakeId));
      const actions = fakeStore.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.fulfilled.type
      ]);
    });

    it('responds with a list of reviews from hosts if response 404', async () => {
      const fakeStore = mockStore();
      const fakeId = makeFakeId();
      const url = `${APIRoute.Reviews}/${fakeId}`;

      mockAPI
        .onGet(url)
        .reply(404);

      await fakeStore.dispatch(fetchReviewsAction(fakeId));
      const actions = fakeStore.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.rejected.type
      ]);
    });

    it('should dispatch addReviewAction when POST /comments', async () => {
      const fakeUserReview = makeFakeNewReview();
      const fakeReviews = makeFackeReviews();

      const url = `${APIRoute.Reviews}/${fakeUserReview.offerId}`;

      mockAPI
        .onPost(url)
        .reply(200, fakeReviews);

      const fakeStore = mockStore();

      await fakeStore.dispatch(addReviewAction(fakeUserReview));

      const actions = fakeStore.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        addReviewAction.pending.type,
        addReviewAction.fulfilled.type
      ]);
    });

    it('should dispatch addReviewAction when POST /comments if response 404', async () => {
      const fakeUserReview = makeFakeNewReview();

      const url = `${APIRoute.Reviews}/${fakeUserReview.offerId}`;

      mockAPI
        .onPost(url)
        .reply(404);

      const fakeStore = mockStore();

      await fakeStore.dispatch(addReviewAction(fakeUserReview));

      const actions = fakeStore.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        addReviewAction.pending.type,
        addReviewAction.rejected.type
      ]);
    });
  });
});
