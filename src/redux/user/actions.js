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
import axiosInstance from "../../infrastructure/axios";

export const startLoginLoading = () => {
  return {
    type: LOGIN_LOADING,
  };
};
export const startRegisterLoading = () => {
  return {
    type: REGISTER_LOADING,
  };
};
export const startForgotPasswordLoading = () => {
  return {
    type: FORGOT_PASSWORD_LOADING,
  };
};
export const startResetPasswordLoading = () => {
  return {
    type: RESET_PASSWORD_LOADING,
  };
};

export const setError = () => {
  return {
    type: ERROR,
  };
};

export const forgotPassword = () => {
  return {
    type: FORGOT_PASSWORD,
  };
};

export const loginUser = (userData) => {
  return {
    type: LOGIN,
    data: userData,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  return {
    type: LOGOUT,
  };
};

export const registerUser = () => {
  return {
    type: REGISTER,
  };
};

export const resetPassword = () => {
  return {
    type: RESET_PASSWORD,
  };
};

export const login = (payload, routeToHome, showError) => {
  return async (dispatch) => {
    dispatch(startLoginLoading());
    try {
      const res = await axiosInstance.post("/auth/login", {
        email: payload.email.trim(),
        password: payload.password,
      });
      dispatch(loginUser(res.data.data));
      localStorage.setItem("token", res.data.data.token);
      routeToHome();
    } catch (err) {
      dispatch(setError());
      if (err.response?.data?.message) {
        showError(err.response?.data?.message);
      } else {
        const errKey = Object.keys(err.response?.data.errors[0])[0];
        showError(err.response?.data.errors[0][errKey]);
      }
    }
  };
};

export const register = (payload, routeToLogin, showError) => {
  return async (dispatch) => {
    dispatch(startRegisterLoading());
    try {
      await axiosInstance.post("/auth/register", {
        email: payload.email.trim(),
        userRole: payload.userRole,
        password: payload.password,
        confirmPassword: payload.confirmPassword,
        name: payload.name.trim(),
        skills: payload.skills.trim(),
      });
      dispatch(registerUser());
      routeToLogin();
    } catch (err) {
      dispatch(setError());
      if (err.response?.data?.message) {
        showError(err.response?.data?.message);
      } else {
        const errKey = Object.keys(err.response?.data.errors[0])[0];
        showError(err.response?.data.errors[0][errKey]);
      }
    }
  };
};

export const getForgotPasswordToken = (
  payload,
  routeToResetPassword,
  showError
) => {
  return async (dispatch) => {
    dispatch(startForgotPasswordLoading());
    try {
      const res = await axiosInstance.get(
        `/auth/resetpassword?email=${payload.email}`
      );
      dispatch(forgotPassword());
      routeToResetPassword(res?.data?.data?.token);
    } catch (err) {
      dispatch(setError());
      if (err.response?.data?.message) {
        showError(err.response?.data?.message);
      } else {
        const errKey = Object.keys(err.response?.data.errors[0])[0];
        showError(err.response?.data.errors[0][errKey]);
      }
    }
  };
};

export const handleResetPassword = (payload, routeToLogin, showError) => {
  return async (dispatch) => {
    dispatch(startResetPasswordLoading());
    try {
      await axiosInstance.post(`/auth/resetpassword`, {
        password: payload.password,
        confirmPassword: payload.confirmPassword,
        token: payload.token,
      });
      dispatch(resetPassword());
      routeToLogin();
    } catch (err) {
      dispatch(setError());
      if (err.response?.data?.message) {
        showError(err.response?.data?.message);
      } else {
        const errKey = Object.keys(err.response?.data.errors[0])[0];
        showError(err.response?.data.errors[0][errKey]);
      }
    }
  };
};
