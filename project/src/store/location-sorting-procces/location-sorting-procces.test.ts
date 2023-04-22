import { CITIES, DEFAULT_CITIES, DEFAULT_SORT, SortType } from '../../const';
import { LocationSortingProcces } from '../../types/state';
import { changeCity, changeLocationSorting, changeSortType } from './location-sorting-procces.slise';

describe('locationSortingProcces', () => {
  let initialState: LocationSortingProcces;

  beforeEach(() => {
    initialState = {
      city: DEFAULT_CITIES,
      sortType: DEFAULT_SORT,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(changeLocationSorting.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual(initialState);
  });

  it('change city location', () => {
    expect(changeLocationSorting.reducer(initialState, changeCity(CITIES[3])))
      .toEqual({ city: CITIES[3], sortType: DEFAULT_SORT });
  });

  it('change sortigType', () => {
    expect(changeLocationSorting.reducer(initialState, changeSortType(SortType.Popular)))
      .toEqual({ city: DEFAULT_CITIES, sortType: SortType.Popular });
  });
});
