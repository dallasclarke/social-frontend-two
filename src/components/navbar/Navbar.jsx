import React from "react";
import { useDispatch } from "react-redux";

import { logout } from "../../actions/auth";

function Navbar() {
    const dispatch = useDispatch();
  return (
    <nav className="navbar">
      <ul className="nav-items">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Profile</a>
        </li>
        <li>
          <a>Users</a>
        </li>
        <li>
          <a onClick={() => dispatch(logout())}>Logoout</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
