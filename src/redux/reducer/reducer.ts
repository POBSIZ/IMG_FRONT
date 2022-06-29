import { combineReducers } from 'redux';
// import { combineReducers } from 'redux-immutablejs';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import storage from 'redux-persist/lib/storage/session';

import { all } from 'redux-saga/effects';

import Sagas from '../sagas';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer'],
  // blacklist: [],
};

import testReducer from './store/testReducer';
import toastReducer from './store/toastReducer';
import quizReducer from './store/quizReducer';
import authReducer from './store/authReducer';

const rootReducer = combineReducers({
  testReducer,
  toastReducer,
  quizReducer,
  authReducer,
});

export default persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all(Sagas);
}
