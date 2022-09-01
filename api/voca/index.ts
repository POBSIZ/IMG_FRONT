import { AxiosResponse } from 'axios';
import { useMethod } from 'Hooks';

import { GetVocaListRes, GetWordsRes, GetWordsReq } from './types/get';
import { CreateVocaReq } from './types/create';

export function VocaApi() {
  const method = useMethod();

  return {
    get: {
      vocaList: async (): Promise<AxiosResponse<GetVocaListRes[]>> => {
        return await method.GET('/voca/get/all');
      },
      words: async (
        _data: GetWordsReq,
      ): Promise<AxiosResponse<GetWordsRes[]>> => {
        return await method.POST('/voca/words', _data);
      },
    },

    create: {
      voca: async (_data: CreateVocaReq): Promise<AxiosResponse<any>> => {
        return await method.POST('/voca/create', _data);
      },
    },
  };
}
