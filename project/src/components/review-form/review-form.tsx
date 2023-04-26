import RatingStars from '../rating-stars/rating-stars';
import { STAR_NAME, MIN_VALUE_REVIEW_LENGHT, MAX_VALUE_REVIEW_LENGHT, Status } from '../../const';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addReviewAction } from '../../store/api-actions';
import { getReviewsLoadingStatus } from '../../store/reviews-process/reviews-process.selector';
import { toast } from 'react-toastify';

type ReviewFormProps = {
  offerId: number;
}

function ReviewForm({ offerId }: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const getReviewStatus = useAppSelector(getReviewsLoadingStatus);

  const isReviewLoading = getReviewStatus === Status.Loading;

  const [isChecked, setIsChecked] = useState('0');
  const handleChangeChecked = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.name === STAR_NAME) {
      setIsChecked(target.value);
    }
  };

  const [value, setValue] = useState('');
  const handleChangeValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const [isSubmitActive, setIsSubmitActive] = useState(false);
  useEffect(() => {
    setIsSubmitActive(isChecked === '0' || (value.length < MIN_VALUE_REVIEW_LENGHT || value.length > MAX_VALUE_REVIEW_LENGHT));
  }, [isChecked, value.length]);

  const resetChecked = () => {
    setIsChecked('0');
    setValue('');
  };

  const handleClickSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (value && isChecked) {
      dispatch(addReviewAction({
        offerId: offerId,
        comment: value,
        rating: Number(isChecked),
      }));

      if (getReviewStatus === Status.Success) {
        resetChecked();
      }

      if (getReviewStatus === Status.Failed) {
        toast.warn('Ошибка отправки, попробуйте еще раз');
      }
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingStars isChecked={isChecked} handleChangeChecked={handleChangeChecked} isDisabled={isReviewLoading} />
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={value} onChange={handleChangeValue} disabled={isReviewLoading}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit" onClick={handleClickSubmit} disabled={isSubmitActive || isReviewLoading}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
