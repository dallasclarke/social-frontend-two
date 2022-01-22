import axios from "axios";

import {
  GET_PROFILE,
  CLEAR_PROFILE,
  GET_PROFILES,
  PROFILE_DELETED,
} from "./types";

export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/profile/me");

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CLEAR_PROFILE,
    });
  }
};

export const createProfile =
  ({ bio, city, state }) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({ bio, city, state });
      const res = await axios.post("/api/profile", body, config);

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

export const getProfiles = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/profile");

    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteProfile = () => async (dispatch) => {
  try {
    await axios.delete(`/api/profile`);

    dispatch({ type: CLEAR_PROFILE });
    dispatch({ type: PROFILE_DELETED });
  } catch (err) {
    console.log(err.message);
  }
};
