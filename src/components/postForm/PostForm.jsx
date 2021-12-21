import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addPost } from "../../actions/posts";

import "./PostForm.css";

function PostForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ text }));
    setText("");
  };

  return (
    <div className="post-form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <textarea
          name="text"
          value={text}
          onChange={(e) => handleChange(e)}
          required
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default PostForm;
