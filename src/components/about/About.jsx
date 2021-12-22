import React from "react";
import moment from "moment";
import { RiMapPin2Fill } from "react-icons/ri";
import { FaBirthdayCake, FaCalendarCheck } from "react-icons/fa";

import CreateProfile from "../createProfile/CreateProfile";

function About({ profile }) {
  return profile !== null ? (
    <div className="about">
      <div className="start">
        <h2>{profile.user.name}</h2>
      </div>
      <div className="bio">{profile.bio}</div>
      <div className="user-info">
        <span>
          <RiMapPin2Fill />
          {profile.city}, {profile.state}
        </span>
        <span>
          <FaBirthdayCake />
          {moment(profile.user.birthday).format("MMM Do YYYY")}
        </span>
        <span>
          <FaCalendarCheck />
          {moment(profile.user.dateJoined).format("MMM Do YYYY")}
        </span>
      </div>
    </div>
  ) : (
    <CreateProfile />
  );
}

export default About;
