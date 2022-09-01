import { AxiosResponse } from 'axios';
import { Get, Patch, Post, Delete } from 'Utils';
import { getAuth } from 'Utils';

export function QuizApi() {
  const auth = getAuth();
  const token = `Bearer ${auth.token}`;

  return {
    get: {
      // 내 단어장 모두 불러오기
      vocaList: async (): Promise<AxiosResponse<any>> => {
        return await Get('/voca/get/all', {
          headers: { Authorization: token },
        });
      },
    },

    create: {},
  };
}
