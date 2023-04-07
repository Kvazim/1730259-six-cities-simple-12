import { Helmet } from 'react-helmet-async';
import Tabs from '../../components/tabs/tabs';
import { useAppSelector } from '../../hooks';
import { getSortingCurrentOffers } from '../../utils/utils';
import CitiesList from '../../components/cities/cities';

function Main(): JSX.Element {
  const location = useAppSelector((state) => state.city);
  const offersState = useAppSelector((state) => state.offers);
  const sortType = useAppSelector((state) => state.sortType);
  const offers = getSortingCurrentOffers(location, offersState, sortType);

  return (
    <main className={`page__main page__main--index ${offers.length < 1 ? 'page__main--index-empty' : '' }`}>
      <Helmet>
        <title>six cities simple</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      <CitiesList offers={offers} />
    </main>
  );
}

export default Main;
