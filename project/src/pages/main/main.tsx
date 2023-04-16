import { Helmet } from 'react-helmet-async';
import Tabs from '../../components/tabs/tabs';
import { useAppSelector } from '../../hooks';
import { getCurrentOffers } from '../../utils/utils';
import CitiesList from '../../components/cities-list/cities-list';
import { getOffers } from '../../store/offer-procces/offer-procces.selector';
import { getChangeCity } from '../../store/location-sorting-procces/location-sorting-procces.selector';
import { useMemo } from 'react';

function Main(): JSX.Element {
  const location = useAppSelector(getChangeCity);
  const offersState = useAppSelector(getOffers);

  const sortOffers = useMemo(() => getCurrentOffers(location, offersState), [location, offersState]);

  return (
    <main className={`page__main page__main--index ${sortOffers.length < 1 ? 'page__main--index-empty' : ''}`}>
      <Helmet>
        <title>six cities simple</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      <CitiesList offers={sortOffers} />
    </main>
  );
}

export default Main;
