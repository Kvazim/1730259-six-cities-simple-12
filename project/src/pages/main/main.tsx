import { Helmet } from 'react-helmet-async';
import Cities from '../../components/cities/cities';
import Header from '../../components/header/header';
import { Offers } from '../../types/cards';
import CitiesEmpty from '../cities-empty/cities-empty';

type MainScreenProps = {
  placesOffer: number;
  offers: Offers;
}

function Main({ placesOffer, offers }: MainScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>six cities simple. Main page</title>
      </Helmet>
      <Header />

      {
        Array.isArray(offers) && offers.length > 0
          ?
          <Cities placesOffer={placesOffer} offers={offers} />
          :
          <CitiesEmpty />
      }
    </div>
  );
}

export default Main;
