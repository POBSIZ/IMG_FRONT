import { QuizReducerType } from 'Types/quizTypes';
import { SetStateType } from 'Types';

export interface QuizResultTemplatePropsType {}

export interface QuizResultComponentPropsType {
  isWrong: boolean;
  setIsWrong: Function;
  getAudio: (_word: string) => any;
  quizResultState: QuizReducerType;
  resultList: any;
}
