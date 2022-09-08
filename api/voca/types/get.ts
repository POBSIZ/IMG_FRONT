import { VocaWordEntity } from '../entity/vocaWord';

// 단어장 불러오기 타입
export interface GetVocaListRes {
  // 단어장 ID
  voca_id: number;

  // 유저 ID
  user_id: number;

  // 단어장 이름
  name: string;

  // 단어장 원문
  origin: string;

  // 생성일
  created_at: Date | string;
}

// 단어 불러오기 타입 - REQ
export interface GetWordsReq {
  name: string;
  labels: [string, number][];
  word_list: [string, number][];
  origin: string;
}

// 단어 불러오기 타입 - RES
export interface GetWordsRes {
  word: string;
  phonetic: string;
  meaning: string;
  label: [string, number];
}

// 단어장 단어 불러오기 타입 - RES
export interface GetWordsByIdRes {
  name: string;
  origin: string;
  created_at: Date;
  voca_id: number;
  word_list: VocaWordEntity[];
  has_quiz: boolean;
}
