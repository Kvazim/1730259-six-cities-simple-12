export type ApartmentType = 'apartment' | 'private room' | 'house' | 'hotel';

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

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  location: Location;
  name: string;
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
  city: City;
  location: Location;
}

export type Offers = Offer[];

