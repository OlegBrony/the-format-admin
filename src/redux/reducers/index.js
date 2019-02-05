import { combineReducers } from 'redux';
import signInReducer from './signIn'

const rootReducer = combineReducers({
  signInData: signInReducer
});


export default rootReducer;
