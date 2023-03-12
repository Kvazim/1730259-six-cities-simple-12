import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../consts';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Property from '../../pages/ptoperty/property';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import { Offers } from '../../types/cards';

type AppProps = {
  placesOffer: number;
  offers: Offers;
};

function App({ placesOffer, offers }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} />
          <Route index element={<Main placesOffer={placesOffer} offers={offers} />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Offer} element={<Property />} />
          <Route path="*" element={<PageNotFound />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
