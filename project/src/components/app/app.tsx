import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../consts';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Property from '../../pages/ptoperty/property';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import { Offers } from '../../types/cards';
import { ReviewsList } from '../../types/reviews';

type AppProps = {
  offers: Offers;
  reviews: ReviewsList;
};

function App({ offers, reviews }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} />
          <Route index element={<Main offers={offers} />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Offer} element={<Property offers={offers} reviews={reviews} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
