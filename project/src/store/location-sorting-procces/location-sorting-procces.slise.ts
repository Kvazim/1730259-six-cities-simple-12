import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_CITIES, DEFAULT_SORT, NameSpace, SortType } from '../../consts';
import { LocationSortingProcces } from '../../types/state';

const initialState: LocationSortingProcces = {
  city: DEFAULT_CITIES,
  sortType: DEFAULT_SORT,
};

export const changeLocationSorting = createSlice({
  name: NameSpace.City,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    changeSortType: (state, action: PayloadAction<SortType>) => {
      state.sortType = action.payload;
    },
  },
});

export const {changeCity, changeSortType} = changeLocationSorting.actions;
