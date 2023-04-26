import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { AppRoute, AuthorizationStatus, DEFAULT_CITIES } from '../../const';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-router/history-router';
import App from './app';

const mockStore = configureMockStore();
const fakeHistory = createMemoryHistory();

const fakeStore = mockStore({
  MAIN_DATA: {
    authorizationStatus: AuthorizationStatus.Auth,
  },
});

const fakeApp = (
  <Provider store={fakeStore}>
    <HistoryRouter history={fakeHistory}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Aplication Routing', () => {
  it('should render main screen when user navigate to "/"', () => {
    fakeHistory.push(AppRoute.Root);

    render(fakeApp);

    expect(screen.getByText(new RegExp(`${DEFAULT_CITIES}`), 'i')).toBeInTheDocument();
  });
});
