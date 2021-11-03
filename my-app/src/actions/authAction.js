import userApi from "../helpers/userApi";

import {
  LOGIN,
  CHECK_SESSION,
  LOGOUT,
  USER_LOADING,
  ERROR_LOGIN,
  ERROR_SIGNUP,
} from "../reducers/types";

export const signUp = (form, props) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOADING });
    const response = await userApi.signUp(form);
    localStorage.setItem("token", response.headers.authorization);
    dispatch({ type: LOGIN, payload: response.data });
    props.history.push("/");
  } catch (error) {
    if (error.response) {
      dispatch({ type: ERROR_SIGNUP, payload: error.response.data });
    } else {
      dispatch({ type: ERROR_SIGNUP, payload: error });
    }
  }
};

export const login = (form, { props, login }) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOADING });
    const response = await userApi.login(form, login);
    localStorage.setItem("token", response.data.login.token);
    dispatch({ type: LOGIN, payload: response.data });
    userApi.requestHeaders();
    props.history.push("/");
  } catch (error) {
    console.log(error);
    dispatch({
      type: ERROR_LOGIN,
      payload: "Usuario o contraseña incorrectos",
    });
  }
};

export const checkSession = (data) => async (dispatch) => {
  if (localStorage.token) {
    try {
      dispatch({ type: USER_LOADING });
      const response = await userApi.checkSession(data);
      dispatch({ type: CHECK_SESSION, payload: response });
    } catch (error) {
      console.log(error);
      if (error.response) {
        dispatch({ type: ERROR_LOGIN, payload: error.response.data.data });
      } else {
        dispatch({ type: ERROR_LOGIN, payload: error });
      }
    }
  }
};

export const logOut = () => async (dispatch) => {
  console.log("Cerrando sesión");
  dispatch({ type: USER_LOADING });
  localStorage.removeItem("token");
  localStorage.setItem("logged", false);
  dispatch({ type: LOGOUT });
};
