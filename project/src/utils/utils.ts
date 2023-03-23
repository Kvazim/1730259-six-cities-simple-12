import { DEFAULT_CITIES } from '../consts';
import { Offers } from '../types/cards';

export const changeInPercent = (item: number) => `${String(Math.round(item) / 0.05)}%`;
export const capitalize = (item: string): string => item.charAt(0).toUpperCase() + item.substring(1);

export const getCurrentOffers = (city: string = DEFAULT_CITIES, offers: Offers) => {
  offers.filter((offer) => offer.city.name === city);
};
