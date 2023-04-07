import PlacesEmpty from '../../pages/places-empty/places-empty';
import { Offers } from '../../types/cards';
import Places from '../places/places';

type CitiesListProps = {
  offers: Offers;
}

function CitiesList({ offers }: CitiesListProps): JSX.Element {
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
