type PlacesOptionsItemProps = {
  element: string;
  isActiveElement: boolean;
  changeCurrentOptions: (element: string) => void;
}

function PlacesOptionsItem({element, isActiveElement, changeCurrentOptions}: PlacesOptionsItemProps):JSX.Element {
  return (
    <li
      className={`places__option ${isActiveElement ? 'places__option--active' : ''}`}
      onClick={() => changeCurrentOptions(element)}
      tabIndex={0}
    >
      {element}
    </li>
  );
}

export default PlacesOptionsItem;
