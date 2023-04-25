import { DEFAULT_SORT, SortType } from '../const';
import { Offers } from '../types/cards';

export const changeInPercent = (item: number) => `${String(Math.round(item) / 0.05)}%`;

export const capitalize = (item: string): string => item.charAt(0).toUpperCase() + item.substring(1);

export const getCurrentOffers = (city: string, offers: Offers) => offers.filter((offer) => offer.city.name === city);

export const getSortingCurrentOffers = (offers: Offers, sortType = DEFAULT_SORT) => {
  switch (sortType) {
    case SortType.LowPrice:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortType.HightPrice:
      return offers.slice().sort((b, a) => a.price - b.price);
    case SortType.Rating:
      return offers.slice().sort((b, a) => a.rating - b.rating);
    default:
      return offers;
  }
};

export function getRandomArrayItem<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)];
}
