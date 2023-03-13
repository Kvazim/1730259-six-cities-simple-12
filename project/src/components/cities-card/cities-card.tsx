import { Link } from 'react-router-dom';
import { Offer } from '../../types/cards';

type CitiesCardProp = {
  offer: Offer;
}

function CitiesCard({ offer }: CitiesCardProp): JSX.Element {
  const {isPremium, previewImage, price, title, type, id} = offer;
  return (
    <article className="cities__card place-card">
      {
        isPremium
          ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
          :
          null
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default CitiesCard;
