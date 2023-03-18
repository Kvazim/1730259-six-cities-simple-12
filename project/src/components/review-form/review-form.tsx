import RatingStars from '../rating-stars/rating-stars';
import { stars } from '../../consts';
import { ChangeEvent, useState } from 'react';

function ReviewForm(): JSX.Element {
  const [isChecked, setIsChecked] = useState(false);
  const onChangeChecked = () => {
    setIsChecked(!isChecked);
  };

  const [value, setValue] = useState('');
  const onChangeValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingStars stars={stars} isChecked={isChecked} onChangeChecked={onChangeChecked} />
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={value} onChange={onChangeValue}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
