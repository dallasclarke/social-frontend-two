import { GET_PROFILE, CLEAR_PROFILE, GET_PROFILES } from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };

    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        loading: false,
      };

    case GET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
