import { useAppSelector } from '../../hooks';
import PlacesEmpty from '../../pages/places-empty/places-empty';
import { Offers } from '../../types/cards';
import { getSortingCurrentOffers } from '../../utils/utils';
import Places from '../places/places';

type CitiesListProps = {
  offers: Offers;
}

function CitiesList({ offers }: CitiesListProps): JSX.Element {
  const sortType = useAppSelector((state) => state.sortType);
  const sortTypeOffers = getSortingCurrentOffers(offers, sortType);
  return (
    <div className="cities">
      {
        sortTypeOffers && sortTypeOffers.length > 0
          ?
          <Places offers={sortTypeOffers} />
          :
          <PlacesEmpty />
      }
    </div>
  );
}

export default CitiesList;
