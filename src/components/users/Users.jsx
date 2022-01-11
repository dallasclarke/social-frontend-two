import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfiles } from "../../actions/profile";

import UserItem from "./UserItem";

import "./Users.css";

function Users() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.profile.loading);
  const profiles = useSelector((state) => state.profile.profiles);

  useEffect(() => {
    dispatch(getProfiles());
  }, [getProfiles]);

  return (
    <div>
      {loading ? (
          <h1>Loading...</h1>
      ) : (
          <>
            {profiles.map((profile) => (
                <UserItem key={profile._id} user={profile} />
            ))}
          </>
      )
    }
    </div>
  );
}

export default Users;
