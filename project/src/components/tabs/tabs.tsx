import { CITIES } from '../../const';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import cn from 'classnames';
import { getChangeCity } from '../../store/location-sorting-procces/location-sorting-procces.selector';
import { changeCity } from '../../store/location-sorting-procces/location-sorting-procces.slise';

function Tabs(): JSX.Element {
  const dispatch = useAppDispatch();
  const location = useAppSelector(getChangeCity);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            CITIES.map((city) => (
              <li key={city} className="locations__item">
                <Link
                  className={
                    cn(
                      'locations__item-link tabs__item',
                      { 'tabs__item--active': location === city }
                    )
                  }
                  to='#todo'
                  onClick={(event) => {
                    event.preventDefault();
                    dispatch(changeCity(city));
                  }}
                >
                  <span>{city}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
