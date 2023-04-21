import {configureMockStore} from '@jedmao/redux-mock-store';
import { redirect } from './redirect';
import { State } from '../../types/state';
import { AnyAction } from '@reduxjs/toolkit';
import { redirectToRoute } from '../action';
import { AppRoute } from '../../consts';

const fakeHistory = {
  location: {pathname: ''},
  push(path: string) {
    this.location.pathname = path;
  },
};

jest.mock('../../browser-history', ()=> fakeHistory);

const middlewares = [redirect];
const mockStore = configureMockStore<State, AnyAction>(middlewares);
const store = mockStore();

describe('Middleware: redirect', () => {
  beforeEach(() => {
    fakeHistory.push('');
  });

  it('should be redirect to /login', () => {
    store.dispatch(redirectToRoute(AppRoute.Login));
    expect(fakeHistory.location.pathname).toBe(AppRoute.Login);
    expect(store.getActions()).toEqual([
      redirectToRoute(AppRoute.Login),
    ]);
  });

  it('should not to be redirect not found page because bad action', () => {
    store.dispatch({type: 'UNKNOWN_ACTION', payload: AppRoute.PageNotFound});
    expect(fakeHistory.location.pathname).not.toBe(AppRoute.PageNotFound);
  });
});
