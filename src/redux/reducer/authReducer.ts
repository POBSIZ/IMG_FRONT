import { createReducer } from 'typesafe-actions';
import { QuizReducerType, QuizActionType } from 'Types/quizTypes';
import { SAVE_QUIZ } from 'Actions/quizAction';

const initialState: QuizReducerType = {
  result: {
    title: '',
    id: NaN,
    list: [],
  },
};

const authReducer = createReducer<any>(initialState, {
  [SAVE_QUIZ]: (state: QuizReducerType, action: QuizActionType) => {
    console.log(state.result);
    return {
      ...state,
      result: {
        ...state.result,
        title: action.payload.title,
        id: action.payload.id,
        list: action.payload.list,
      },
    };
  },
});

export default authReducer;
