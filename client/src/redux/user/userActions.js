import { contants } from "./../types";
import axios from "axios";
import Swal from "sweetalert2";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: contants.USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:8080/api/users/login",
      {
        email,
        password,
      },
      config
    );

    dispatch({
      type: contants.USER_LOGIN_SUCCESS,
      payload: data,
    });

    Swal.fire({
      icon: "success",
      title: "Success",
      text: "You are logged in",
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: contants.USER_LOGIN_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
    Swal.fire({
      icon: "error",
      title: "Oops!!!",
      text: "Something went wrong",
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: contants.USER_LOGOUT });
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: contants.USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:8080/api/users/register",
      { name, email, password },
      config
    );

    dispatch({
      type: contants.USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: contants.USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: contants.USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updatePassword = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: contants.USER_PASSWORDCHANGE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.patch(
      `http://localhost:8080/api/users/changepassword`,
      user,
      config
    );

    dispatch({
      type: contants.USER_PASSWORDCHANGE_SUCCESS,
      payload: data,
    });
    Swal.fire({
      icon: "success",
      title: "Success",
      text: data,
    });
  } catch (error) {
    dispatch({
      type: contants.USER_PASSWORDCHANGE_FAIL,
      payload:
        error.response && error.response.data ? error.response.data : error,
    });
  }
};
