import { useSelector, RootStateOrAny } from 'react-redux';
import { useAuth } from '../useAuth';

import axios, { AxiosRequestConfig } from 'axios';
import { Get, Post, Patch, Delete } from 'Utils';

export const useMethod = () => {
  const authState = useAuth();
  // const authState = useSelector((state: RootStateOrAny) => state.authReducer);

  return {
    GET: async (url: string, configs: AxiosRequestConfig = {}) => {
      const res = await Get(url, {
        ...configs,
        headers: {
          Authorization: `Bearer ${authState.token}`,
        },
      });
      return res;
    },

    POST: async (url: string, data: any, configs: AxiosRequestConfig = {}) => {
      const res = await Post(url, data, {
        ...configs,
        headers: {
          Authorization: `Bearer ${authState.token}`,
        },
      });
      return res;
    },

    PATCH: async (url: string, data: any, configs: AxiosRequestConfig = {}) => {
      const res = await Patch(url, data, {
        ...configs,
        headers: {
          Authorization: `Bearer ${authState.token}`,
        },
      });
      return res;
    },

    DELETE: async (url: string, configs: AxiosRequestConfig = {}) => {
      const res = await Delete(`${process.env.NEXT_PUBLIC_SERVER}${url}`, {
        ...configs,
        headers: {
          Authorization: `Bearer ${authState.token}`,
        },
      });
      return res;
    },
  };
};
