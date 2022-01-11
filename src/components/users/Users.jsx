import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfiles } from "../../actions/profile";

import "./Users.css";

function Users() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfiles());
  }, [getProfiles]);

  return (
    <div>
      <h1>Users</h1>
    </div>
  );
}

export default Users;
