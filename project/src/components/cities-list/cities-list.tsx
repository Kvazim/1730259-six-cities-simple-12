import { Status } from '../../const';
import { useAppSelector } from '../../hooks';
import PlacesEmpty from '../../pages/places-empty/places-empty';
import { getOfferStatus } from '../../store/offer-procces/offer-procces.selector';
import { Offers } from '../../types/cards';
import ErrorOffersScreen from '../error-screen/error-offers-screen';

import Places from '../places/places';

type CitiesListProps = {
  offers: Offers;
}

function CitiesList({ offers }: CitiesListProps): JSX.Element {
  const errorLoading = useAppSelector(getOfferStatus);

  if (errorLoading === Status.Failed) {
    return <ErrorOffersScreen />;
  }

  return (
    <div className="cities">
      {
        offers && offers.length > 0
          ?
          <Places offers={offers} />
          :
          <PlacesEmpty />
      }
    </div>
  );
}

export default CitiesList;
