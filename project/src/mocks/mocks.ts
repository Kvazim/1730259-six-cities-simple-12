import { datatype, helpers, image, internet, lorem } from 'faker';
import { UserData } from '../types/user-data';
import { Offer, Offers } from '../types/cards';
import { CITIES } from '../const';
import { NewReview, Review, Reviews } from '../types/reviews';
import { AuthData } from '../types/auth-data';

export const makeFackeUserData = (): UserData => ({
  id: datatype.number(),
  email: internet.email(),
  token: datatype.string(),
  avatarUrl: internet.avatar(),
  isPro: datatype.boolean(),
  name: internet.userName(),
});

export const makeFackeAuthUserData = (): AuthData => ({
  login: internet.email(),
  password: datatype.string()
});

export const makeFackeOfferData = (): Offer => ({
  id: datatype.number(),
  bedrooms: datatype.number(6),
  description: datatype.string(),
  goods: datatype.array(10).map((e) => String(e)),
  images: datatype.array(6).map(() => image.imageUrl(640, 480, 'nature', true)),
  isPremium: datatype.boolean(),
  maxAdults: datatype.number(6),
  previewImage: image.imageUrl(640, 480, 'cat', true),
  price: datatype.number(),
  rating: datatype.float(5),
  title: datatype.string(),
  type: 'apartment',
  host: {
    avatarUrl: internet.avatar(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: internet.userName(),
  },
  city: {
    location: {
      latitude: datatype.float(),
      longitude: datatype.float(),
      zoom: helpers.randomize([10, 13, 16]),
    },
    name: CITIES[Math.floor(Math.random() * CITIES.length)],
  },
  location: {
    latitude: datatype.float(),
    longitude: datatype.float(),
    zoom: helpers.randomize([10, 13, 16]),
  },
});

export const makeFackeOffersData = (): Offers => (datatype.array(15).map(() => makeFackeOfferData()));

export const makeFackeReview = (): Review => ({
  comment: datatype.string(),
  date: datatype.string(),
  id: datatype.number(),
  rating: datatype.float(5),
  user: {
    avatarUrl: internet.avatar(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: internet.userName(),
  },
});

export const makeFackeReviews = (): Reviews => (datatype.array(10).map(() => makeFackeReview()));

export const makeFakeNewReview = (): NewReview => ({
  offerId: datatype.number(),
  comment: lorem.paragraph(1),
  rating: datatype.float(5),
});

export const makeFakeId = (): number => (datatype.number());
