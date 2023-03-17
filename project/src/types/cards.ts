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

