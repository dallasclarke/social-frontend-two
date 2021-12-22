import axios from "axios";

import { GET_PROFILE, CLEAR_PROFILE } from "./types";

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
  ({ bio, location, state }) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({ bio, location, state });
      const res = await axios.post("/api/profile", body, config);

      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })

    } catch (err) {
      console.log(err);
    }
  };
