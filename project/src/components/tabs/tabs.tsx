import {Link} from 'react-router-dom';

function Tabs(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <li className="locations__item">
            <Link className="locations__item-link tabs__item" to="#todo">
              <span>Paris</span>
            </Link>
          </li>
          <li className="locations__item">
            <Link className="locations__item-link tabs__item" to="#todo">
              <span>Cologne</span>
            </Link>
          </li>
          <li className="locations__item">
            <Link className="locations__item-link tabs__item" to="#todo">
              <span>Brussels</span>
            </Link>
          </li>
          <li className="locations__item">
            <Link className="locations__item-link tabs__item tabs__item--active" to="#todo">
              <span>Amsterdam</span>
            </Link>
          </li>
          <li className="locations__item">
            <Link className="locations__item-link tabs__item" to="#todo">
              <span>Hamburg</span>
            </Link>
          </li>
          <li className="locations__item">
            <Link className="locations__item-link tabs__item" to="#todo">
              <span>Dusseldorf</span>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
