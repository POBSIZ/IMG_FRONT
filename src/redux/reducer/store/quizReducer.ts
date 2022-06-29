import { createReducer } from 'typesafe-actions';
// import { createReducer } from 'redux-immutablejs';
import { Map, List, fromJS, Record } from 'immutable';
import { QuizReducerType, QuizActionType } from 'Types/quizTypes';
import { SAVE_QUIZ } from 'Actions/quizAction';

// const initialState = Map<QuizReducerType>;
const initialState: QuizReducerType = {
  result: {
    title: '',
    id: NaN,
    list: [],
    corrCount: 0,
  },
};

const quizReducer = createReducer<any>(initialState, {
  [SAVE_QUIZ]: (state: QuizReducerType, action: QuizActionType) => {
    // console.log(state.result);
    return {
      ...state,
      result: {
        ...state.result,
        title: action.payload.title,
        id: action.payload.id,
        list: action.payload.list,
        corrCount: action.payload.corrCount,
      },
    };
  },
});

export default quizReducer;
