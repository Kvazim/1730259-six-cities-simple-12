import { NavLink } from 'react-router-dom';

type TabsItemProps = {
  city: string;
  isActive: boolean;
}

function TabsItem({city, isActive}:TabsItemProps):JSX.Element {

  return (
    <li className="locations__item">
      <NavLink className = {`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} to="#todo">
        <span>{city}</span>
      </NavLink>
    </li>
  );
}

export default TabsItem;
