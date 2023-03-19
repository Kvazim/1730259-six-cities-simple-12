import { useState } from 'react';
import CitiesCard from '../cities-card/cities-card';
import { Offer, Offers } from '../../types/cards';
import Tabs from '../tabs/tabs';
import { cities, placesOption } from '../../consts';
import PlacesSorting from '../places-sorting/places-sorting';
import Map from '../map/map';

type CitiesProp = {
  offers: Offers;
}

function Cities({ offers }: CitiesProp): JSX.Element {
  const [focusCard, setFocusCard] = useState<Offer | null>(null);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs cities={cities} />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in Amsterdam</b>
            <PlacesSorting placesOption={placesOption} />
            <div className="cities__places-list places__list tabs__content">
              {
                offers.map((offer) => (
                  <CitiesCard key={offer.id} offer={offer} onFocusCard={setFocusCard} />
                ))
              }
            </div>
          </section>
          <div className="cities__right-section">
            <Map className={'cities__map'} offers={offers} focusCard={focusCard} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cities;
