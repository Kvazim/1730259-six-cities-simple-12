import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../consts/consts';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Property from '../../pages/ptoperty/property';
import PageNotFound from '../../pages/page-not-found/page-not-found';

type AppProps = {
  rentalOffers: number;
};

function App({ rentalOffers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} />
        <Route index element={<Main rentalOffers={rentalOffers} />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Offer} element={<Property />} />
        <Route path="*" element={<PageNotFound />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
