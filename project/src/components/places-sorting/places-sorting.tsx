import { useState } from 'react';
import PlacesOptionsItem from '../places-options-item/places-options-item';

type PlacesSortingProps = {
  placesOption: string[];
}

function PlacesSorting({placesOption}: PlacesSortingProps): JSX.Element {
  const [isOpenSorting, setIsOpenSorting] = useState(false);
  const [isActiveElement, setIsActiveElement] = useState(placesOption[1]);
  const onClickOpen = () => setIsOpenSorting(!isOpenSorting);
  const onClickElement = (item: string) => setIsActiveElement(item);

  return (
    <form className="places__sorting" action="#" method="get" onClick={onClickOpen}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {isActiveElement}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpenSorting ? 'places__options--opened' : ''}`}>
        {Array.isArray(placesOption) && placesOption.length > 0 && placesOption.map((item, index) => (
          <PlacesOptionsItem
            key={String(item) + String(index)}
            element={item}
            isActiveElement={isActiveElement === item}
            changeCurrentOptions={onClickElement}
          />
        ))}
      </ul>
    </form >
  );
}

export default PlacesSorting;
