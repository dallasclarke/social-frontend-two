import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPosts } from "../../actions/posts";

import Navbar from "../navbar/Navbar";
import Post from "../post/Post";

import "./Feed.css";

function Feed() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [getPosts]);

  return (
    <div className="feed">
      <h1>Feed</h1>
      <Navbar />
      {posts.map((post) => (
        <Post
          key={post._id}
          name={post.name}
          date={post.date}
          text={post.text}
        />
      ))}
    </div>
  );
}

export default Feed;
