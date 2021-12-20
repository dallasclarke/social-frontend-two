import React from "react";
import moment from "moment";

function Post({ name, date, text }) {
  return (
    <div className="post">
      <h1>{name}</h1>
      <h2>{moment(date).format("LLL")}</h2>
      <p>{text}</p>
    </div>
  );
}

export default Post;
