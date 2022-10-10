import { UserEntity } from 'api/user/entity/user';

export interface VocaEntity {
  // 단어장 ID
  voca_id: string;

  // 유저 ID
  user_id: UserEntity;

  // 단어장 이름
  name: string;

  // 단어장 원문
  origin: string;

  // 생성일
  created_at: Date;
}
