import { Link } from 'react-router-dom';

type TabsItemProps = {
  city: string;
  isActive: boolean;
  changeCurrentTabs: (location: string) => void;
}

function TabsItem({ city, isActive, changeCurrentTabs}: TabsItemProps): JSX.Element {
  const hrefLocation = `/#${city.toLowerCase()}`;
  return (
    <li className="locations__item">
      <Link
        className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
        to={hrefLocation}
        onClick={() => changeCurrentTabs(city)}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default TabsItem;
