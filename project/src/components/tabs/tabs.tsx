import { CITIES } from '../../consts';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';
import { useDispatch } from 'react-redux';
import cn from 'classnames';

function Tabs(): JSX.Element {
  const dispatch = useDispatch();
  const location = useAppSelector((state) => state.city);
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            CITIES && CITIES.length > 0 && CITIES.map((city) => (
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
