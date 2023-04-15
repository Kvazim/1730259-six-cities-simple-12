import { useAppSelector } from '../../hooks';
import { getChangeSortType } from '../../store/location-sorting-procces/location-sorting-procces.selector';
import { Offer, Offers } from '../../types/cards';
import { getSortingCurrentOffers } from '../../utils/utils';
import CitiesCard from '../cities-card/cities-card';

type PlacesListProps = {
  offers: Offers;
  setFocusCard: (offer: Offer | null) => void;
}

function PlacesList({offers, setFocusCard}: PlacesListProps): JSX.Element {
  const sortType = useAppSelector(getChangeSortType);
  const sortTypeOffers = getSortingCurrentOffers(offers, sortType);

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        sortTypeOffers.map((offer) => (
          <CitiesCard key={offer.id} className={'cities'} offer={offer} onFocusCard={setFocusCard} />
        ))
      }
    </div>
  );
}

export default PlacesList;
