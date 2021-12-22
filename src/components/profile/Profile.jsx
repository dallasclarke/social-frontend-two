import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getCurrentProfile } from "../../actions/profile";

import About from "../about/About";

function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getCurrentProfile())
  }, [dispatch, getCurrentProfile])

  const userProfile = profile.profile;
  const loading = profile.loading;

  return loading && userProfile === null ? (
    <>
      <h1>Loading...</h1>
    </>
  ) : (
    <div className="profile">
      <About profile={userProfile} />
    </div>
  )
}

export default Profile;
