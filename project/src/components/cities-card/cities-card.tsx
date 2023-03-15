import { Link } from 'react-router-dom';
import { Offer } from '../../types/cards';
import { changeInPercent } from '../../utils/utils';

type CitiesCardProp = {
  offer: Offer;
  setFocusCard: (offer?: Offer) => void;
}

function CitiesCard({ offer, setFocusCard }: CitiesCardProp): JSX.Element {
  const {isPremium, previewImage, price, title, type, id, rating} = offer;
  return (
    <article className="cities__card place-card" onMouseEnter={() => setFocusCard(offer)} onMouseLeave={() => setFocusCard()}>
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
            <span style={{ width: `${changeInPercent(rating)}` }}></span>
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
