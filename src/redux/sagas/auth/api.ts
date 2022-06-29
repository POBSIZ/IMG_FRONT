import Utils, { Get, Post } from 'Utils';

import { ApiPostLoginParamType, ApiPostLoginResType } from 'Types/authTypes';

/**
 * POST LOGIN API
 * */
export async function apiPostLogin({ ...args }: ApiPostLoginParamType) {
  const res = await Post<ApiPostLoginResType>(`/user/login`, { ...args });
  return res.data;
}
