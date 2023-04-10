import { NameSpace } from '../../consts';
import { State } from '../../types/state';

export const getChangeCity = (state: State) => state[NameSpace.City].city;
export const getChangeSortType = (state: State) => state[NameSpace.City].sortType;
