import { createReducer } from 'typesafe-actions';
// import { createReducer } from 'redux-immutablejs';
import { Map, List, fromJS, Record } from 'immutable';
import {
  ToastReducerType,
  ToastActionType,
  PayloadType,
} from 'Types/toastTypes';
import { PUSH_TOAST_SUCCESS, INIT_TOAST } from 'Actions/toastAction';

const initialState = {
  isPop: false,
  status: 'default',
  message: '',
};

const toastReducer = createReducer<any>(initialState, {
  [PUSH_TOAST_SUCCESS]: (state, action: PayloadType) => {
    return {
      ...state,
      isPop: true,
      status: action.payload.status,
      message: action.payload.message,
    };
  },
  [INIT_TOAST]: (state, action) => {
    return {
      ...state,
      isPop: false,
    };
  },
});

export default toastReducer;
