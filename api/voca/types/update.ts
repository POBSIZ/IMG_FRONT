import { GetWordsRes } from './get';

// 단어 추가 - REQ
export interface AddWordsReq {
  voca_id: string;
  word_list: GetWordsRes[];
  origin: string;
}
