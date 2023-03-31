import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { BASE_URL, REQUEST_TIMEOUT } from '../consts';
import { getToken } from './token';

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );
  return api;
};
