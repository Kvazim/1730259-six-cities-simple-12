import RatingStars from '../rating-stars/rating-stars';
import { stars, STAR_NAME } from '../../consts';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addReviewAction } from '../../store/api-actions';

type ReviewFormProps = {
  offerId: number;
}

function ReviewForm({ offerId }: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const setReviewLoading = useAppSelector((state) => state.setReviewUserLoading);
  // const reviews = useAppSelector((state) => state.reviews);

  const [isChecked, setIsChecked] = useState('0');
  const onChangeChecked = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.name === STAR_NAME) {
      setIsChecked(target.value);
    }
  };

  const [value, setValue] = useState('');
  const onChangeValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const [isSubmitActive, setIsSubmitActive] = useState(false);
  useEffect(() => {
    setIsSubmitActive(isChecked === '0' || (value.length < 50 || value.length > 300));
  }, [isChecked, value.length]);

  // const clearForm = () => {
  //   if (isChecked !== '0') {
  //     const raitingElement = document.getElementById(`${isChecked}-stars`);
  //     if (raitingElement) {
  //       (raitingElement as HTMLInputElement).checked = false;
  //     }
  //   }
  //   setIsChecked('0');
  //   setValue('');
  // };

  // useEffect(() => {
  //   clearForm();
  // }, [reviews]);

  const onClickSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (value && isChecked) {
      dispatch(addReviewAction({
        offerId: offerId,
        comment: value,
        rating: Number(isChecked),
      }));
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingStars stars={stars} isChecked={isChecked} onChangeChecked={onChangeChecked} isDisabled={setReviewLoading} />
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={value} onChange={onChangeValue} disabled={setReviewLoading}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit" onClick={onClickSubmit} disabled={isSubmitActive || setReviewLoading}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
