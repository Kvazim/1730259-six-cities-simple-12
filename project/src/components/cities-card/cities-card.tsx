import { Link } from 'react-router-dom';
import { Offer } from '../../types/cards';
import { changeInPercent, capitalize } from '../../utils/utils';
import { AppRoute } from '../../consts';
import Premium from '../premium/premium';
import { memo } from 'react';

type CitiesCardProp = {
  offer: Offer;
  onFocusCard?: (offer: Offer | null) => void;
  className: string;
}

function CitiesCard({ offer, onFocusCard, className }: CitiesCardProp): JSX.Element {
  const { isPremium, previewImage, price, title, type, id, rating } = offer;
  return (
    <article
      className={`${className}__card place-card`}
      onMouseEnter={
        onFocusCard && (() => onFocusCard(offer))
      }
      onMouseLeave={
        onFocusCard && (() => onFocusCard(null))
      }
    >
      { isPremium && <Premium className={'place-card__mark'} /> }
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}${id}`}>
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
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalize(type)}</p>
      </div>
    </article>
  );
}

export default memo(CitiesCard);
