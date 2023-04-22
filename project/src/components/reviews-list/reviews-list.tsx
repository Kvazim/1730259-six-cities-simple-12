import { useMemo } from 'react';
import { SIMILAR_AD_COUNT } from '../../const';
import { Reviews } from '../../types/reviews';
import ReviewsItem from '../reviews-item/reviews-item';

type ReviewsListProps = {
  reviews: Reviews;
}

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  const sortingReviws = useMemo(() => (
    reviews
      .slice()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, SIMILAR_AD_COUNT)
  ), [reviews]);

  return (
    <ul className="reviews__list">
      {
        sortingReviws
        &&
        sortingReviws.length > 0
        &&
        sortingReviws.map((item, index) => <ReviewsItem key={String(item) + String(index)} review={item} />)
      }
    </ul>
  );
}

export default ReviewsList;
