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
import { AddWordsReq } from './types/update';

export function VocaApi() {
  // const auth = getAuth();
  const auth = useAuth();
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

      // 퀴즈 생성
      quiz: async (_vocaId: string): Promise<AxiosResponse<any>> => {
        return await Post(
          `/voca/create/quiz/${_vocaId}`,
          {},
          {
            headers: { Authorization: token },
          },
        );
      },

      // 단어장 합치기
      merge: async (_list: string[]): Promise<AxiosResponse<any>> => {
        return await Post(`/voca/merge`, _list, {
          headers: { Authorization: token },
        });
      },
    },

    update: {
      // 단어 추가
      addWords: async (_data: AddWordsReq): Promise<AxiosResponse<any>> => {
        return await Post('/voca/add/words', _data, {
          headers: { Authorization: token },
        });
      },
    },

    remove: {
      // 단어 추가
      word: async (
        _vocaWord_id: string | number,
      ): Promise<AxiosResponse<any>> => {
        return await Delete(`/voca/remove/word/${_vocaWord_id}`, {
          headers: { Authorization: token },
        });
      },

      // 퀴즈 제거
      quiz: async (
        _vocaQuiz_id: string | number,
      ): Promise<AxiosResponse<any>> => {
        return await Delete(`/voca/remove/quiz/${_vocaQuiz_id}`, {
          headers: { Authorization: token },
        });
      },
    },
  };
}
