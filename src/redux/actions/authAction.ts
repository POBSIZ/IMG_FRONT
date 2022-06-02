import { action, createAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { ErrorInfo } from 'react';

export const AUTH_LOGIN = 'auth/AUTH_LOGIN' as const;
export const AUTH_LOGIN_SUCCESS = 'auth/AUTH_LOGIN_SUCCESS' as const;
export const AUTH_LOGIN_ERROR = 'auth/AUTH_LOGIN_ERROR' as const;
export const authLogin = createAsyncAction(
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_ERROR,
)<any>();

const authAction = {
  authLogin,
};
export default authAction;
