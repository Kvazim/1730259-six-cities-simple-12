import { Fragment, ChangeEvent } from 'react';

type RatingStarsProps = {
  stars: string[];
  isChecked: string;
  isDisabled: boolean;
  onChangeChecked: ({ target }: ChangeEvent<HTMLInputElement>) => void;
}

function RatingStars({ stars, onChangeChecked, isChecked, isDisabled }: RatingStarsProps): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating" onChange={onChangeChecked}>
      {
        stars && stars.length > 0 && stars.map((title, index) => (
          <Fragment key={title}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={`${stars.length - index}`}
              id={`${stars.length - index}-stars`}
              type="radio"
              checked={isChecked === `${stars.length - index}`}
              disabled={isDisabled}
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
