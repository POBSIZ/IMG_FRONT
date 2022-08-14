import { action, createAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { ErrorInfo } from 'react';

import {
  AuthLoginReqType,
  AuthLoginResType,
  AuthReducerType,
} from 'Types/authTypes';

export const AUTH_LOGIN_L = 'auth/AUTH_LOGIN' as const;
export const AUTH_LOGIN_SUCCESS = 'auth/AUTH_LOGIN_SUCCESS' as const;
export const AUTH_LOGIN_ERROR = 'auth/AUTH_LOGIN_ERROR' as const;
export const authLoginAsync = createAsyncAction(
  AUTH_LOGIN_L,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_ERROR,
)<AuthLoginReqType, AuthLoginResType, AxiosError>();

export const AUTH_LOGIN = 'auth/AUTH_LOGIN' as const;
export const authLogin = createAction(AUTH_LOGIN)<AuthReducerType>();

export const AUTH_LOGOUT = 'auth/AUTH_LOGOUT' as const;
export const authLogout = createAction(AUTH_LOGOUT)<undefined>();

export const AUTH_HEADER = 'auth/AUTH_HEADER' as const;
export const authHeader = createAction(AUTH_HEADER)<string>();

const authAction = {
  authLoginAsync,
  authLogin,
  authLogout,
  authHeader,
};
export default authAction;
