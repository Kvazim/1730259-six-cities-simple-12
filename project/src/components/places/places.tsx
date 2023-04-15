import { useState } from 'react';
import { Offer, Offers } from '../../types/cards';
import PlacesSorting from '../places-sorting/places-sorting';
import Map from '../map/map';
import { useAppSelector } from '../../hooks';
import PlacesList from '../places-list/places-list';
import { getChangeCity } from '../../store/location-sorting-procces/location-sorting-procces.selector';

type PlacesProp = {
  offers: Offers;
}

function Places({ offers }: PlacesProp): JSX.Element {
  const [focusCard, setFocusCard] = useState<Offer | null>(null);
  const location = useAppSelector(getChangeCity);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {location}</b>
        <PlacesSorting />
        <PlacesList offers={offers} setFocusCard={setFocusCard} />
      </section>
      <div className="cities__right-section">
        <Map className={'cities'} offers={offers} focusCard={focusCard} />
      </div>
    </div>
  );
}

export default Places;
