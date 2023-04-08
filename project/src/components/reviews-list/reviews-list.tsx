import { SIMILAR_AD_COUNT } from '../../consts';
import { Reviews } from '../../types/reviews';
import ReviewsItem from '../reviews-item/reviews-item';

type ReviewsListProps = {
  reviews: Reviews;
}

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {
        reviews
        &&
        reviews.length > 0
        &&
        reviews
          .slice()
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, SIMILAR_AD_COUNT)
          .map((item, index) => <ReviewsItem key={String(item) + String(index)} review={item} />)
      }
    </ul>
  );
}

export default ReviewsList;
