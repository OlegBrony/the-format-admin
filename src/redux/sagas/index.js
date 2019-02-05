import { all } from 'redux-saga/effects';

import {watchSignInSaga} from './signIn';

export default function* () {
  yield all([
    watchSignInSaga(),
  ]);
}
