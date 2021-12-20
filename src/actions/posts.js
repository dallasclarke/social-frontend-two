import axios from "axios";

import { GET_POSTS, ADD_POST } from "./types";

export const addPost =
  ({ text }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ text });

    try {
      const res = await axios.post("/api/posts", body, config);

      dispatch({
        type: ADD_POST,
        payload: res.data,
      });
    } catch (err) {
      console.log(err.message);
    }
  };

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/posts");

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message);
  }
};
