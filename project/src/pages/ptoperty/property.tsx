import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';
import PropertyDescription from '../../components/property-description/property-description';
import PropertyInside from '../../components/property-inside/property-inside';
import PropertyPhoto from '../../components/property-photo/property-photo';
// import ReviewsItem from '../../components/reviews-item/reviews-item';
import { changeInPercent, capitalize } from '../../utils/utils';
// import { SIMILAR_AD_COUNT, SIMILAR_AD_OFFERS_COUNT } from '../../consts';
import ReviewForm from '../../components/review-form/review-form';
import { AppRoute } from '../../consts';
import Premium from '../../components/premium/premium';
import Map from '../../components/map/map';
// import CitiesCard from '../../components/cities-card/cities-card';
import { useAppSelector } from '../../hooks';

function Property(): JSX.Element {
  const { id } = useParams();
  const offers = useAppSelector((state) => state.offers);
  const location = useAppSelector((state) => state.city);
  const property = offers.find((offer) => String(offer.id) === String(id));
  // const similarOffers = offers.filter((offer) => String(offer.id) !== String(id)).slice(0, SIMILAR_AD_OFFERS_COUNT);

  if (property === undefined) {
    return <Navigate to={AppRoute.PageNotFound} replace />;
  }

  const { images, isPremium, title, rating, type, bedrooms, maxAdults, price, goods, host, description } = property;
  // const [{ review }] = reviews.filter((items) => String(items.id) === String(id)).map((element) => ({ review: element.review }));

  return (
    <>
      <Helmet>
        <title>six cities simple: property</title>
      </Helmet>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                images.map((photoUrl, index) => (
                  <PropertyPhoto key={String(photoUrl) + String(index)} photoUrl={photoUrl} />
                ))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <Premium className={'property__mark'} />}

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${changeInPercent(rating)}` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {capitalize(type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} {bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} {maxAdults > 1 ? 'adults' : 'adult'}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    goods && goods.length > 0 && goods.map((good, index) => (
                      <PropertyInside key={String(index) + String(good)} good={good} />
                    ))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${host.isPro ? 'property__avatar-wrapper--pro' : ''} user__avatar-wrapper`} >
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {
                    host.isPro
                    &&
                    <span className="property__user-status">
                      Pro
                    </span>
                  }
                </div>
                <div className="property__description">
                  {
                    Array.isArray(description)
                      ?
                      description.length > 0
                      && description.map((item, index) =>
                        <PropertyDescription key={String(item) + String(index)} description={item} />
                      )
                      :
                      <PropertyDescription description={description} />
                  }
                </div>
              </div>
              <section className="property__reviews reviews">
                {/* <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{review.length}</span></h2> */}
                {/* <ul className="reviews__list">
                  {
                    review
                    &&
                    review.length > 0
                    &&
                    review.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                      .reverse()
                      .slice(0, SIMILAR_AD_COUNT)
                      .map((item, index) => <ReviewsItem key={String(item) + String(index)} review={item} />)
                  }
                </ul> */}
                <ReviewForm />
              </section>
            </div>
          </div>
          <Map className={'property'} offers={offers} currrentPageProperty={property} location={location} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            {/* <div className="near-places__list places__list">
              {
                similarOffers
                && similarOffers.length > 0
                && similarOffers.map((similarOffer) => (
                  <CitiesCard key={similarOffer.id} className={'near-places'} offer={similarOffer} />
                ))
              }

            </div> */}
          </section>
        </div>
      </main>
    </>
  );
}

export default Property;
