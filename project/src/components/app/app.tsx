import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../consts';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Property from '../../pages/ptoperty/property';
import PageNotFound from '../../pages/page-not-found/page-not-found';

type AppProps = {
  placesCount: number;
};

function App({ placesCount }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} />
          <Route index element={<Main placesCount={placesCount} />} />
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
