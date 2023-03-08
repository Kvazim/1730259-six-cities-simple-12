const Setting = {
  RentalOffers: 5,
} as const;

enum AppRoute {
  Root = '/',
  Login = 'login',
  Offer = 'offer/:id',
}

export {Setting, AppRoute};
