import { put, takeLatest, call } from 'redux-saga/effects';
import { actionTypes }           from '../actions/signIn';
import axios                     from 'axios';


function* initJWTValidationSaga(action) {
  const token = yield call(window.localStorage.getItem, 'userToken');

  const user = JSON.parse(atob(token.split('.')[1])).user;

  yield put({
    type: actionTypes.INIT_JWT_VALIDATION_SUCCESS,
    payload: token,
  });
}

function* watchInitJWTValidationSaga() {
  yield takeLatest(actionTypes.INIT_JWT_VALIDATION, initJWTValidationSaga);
}

export { initJWTValidationSaga, watchInitJWTValidationSaga };
