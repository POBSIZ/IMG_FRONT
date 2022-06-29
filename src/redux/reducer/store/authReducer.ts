import { createReducer } from 'typesafe-actions';

import { AuthReducerType, AuthActionType } from 'Types/authTypes';
import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN,
  AUTH_LOGOUT,
} from 'Actions/authAction';

const initialState: AuthReducerType = {
  profile: {
    name: null,
    school: null,
    grade: null,
    phone: null,
    role: 'student',
  },
  token: null,
};

const authReducer = createReducer<any>(initialState, {
  [AUTH_LOGIN]: (state: AuthReducerType, action) => {
    return {
      ...action.payload,
    };
  },
  [AUTH_LOGOUT]: (state: AuthReducerType, action) => {
    return {
      ...initialState,
    };
  },
});

export default authReducer;
