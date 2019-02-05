import { delay }                 from 'redux-saga';
import { put, takeLatest, call } from 'redux-saga/effects';
import { actionTypes }           from '../actions/signIn';
import axios                     from 'axios';


function* signInSaga(action) {
  const userToken = yield call(axios.post, 'http://localhost:8000/admin/login', {
    email: action.payload.login,
    password: action.payload.password,
  });
  if (userToken.data === 'enter valid email or password') {
    console.log('call \'userSignInError\'');
  } else {
    console.log('call \'userSignInSuccess\'');
    window.localStorage.setItem('userToken', userToken.data);
  }

  yield put({
    type: actionTypes.USER_SIGN_IN_SUCCESS,
    payload: userToken.data,
  });
}

function* watchSignInSaga() {
  yield takeLatest(actionTypes.USER_SIGN_IN_SUBMIT, signInSaga);
}

export { signInSaga, watchSignInSaga };
