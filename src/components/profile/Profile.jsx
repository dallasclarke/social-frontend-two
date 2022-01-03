import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getCurrentProfile } from "../../actions/profile";

import About from "../about/About";
import Post from "../post/Post";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user._id);
  const profile = useSelector((state) => state.profile);
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(getCurrentProfile())
  }, [dispatch, getCurrentProfile])

  const userProfile = profile.profile;
  const loading = profile.loading;
  const usersPosts = posts.filter((post) => post.user === user);

  console.log(usersPosts);

  return loading && userProfile === null ? (
    <>
      <h1>Loading...</h1>
    </>
  ) : (
    <div className="profile">
      <About profile={userProfile} />
      {usersPosts.map((post) => (
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

export default Profile;
