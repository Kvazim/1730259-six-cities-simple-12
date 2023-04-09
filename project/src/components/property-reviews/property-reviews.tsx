import { AuthorizationStatus } from '../../consts';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selector';
import { Reviews } from '../../types/reviews';
import ReviewForm from '../review-form/review-form';
import ReviewsList from '../reviews-list/reviews-list';

type PropertyReviewsProps = {
  reviews: Reviews;
  offerId: number;
}

function PropertyReviews({ reviews, offerId }: PropertyReviewsProps): JSX.Element {
  const isAuthChecked = useAppSelector(getAuthorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList reviews={reviews} />
      {
        isAuthChecked === AuthorizationStatus.Auth
          ?
          <ReviewForm offerId={offerId} />
          :
          null
      }
    </section>
  );
}

export default PropertyReviews;
