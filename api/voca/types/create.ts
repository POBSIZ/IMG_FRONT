import { GetWordsRes } from './get';

// 단어장 생성 - REQ
export interface CreateVocaReq {
  name: string;
  labels: [string, number][];
  word_list: GetWordsRes[];
  origin: string;
}
