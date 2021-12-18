import {
  USER_LOADED,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  isAuth: null,
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuth: true,
        loading: false,
        user: action.payload,
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        loading: false,
      };

    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuth: false,
        loading: false,
      };

    default:
      return state;
  }
}
