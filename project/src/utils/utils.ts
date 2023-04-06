import { DEFAULT_CITIES, DEFAULT_SORT, SortType } from '../consts';
import { Offers } from '../types/cards';

export const changeInPercent = (item: number) => `${String(Math.round(item) / 0.05)}%`;

export const capitalize = (item: string): string => item.charAt(0).toUpperCase() + item.substring(1);

export const getCurrentOffers = (city: string, offers: Offers) => offers.filter((offer) => offer.city.name === city);

export const getSortingCurrentOffers = (city: string = DEFAULT_CITIES, offers: Offers, sortType = DEFAULT_SORT) => {
  const offersByLocation = getCurrentOffers(city, offers);

  switch(sortType) {
    case SortType.LowPrice:
      return offersByLocation.sort((a, b) => a.price - b.price);
    case SortType.HightPrice:
      return offersByLocation.sort((b, a) => a.price - b.price);
    case SortType.Rating:
      return offersByLocation.sort((b, a) => a.rating - b.rating);
    default:
      return offersByLocation;
  }
};

export const getRandomArrayItem = (items: string[] | number[]):string | number => items[Math.floor(Math.random() * items.length)];

// export function GetRandomArrayItem<T>(items: T[]) {
//   return items[Math.floor(Math.random() * items.length)];
// }
