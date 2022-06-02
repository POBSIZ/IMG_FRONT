import { ActionType } from 'typesafe-actions';
import authAction from 'Actions/authAction';

export interface AuthReducerType {}

export type AuthActionType = ActionType<typeof authAction>;
