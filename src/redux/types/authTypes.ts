import { ActionType, PayloadAction } from 'typesafe-actions';
import authAction from 'Actions/authAction';

export interface AuthLoginResType {
  username: string;
  password: string;
}

export interface AuthLoginReqType {
  username: string;
  password: string;
}

export type ApiPostLoginParamType = AuthLoginReqType;

export interface ApiPostLoginResType {
  payload: AuthLoginReqType;
}

export interface AuthProfileType {
  name: string | null;
  school: string | null;
  grade: string | null;
  phone: string | null;
  role: 'student' | 'admin';
}

export interface AuthReducerType {
  profile: AuthProfileType;
  token: string | null;
}

export type AuthActionType = ActionType<typeof authAction>;
