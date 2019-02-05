import {actionTypes} from '../actions/signIn';

const initialState = {
  isAuth: null,
  jwt: null,
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_SIGN_IN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        jwt: action.payload
      };
    case actionTypes.USER_SIGN_IN_ERROR:
      return state;
    default:
      return state;
  }
};

export default signInReducer;
