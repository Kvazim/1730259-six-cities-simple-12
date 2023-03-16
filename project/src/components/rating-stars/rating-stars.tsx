import { Fragment, useState } from 'react';

type RatingStarsProps = {
  stars: string[];
}

function RatingStars({ stars }: RatingStarsProps): JSX.Element {
  const [isChecked, setIsChecked] = useState({
    rating: '0',
    comment: ''
  });
  const onClickInput = (evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { value } = evt.target;
    setIsChecked({ ...isChecked, rating: value });
  };
  return (
    <div className="reviews__rating-form form__rating">
      {
        stars && stars.length > 0 && stars.map((title, index) => (
          <Fragment key={title}>
            <input
              className="form__rating-input visually-hidden"
              name="rating" value={`${stars.length - index}`}
              id={`${stars.length - 1}-stars`} type="radio"
              onClick={onClickInput}
            />
            <label htmlFor={`${stars.length - index}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))
      }
    </div>
  );
}

export default RatingStars;
