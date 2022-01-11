import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <a onClick={() => dispatch(logout())}>Logoout</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
