import {useState, useRef, useEffect, MutableRefObject} from 'react';
import leaflet, { Map } from 'leaflet';
import { LeafletParameters } from '../consts';
import { City } from '../types/cards';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City) {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const {latitude, longitude, zoom} = city.location;
      const {TILE_LAYER, ATTRIBUTION} = LeafletParameters;
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude,
        },
        zoom: zoom,
      });

      leaflet.tileLayer(TILE_LAYER, {attribution: ATTRIBUTION}).addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;
