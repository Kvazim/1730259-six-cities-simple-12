import { Fragment, ChangeEvent } from 'react';
import { STARS } from '../../const';

type RatingStarsProps = {
  isChecked: string;
  isDisabled: boolean;
  handleChangeChecked: ({ target }: ChangeEvent<HTMLInputElement>) => void;
}

function RatingStars({ handleChangeChecked, isChecked, isDisabled }: RatingStarsProps): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating" >
      {
        STARS.map((title, index) => (
          <Fragment key={title}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={`${STARS.length - index}`}
              id={`${STARS.length - index}-stars`}
              type="radio"
              checked={isChecked === `${STARS.length - index}`}
              disabled={isDisabled}
              onChange={handleChangeChecked}
            />
            <label htmlFor={`${STARS.length - index}-stars`} className="reviews__rating-label form__rating-label" title={title}>
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
