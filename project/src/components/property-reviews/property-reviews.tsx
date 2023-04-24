import { AuthorizationStatus, Status } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selector';
import ReviewForm from '../review-form/review-form';
import ReviewsList from '../reviews-list/reviews-list';
import { getReviews, getReviewsLoadingStatus } from '../../store/reviews-process/reviews-process.selector';
import ErrorRewiewsSreen from '../../components/error-rewiews-sreen/error-rewiews-sreen';

type PropertyReviewsProps = {
  offerId: number;
}

function PropertyReviews({ offerId }: PropertyReviewsProps): JSX.Element {
  const isAuthChecked = useAppSelector(getAuthorizationStatus);
  const reviews = useAppSelector(getReviews);
  const reviewsLoadingStatus = useAppSelector(getReviewsLoadingStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      {
        (reviewsLoadingStatus === Status.Failed)
          ?
          <ErrorRewiewsSreen offerId={offerId} />
          :
          <ReviewsList reviews={reviews} />
      }
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
