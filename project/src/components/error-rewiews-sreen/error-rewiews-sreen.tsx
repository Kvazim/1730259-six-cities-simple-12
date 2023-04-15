import { useAppDispatch } from '../../hooks';
import { fetchReviewsAction } from '../../store/api-actions';
import './style.css';

type ErrorRewiewsSreenProps = {
  offerId: number;
}

function ErrorRewiewsSreen({offerId}: ErrorRewiewsSreenProps):JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <div className='error-review'>
      <p>Ошибка загрузки отзывов</p>
      <button onClick={() => {
        dispatch(fetchReviewsAction(offerId));
      }}
      >
        Попробовать ещё раз
      </button>
    </div>
  );
}

export default ErrorRewiewsSreen;
