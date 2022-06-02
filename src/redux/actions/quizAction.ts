import { action, createAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

import {} from 'Types/quizTypes';
import { ErrorInfo } from 'react';

import { QuizResultType, QuizActionType } from 'Types/quizTypes';

// SAVE_QUIZ Action
export const SAVE_QUIZ = 'quiz/SAVE_QUIZ' as const;
export const saveQuiz = createAction(SAVE_QUIZ)<QuizResultType>();

export const quizConstants = {
  SAVE_QUIZ,
};

const quizAction = {
  saveQuiz,
};
export default quizAction;
