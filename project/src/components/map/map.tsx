import { Offer, Offers } from '../../types/cards';
import {useRef} from 'react';

type MapProps = {
  points: Offers;
  focusCard?: Offer | null;
}

function Map({points, focusCard}: MapProps):JSX.Element {
  const mapRef = useRef(null);

  return (
    <section ref={mapRef} className="cities__map map"></section>
  );
}

export default Map;
