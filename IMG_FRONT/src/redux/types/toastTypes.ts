import { ActionType } from 'typesafe-actions';
import toastAction, { toastConstants } from 'Actions/toastAction';

export interface ToastReducerType {
  isPop: boolean;
  status: 'default' | 'error' | 'success' | 'warning';
  message: string;
}

export interface PushToastPropsType {
  status: 'default' | 'error' | 'success' | 'warning';
  message: string;
}

export interface PayloadType {
  payload: ToastReducerType;
}

export type ToastActionType = ActionType<typeof toastAction>;
