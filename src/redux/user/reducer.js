import {
  ERROR,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_LOADING,
  LOGIN,
  LOGIN_LOADING,
  LOGOUT,
  REGISTER,
  REGISTER_LOADING,
  RESET_PASSWORD,
  RESET_PASSWORD_LOADING,
} from "./types";

const initialState = {
  loginLoading: false,
  registerLoading: false,
  forgotPasswordLoading: false,
  resetPasswordLoading: false,
  data: null,
  error: null,
};

const UserReducer = function (state = initialState, actions) {
  switch (actions.type) {
    case LOGIN_LOADING:
      return { ...state, loginLoading: true };
    case REGISTER_LOADING:
      return { ...state, registerLoading: true };
    case FORGOT_PASSWORD_LOADING:
      return { ...state, forgotPasswordLoading: true };
    case RESET_PASSWORD_LOADING:
      return { ...state, resetPasswordLoading: true };

    case LOGIN:
      return {
        ...state,
        loginLoading: false,
        data: actions.data,
        error: null,
      };

    case REGISTER:
      return {
        ...state,
        registerLoading: false,
      };

    case FORGOT_PASSWORD:
      return { ...state, forgotPasswordLoading: false };

    case RESET_PASSWORD:
      return { ...state, resetPasswordLoading: true };

    case LOGOUT:
      return {
        ...state,
        data: null,
        error: null,
        loginLoading: false,
        registerLoading: false,
        forgotPasswordLoading: false,
        resetPasswordLoading: false,
      };

    case ERROR:
      return {
        ...state,
        error: actions.data,
        loginLoading: false,
        registerLoading: false,
        forgotPasswordLoading: false,
        resetPasswordLoading: false,
      };

    default:
      return state;
  }
};

export default UserReducer;
