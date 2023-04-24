import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { OfferId, Offers, Offer } from '../types/cards';
import { APIRoute, AppRoute } from '../const';
import { redirectToRoute } from './action';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { NewReview, Reviews } from '../types/reviews';

export const fetchOffersAction = createAsyncThunk<Offers, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offers>(APIRoute.Offers);
    return data;
  },
);

export const fetchOfferIdAction = createAsyncThunk<Offer, OfferId, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadOfferId',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
    return data;
  },
);

export const fetchNearOffersAction = createAsyncThunk<Offers, OfferId, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearOffers',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Offers>(`${APIRoute.Offers}/${offerId}/nearby`);
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<Reviews, OfferId, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadReviews',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Reviews>(`${APIRoute.Reviews}/${offerId}`);
    return data;
  },
);

export const addReviewAction = createAsyncThunk<Reviews, NewReview, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/setNewReview',
  async ({ offerId, comment, rating }, { extra: api }) => {
    const { data } = await api.post<Reviews>(`${APIRoute.Reviews}/${offerId}`, { comment, rating });
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Root));
    return data;
  },
);

export const logOutAction = createAsyncThunk<void, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
