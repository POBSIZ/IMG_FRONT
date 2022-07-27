import { SetStateType } from 'Types';
import { QuizResultType } from 'Types/quizTypes';

export interface QuizResultComponentPropsType {
  isWrong: boolean;
  setIsWrong: Function;
  getAudio: (_word: string) => any;
  result: QuizResultType;
}

export interface QuizResultTemplatePropsType
  extends Omit<QuizResultComponentPropsType, 'isWrong' | 'setIsWrong'> {}
