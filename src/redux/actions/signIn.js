export const actionTypes = {
  USER_SIGN_IN_SUBMIT: 'USER_SIGN_IN_SUBMIT',
  USER_SIGN_IN_SUCCESS: 'USER_SIGN_IN_SUCCESS',
  USER_SIGN_IN_ERROR: 'USER_SIGN_IN_ERROR',
  INIT_JWT_VALIDATION: 'INIT_JWT_VALIDATION',
  INIT_JWT_VALIDATION_SUCCESS: 'INIT_JWT_VALIDATION_SUCCESS',
  INIT_JWT_VALIDATION_ERROR: 'INIT_JWT_VALIDATION_ERROR',
};

export const userSignInSubmit = (login, password) => ({
  type: actionTypes.USER_SIGN_IN_SUBMIT,
  payload: {
    login, password,
  },
});
export const userSignInSuccess = (data) => ({
  type: actionTypes.USER_SIGN_IN_SUCCESS,
  payload: data,
});
export const userSignInError = (data) => ({
  type: actionTypes.USER_SIGN_IN_ERROR,
  payload: data,
});

export const initJWTValidation = () => ({
  type: actionTypes.INIT_JWT_VALIDATION
})

export const initJWTValidationSuccess = () => ({
  type: actionTypes.INIT_JWT_VALIDATION_SUCCESS
});
export const initJWTValidationError = () => ({
  type: actionTypes.INIT_JWT_VALIDATION_ERROR
});
