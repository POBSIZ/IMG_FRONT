import { AxiosResponse } from 'axios';
import { Get, Patch, Post, Delete } from 'Utils';
import { getAuth } from 'Utils';

export function UserApi() {
  const auth = getAuth();
  const token = `Bearer ${auth.token}`;

  return {
    get: {},

    create: {},

    remove: {
      // 내 단어장 모두 불러오기
      user: async (_uid): Promise<AxiosResponse<any>> => {
        return await Delete(`/auth/remove/${_uid}`, {
          headers: { Authorization: token },
        });
      },
    },
  };
}
