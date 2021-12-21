import React, { useState } from "react";

import "./PostForm.css";

function PostForm() {
    const [text, setText] = useState("")

  return (
    <div className="post-form">
      <form>
        <textarea />
        <input type="submit" />
      </form>
    </div>
  );
}

export default PostForm;
