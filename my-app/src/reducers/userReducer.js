import {
  LOGIN,
  CHECK_SESSION,
  LOGOUT,
  USER_LOADING,
  ERROR_LOGIN,
  ERROR_SIGNUP,
} from "./types";

const INIITAL_STATE = {
  login: false,
  token: "" || localStorage.token,
  user: {},
  loading: false,
  error_login: "",
  error_signup: "",
};

const userReducer = (state = INIITAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        login: true,
        token: localStorage.token,
        user: action.payload.user,
        loading: false,
        error_login: "",
        error_signup: "",
      };
    case CHECK_SESSION:
      return {
        login: true,
        user: action.payload.login,
        loading: false,
        error_login: "",
        error_signup: "",
      };
    case LOGOUT:
      return {
        login: false,
        token: "" || localStorage.token,
        user: {},
        loading: false,
        error_login: "",
        error_signup: "",
      };
    case USER_LOADING:
      return { ...state, loading: true };
    case ERROR_LOGIN:
      return { ...state, error_login: action.payload, loading: false };
    case ERROR_SIGNUP:
      return { ...state, error_signup: action.payload, loading: false };
    default:
      return { ...state };
  }
};

export default userReducer;
