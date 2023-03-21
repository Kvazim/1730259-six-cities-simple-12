import { Offers } from '../types/cards';

export const offers: Offers = [
  {
    id: 1,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/apartment-03.jpg'
    ],
    isPremium: true,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    title: 'Beautiful &amp; luxurious apartment at great location',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    type: 'apartment',
    rating: 4.2,
    bedrooms: 4,
    maxAdults: 4,
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Kitchen'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true,
    },
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam'
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
  },
  {
    id: 2,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/apartment-03.jpg'
    ],
    isPremium: true,
    previewImage: 'img/room.jpg',
    price: 80,
    title: 'Wood and stone place',
    description: [
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    ],
    type: 'private room',
    rating: 4.2,
    bedrooms: 4,
    maxAdults: 4,
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Kitchen'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: false,
    },
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
  },
  {
    id: 3,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/apartment-03.jpg'
    ],
    isPremium: false,
    previewImage: 'img/apartment-02.jpg',
    price: 132,
    title: 'Canal View Prinsengracht',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    type: 'apartment',
    rating: 4.2,
    bedrooms: 4,
    maxAdults: 4,
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Kitchen'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true,
    },
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16,
    },
  },
  {
    id: 4,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/apartment-03.jpg'
    ],
    isPremium: true,
    previewImage: 'img/apartment-03.jpg',
    price: 180,
    title: 'Nice, cozy, warm big bed apartment',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    type: 'apartment',
    rating: 5,
    bedrooms: 4,
    maxAdults: 4,
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Kitchen'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true,
    },
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16,
    },
  },
];
