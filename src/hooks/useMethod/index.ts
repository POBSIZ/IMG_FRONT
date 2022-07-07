import { useSelector, RootStateOrAny } from 'react-redux';

import { Get, Post, Patch } from 'Utils';

export const useMethod = () => {
  const authState = useSelector((state: RootStateOrAny) => state.authReducer);
  return {
    GET: async (url: string) => {
      const res = await Get(url, {
        headers: {
          Authorization: `Bearer ${authState.token}`,
        },
      });
      return res;
    },
    POST: async (url: string, data: any) => {
      const res = await Post(url, data, {
        headers: {
          Authorization: `Bearer ${authState.token}`,
        },
      });
      return res;
    },
    PATCH: async (url: string, data: any) => {
      const res = await Patch(url, data, {
        headers: {
          Authorization: `Bearer ${authState.token}`,
        },
      });
      return res;
    },
  };
};
