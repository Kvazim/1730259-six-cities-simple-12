import { useState } from 'react';
import CitiesCard from '../cities-card/cities-card';
import { Offer, Offers } from '../../types/cards';
import PlacesSorting from '../places-sorting/places-sorting';
import Map from '../map/map';
import { useAppSelector } from '../../hooks';

type CitiesProp = {
  offers: Offers;
}

function Cities({ offers }: CitiesProp): JSX.Element {
  const [focusCard, setFocusCard] = useState<Offer | null>(null);
  const location = useAppSelector((state) => state.city);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {location}</b>
        <PlacesSorting />
        <div className="cities__places-list places__list tabs__content">
          {
            offers.map((offer) => (
              <CitiesCard key={offer.id} className={'cities'} offer={offer} onFocusCard={setFocusCard} />
            ))
          }
        </div>
      </section>
      <div className="cities__right-section">
        <Map className={'cities'} offers={offers} focusCard={focusCard} location={location} />
      </div>
    </div>
  );
}

export default Cities;
