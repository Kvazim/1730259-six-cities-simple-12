import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SortType } from '../../consts';
import { useAppSelector } from '../../hooks';
import cn from 'classnames';
import { changeSort } from '../../store/action';

function PlacesSorting(): JSX.Element {
  const [isOpenSorting, setIsOpenSorting] = useState(false);
  const dispatch = useDispatch();
  const sortType = useAppSelector((state) => state.sortType);

  useEffect(() => {
    const placesSortingType = document.querySelector('.places__sorting-type');
    const closeSort = (evt: MouseEvent) => {
      if (!placesSortingType) {
        return;
      }

      if (evt.target !== placesSortingType) {
        setIsOpenSorting(false);
      }
    };

    document.addEventListener('click', closeSort);

    return () => document.removeEventListener('click', closeSort);
  }, []);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setIsOpenSorting(!isOpenSorting)}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpenSorting ? 'places__options--opened' : ''}`}>
        {
          Object.entries(SortType).map(([, value]) => (
            <li key={value}
              className={
                cn(
                  'places__option',
                  { 'places__option--active': sortType === value }
                )
              }
              tabIndex={0}
              onClick={() => dispatch(changeSort(value))}
            >
              {value}
            </li>
          ))
        }
      </ul>
    </form >
  );
}

export default PlacesSorting;
