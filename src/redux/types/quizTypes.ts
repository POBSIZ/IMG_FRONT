import { ActionType } from 'typesafe-actions';
import quizAction from 'Actions/quizAction';
import { AnswerListItem } from 'Templates/quiz/play/quizPlay.types';

// Quiz Result Reducer Types
export interface QuizResultType {
  title: string;
  id: number | string;
  list: AnswerListItem[];
  corrCount: number;
}

// Quiz Reducer Types
export interface QuizReducerType {
  result: QuizResultType;
}

// Quiz Action Types
export interface QuizActionType {
  payload: QuizResultType;
}

export type quizActionType = ActionType<typeof quizAction>;
