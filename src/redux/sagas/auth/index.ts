import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';

import { authLoginAsync, AUTH_LOGIN } from 'Actions/authAction';
import { apiPostLogin } from './api';

/**
 * AUTH LOGIN SAGA
 */
function* authLoginSaga(action: ReturnType<typeof authLoginAsync.request>) {
  try {
    const res = yield call(apiPostLogin, { ...action.payload });
    yield put(authLoginAsync.success(res));
    // console.log(res);
  } catch (error: any) {
    // console.log(error);
    yield put(authLoginAsync.failure(error));
  }
}

export function* authSaga() {
  // yield takeLatest(AUTH_LOGIN, authLoginSaga);
}

export { authSaga as default };
