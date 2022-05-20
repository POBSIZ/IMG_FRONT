// import ( createReducer } from 'typesafe-actions';
import { createReducer } from 'redux-immutablejs';
import { Map, List, fromJS, Record } from 'immutable';
import {
  ToastReducerType,
  ToastActionType,
  PayloadType,
} from 'Types/toastTypes';
import { PUSH_TOAST_SUCCESS, INIT_TOAST } from 'Actions/toastAction';

const initialState = Map({
  isPop: false,
  status: 'default',
  message: '',
});

const toastReducer = createReducer<any>(
  initialState,
  {
    [PUSH_TOAST_SUCCESS]: (state, action: PayloadType) => {
      return state.merge({
        isPop: true,
        status: action.payload.status,
        message: action.payload.message,
      });
    },
    [INIT_TOAST]: (state, action) => {
      return state.merge({
        isPop: false,
      });
    },
  },
);

export default toastReducer;
