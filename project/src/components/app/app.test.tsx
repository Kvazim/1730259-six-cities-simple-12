import { render, screen } from '@testing-library/react';
import { Action } from 'redux';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { AppRoute, AuthorizationStatus, DEFAULT_CITIES, Status } from '../../const';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-router/history-router';
import App from './app';
import { State } from '../../types/state';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { createAPI } from '../../services/api';
import { makeFackeOfferData } from '../../mocks/mocks';

const fakeHistory = createMemoryHistory();
const fakeCurrentOffer = makeFackeOfferData();
const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];

const mockStore = configureMockStore<
  State,
  Action<string>,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const fakeStore = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.NoAuth},
  OFFERS: {
    offerLoadingStatus: Status.Success,
    offers: [],
    currentOffer: fakeCurrentOffer,
    nearOffers: [],
  },
  CITY: {city: DEFAULT_CITIES},
  REVIEWS: {
    reviews: [],
  }
});

const fakeApp = (
  <Provider store={fakeStore}>
    <HistoryRouter history={fakeHistory}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Aplication Routing', () => {
  global.scrollTo = jest.fn();
  it('should render main screen when user navigate to "/" and empty store', () => {
    fakeHistory.push(AppRoute.Root);

    render(fakeApp);

    expect(screen.getByText(new RegExp(`We could not find any property available at the moment in ${DEFAULT_CITIES}`, 'i'))).toBeInTheDocument();
    expect(global.scrollTo).toBeCalledTimes(1);
  });

  it('should render login screen when user navigate to "/login"', () => {
    fakeHistory.push(AppRoute.Login);

    render(fakeApp);

    expect(screen.getAllByText(/Sign in/i).length).toBe(2);
    expect(screen.getByText('E-mail')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(global.scrollTo).toBeCalledTimes(1);
  });

  it('should render "NotFoundPage" when user navigate to non-existent route"', () => {
    fakeHistory.push('/non-existent-route');
    render(fakeApp);

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
  });

  it('should render property screen when user navigate to "/offer/id"', () => {
    fakeHistory.push(`${AppRoute.Offer}1`);

    render(fakeApp);

    expect(screen.getByText(/Meet the host/)).toBeInTheDocument();
    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
  });
});
