import { QuizReducerType } from 'Types/quizTypes';
import { SetStateType } from 'Types';

export interface QuizResultTemplatePropsType {}

export interface QuizResultComponentPropsType {
  isWrong: boolean;
  setIsWrong: Function;
  quizResultState: QuizReducerType;
  resultList: any;
}
