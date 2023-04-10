import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../consts';
import { userProcess } from './user-process/user-process.slice';
import { offerData } from './offer-procces/offer-procces.slice';
import { changeLocationSorting } from './location-sorting-procces/location-sorting-procces.slise';
import { reviewsData } from './reviews-process/reviews-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offers]: offerData.reducer,
  [NameSpace.City]: changeLocationSorting.reducer,
  [NameSpace.Reviews]: reviewsData.reducer,
});
