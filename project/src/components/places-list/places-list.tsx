import { Offer, Offers } from '../../types/cards';
import CitiesCard from '../cities-card/cities-card';

type PlacesListProps = {
  offers: Offers;
  setFocusCard: (offer: Offer | null) => void;
}

function PlacesList({offers, setFocusCard}: PlacesListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <CitiesCard key={offer.id} className={'cities'} offer={offer} onFocusCard={setFocusCard} />
        ))
      }
    </div>
  );
}

export default PlacesList;
