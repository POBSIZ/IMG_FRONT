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
  user_id: number; // 회원 ID
  chain_id: number; // 연결 ID
  name: string; // 이름
  nickname: string; // 닉네임
  phone: string; // 전화번호
  role: 'student' | 'parents' | 'insider' | 'admin'; // 권한
  created_at: Date | null; // 생성일
  school: string; // 학교
  grade: string; // 학년
  class_id: number; // 반 ID
  address: string; // 주소
  zip: string; // 우편번호
  address_detail: string; // 상세 주소
  academy_id: number; // 학원 ID
}

export interface AuthReducerType {
  profile: AuthProfileType;
  token: string | null;
}

export type AuthActionType = ActionType<typeof authAction>;
