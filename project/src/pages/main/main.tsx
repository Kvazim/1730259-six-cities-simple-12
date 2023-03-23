import { Helmet } from 'react-helmet-async';
import Cities from '../../components/cities/cities';
import Tabs from '../../components/tabs/tabs';
import { Offers } from '../../types/cards';
import CitiesEmpty from '../cities-empty/cities-empty';

type MainScreenProps = {
  offers: Offers;
}

function Main({ offers }: MainScreenProps): JSX.Element {
  return (
    <main className={`page__main page__main--index ${offers.length < 1 ? 'page__main--index-empty' : '' }`}>
      <Helmet>
        <title>six cities simple</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      <div className="cities">
        {
          offers && offers.length > 0
            ?
            <Cities offers={offers} />
            :
            <CitiesEmpty />
        }
      </div>
    </main>
  );
}

export default Main;
