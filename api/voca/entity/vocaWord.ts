import { VocaEntity } from './voca';
import { WordEntity } from 'api/quiz/entity/word';

export interface VocaWordEntity {
  // 단어장 단어 ID
  vocaWord_id: string;

  // 단어장 ID
  voca_id: VocaEntity;

  // 단어 ID
  word_id: WordEntity;

  // 라벨
  label: number;
}
