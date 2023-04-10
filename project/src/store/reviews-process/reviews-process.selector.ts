import { NameSpace, Status } from '../../consts';
import { Reviews } from '../../types/reviews';
import { State } from '../../types/state';

export const getReviews = (state: State): Reviews => state[NameSpace.Reviews].reviews;
export const getReviewsLoadingStatus = (state: State): Status => state[NameSpace.Reviews].reviewsLoadingStatus;
export const setReviews = (state: State): Reviews => state[NameSpace.Reviews].reviews;
