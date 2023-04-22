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
  makeFakeNewReview
} from '../mocks/mocks';
import { redirectToRoute } from './action';
import { datatype } from 'faker';

describe('Async action', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action<string>,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  const fakeOffersData = makeFackeOffersData();

  describe('Async auth action', () => {
    it('should authorization status is «auth» when server return 200', async () => {
      const store = mockStore();
      mockAPI
        .onGet(APIRoute.Login)
        .reply(200, []);

      expect(store.getActions()).toEqual([]);

      await store.dispatch(checkAuthAction());

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.fulfilled.type
      ]);
    });

    it('should dispatch loginAction when POST /login', async () => {
      const store = mockStore();
      Storage.prototype.setItem = jest.fn();
      const fakeAutorizationUserData = makeFackeAuthUserData();
      const fakeToken = makeFackeUserData();

      mockAPI
        .onPost(APIRoute.Login)
        .reply(200, { token: fakeToken.token });

      await store.dispatch(loginAction(fakeAutorizationUserData));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        loginAction.pending.type,
        redirectToRoute.type,
        loginAction.fulfilled.type,
      ]);

      expect(Storage.prototype.setItem).toBeCalledTimes(1);
      expect(Storage.prototype.setItem).toBeCalledWith('authToken', fakeToken.token);
    });

    it('should dispatch Logout when Delete /logout', async () => {
      const store = mockStore();
      Storage.prototype.removeItem = jest.fn();

      mockAPI
        .onDelete(APIRoute.Logout)
        .reply(204);

      await store.dispatch(logOutAction());

      const actions = store.getActions().map(({ type }) => type);

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
      const store = mockStore();

      mockAPI
        .onGet(APIRoute.Offers)
        .reply(200, fakeOffersData);

      await store.dispatch(fetchOffersAction());
      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.fulfilled.type
      ]);
    });

    it('responds with a list of offers from hosts if response 404', async () => {
      const store = mockStore();

      mockAPI
        .onGet(APIRoute.Offers)
        .reply(404);

      await store.dispatch(fetchOffersAction());
      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.rejected.type
      ]);
    });

    it('should dispatch fetchOfferIdAction return 200', async () => {
      const store = mockStore();
      const fakeOfferData = makeFackeOfferData();
      const id = datatype.number();
      const url = `${APIRoute.Offers}/${id}`;

      mockAPI
        .onGet(url)
        .reply(200, fakeOfferData);

      await store.dispatch(fetchOfferIdAction(id));
      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchOfferIdAction.pending.type,
        fetchOfferIdAction.fulfilled.type
      ]);
    });

    it('should dispatch fetchOfferIdAction return 404', async () => {
      const store = mockStore();
      const id = datatype.number();
      const url = `${APIRoute.Offers}/${id}`;

      mockAPI
        .onGet(url)
        .reply(404);

      await store.dispatch(fetchOfferIdAction(id));
      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchOfferIdAction.pending.type,
        fetchOfferIdAction.rejected.type
      ]);
    });

    it('should dispatch fetchNearOffersAction return 200', async () => {
      const store = mockStore();
      const fakeOfferData = makeFackeOfferData();
      const id = datatype.number();
      const url = `${APIRoute.Offers}/${id}/nearby`;

      mockAPI
        .onGet(url)
        .reply(200, fakeOfferData);

      await store.dispatch(fetchNearOffersAction(id));
      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchNearOffersAction.pending.type,
        fetchNearOffersAction.fulfilled.type
      ]);
    });

    it('should dispatch fetchNearOffersAction return 404', async () => {
      const store = mockStore();
      const id = datatype.number();
      const url = `${APIRoute.Offers}/${id}/nearby`;

      mockAPI
        .onGet(url)
        .reply(404);

      await store.dispatch(fetchNearOffersAction(id));
      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchNearOffersAction.pending.type,
        fetchNearOffersAction.rejected.type
      ]);
    });
  });

  describe('Async reviews action', () => {
    it('responds with a list of reviews from hosts if response 200', async () => {
      const store = mockStore();
      const id = datatype.number();
      const url = `${APIRoute.Reviews}/${id}`;
      const fakeReviewsData = makeFackeReviews();

      mockAPI
        .onGet(url)
        .reply(200, fakeReviewsData);

      await store.dispatch(fetchReviewsAction(id));
      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.fulfilled.type
      ]);
    });

    it('responds with a list of reviews from hosts if response 404', async () => {
      const store = mockStore();
      const id = datatype.number();
      const url = `${APIRoute.Reviews}/${id}`;

      mockAPI
        .onGet(url)
        .reply(404);

      await store.dispatch(fetchReviewsAction(id));
      const actions = store.getActions().map(({ type }) => type);

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

      const store = mockStore();

      await store.dispatch(addReviewAction(fakeUserReview));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        addReviewAction.pending.type,
        addReviewAction.fulfilled.type
      ]);
    });
  });

  it('should dispatch addReviewAction when POST /comments if response 404', async () => {
    const fakeUserReview = makeFakeNewReview();

    const url = `${APIRoute.Reviews}/${fakeUserReview.offerId}`;

    mockAPI
      .onPost(url)
      .reply(404);

    const store = mockStore();

    await store.dispatch(addReviewAction(fakeUserReview));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      addReviewAction.pending.type,
      addReviewAction.rejected.type
    ]);
  });
});
