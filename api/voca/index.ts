import { AxiosResponse } from 'axios';
import { Get, Patch, Post, Delete } from 'Utils';
import { getAuth } from 'Utils';

import {
  GetVocaListRes,
  GetWordsRes,
  GetWordsReq,
  GetWordsByIdRes,
} from './types/get';

import { CreateVocaReq } from './types/create';
import { useAuth } from 'Hooks';

export function VocaApi() {
  const auth = getAuth();
  // const auth = useAuth();
  const token = `Bearer ${auth.token}`;

  return {
    get: {
      // 내 단어장 모두 불러오기
      vocaList: async (): Promise<AxiosResponse<GetVocaListRes[]>> => {
        return await Get('/voca/get/all', {
          headers: { Authorization: token },
        });
      },

      // 단어 뜻 불러오기
      words: async (
        _data: GetWordsReq,
      ): Promise<AxiosResponse<GetWordsRes[]>> => {
        return await Post('/voca/words', _data, {
          headers: { Authorization: token },
        });
      },

      // 단어장 단어 불러오기
      wordsById: async (
        _id: string | number, // 단어장 ID (voca_id)
      ): Promise<AxiosResponse<GetWordsByIdRes>> => {
        return await Get(`/voca/get/words/${_id}`, {
          headers: { Authorization: token },
        });
      },
    },

    create: {
      // 단어장 생성
      voca: async (_data: CreateVocaReq): Promise<AxiosResponse<any>> => {
        return await Post('/voca/create', _data, {
          headers: { Authorization: token },
        });
      },
    },
  };
}
