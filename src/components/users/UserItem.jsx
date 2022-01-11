import React from "react";

function UserItem({ user }) {
  return (
    <div>
      <h1>{user.user.name}</h1>
      <p>{user.city}, {user.state}</p>
    </div>
  );
}

export default UserItem;
