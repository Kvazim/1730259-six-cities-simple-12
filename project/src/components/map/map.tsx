import { Offer, Offers } from '../../types/cards';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../consts';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  offers: Offers;
  focusCard?: Offer | null;
  className: string;
  currrentPageProperty?: Offer;
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

function Map({ className, offers, focusCard, currrentPageProperty }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const cityLocation = offers[0].city.location;
  const map = useMap(mapRef, cityLocation);

  useEffect(() => {
    if (map) {
      map.flyTo([cityLocation.latitude, cityLocation.longitude], cityLocation.zoom);
      const markerGroup = leaflet.layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = leaflet.marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            focusCard !== null && (focusCard === offer || currrentPageProperty === offer)
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerGroup);
      });

      return () => {
        map.removeLayer(markerGroup);
      };
    }
  }, [map, offers, focusCard, cityLocation, currrentPageProperty]);

  return (
    <section ref={mapRef} className={`${className}__map map`}></section>
  );
}

export default Map;
