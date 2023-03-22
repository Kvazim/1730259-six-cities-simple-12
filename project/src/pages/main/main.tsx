import { Helmet } from 'react-helmet-async';
import Cities from '../../components/cities/cities';
import { Offers } from '../../types/cards';
import CitiesEmpty from '../cities-empty/cities-empty';

type MainScreenProps = {
  offers: Offers;
}

function Main({ offers }: MainScreenProps): JSX.Element {
  return (
    <>
      <Helmet>
        <title>six cities simple</title>
      </Helmet>

      {
        offers && offers.length > 0
          ?
          <Cities offers={offers} />
          :
          <CitiesEmpty />
      }
    </>
  );
}

export default Main;
