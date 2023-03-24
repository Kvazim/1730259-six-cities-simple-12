import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../consts';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Property from '../../pages/ptoperty/property';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import { ReviewsList } from '../../types/reviews';
import Layout from '../layout/layout';

type AppProps = {
  reviews: ReviewsList;
};

function App({ reviews }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />}>
            <Route index element={<Main />} />
            <Route path={AppRoute.Login} element={<Login />} />
            <Route path={`${AppRoute.Offer}:id`} element={<Property reviews={reviews} />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
