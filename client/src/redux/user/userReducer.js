import { contants } from "./../types";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case contants.USER_LOGIN_REQUEST:
      return { loading: true };
    case contants.USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case contants.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case contants.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case contants.USER_REGISTER_REQUEST:
      return { loading: true };
    case contants.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case contants.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userPassChangeReducer = (state = {}, action) => {
  switch (action.type) {
    case contants.USER_PASSWORDCHANGE_REQUEST:
      return { loading: true };
    case contants.USER_PASSWORDCHANGE_SUCCESS:
      return { loading: false, successInfo: action.payload };
    case contants.USER_PASSWORDCHANGE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
