import { createReducer } from 'typesafe-actions';

import { AuthReducerType, AuthActionType } from 'Types/authTypes';
import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN,
  AUTH_LOGOUT,
} from 'Actions/authAction';

const initialState: AuthReducerType = {
  profile: {
    user_id: NaN, // 회원 ID
    name: '', // 이름
    nickname: '', // 닉네임
    phone: '', // 전화번호
    created_at: null, // 생성일
    school: '', // 학교
    grade: '', // 학년
    class_id: NaN, // 반 ID
    address: '', // 주소
    zip: '', // 우편번호
    address_detail: '', // 상세 주소
    academy_id: NaN, // 학원 ID
    role: 'student', //권한
    // academy_name: '',
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
