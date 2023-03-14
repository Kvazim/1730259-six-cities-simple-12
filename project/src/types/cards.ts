export type ApartmentType = 'Apartment' | 'Private room' | 'House' | 'Hotel';

export type Host = {
  avatarUrl: string;
  isPro: boolean;
  name: string;
  }

export type Card = {
  previewImage: string;
  isPremium: boolean;
  price: number;
  title: string;
  type: ApartmentType;
  rating: number;
}

// export type Place = {
//   id: number;
//   bedrooms: number;
//   description: string;
//   goods: string[];
//   images: string[];
//   maxAdults: number;
//   host: Host;
// }

// export type Offer = Place | Card | Host;

export type Offer = {
  id: number;
  bedrooms: number;
  description: string | string[];
  goods: string[];
  images: string[];
  isPremium: boolean;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: ApartmentType;
  host: Host;
}

export type Offers = Offer[];

