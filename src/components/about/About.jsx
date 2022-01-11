import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { RiMapPin2Fill } from "react-icons/ri";
import { FaBirthdayCake, FaCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

function About({ profile }) {
  // const userName = useSelector((state) => state.auth.user.name)
  // console.log("profile =>", profile);

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
    // <CreateProfile />
    <>
      <h3>You have not setup a profile, lets add your info!</h3>
      <Link to="/create-profile">Create Profile</Link>
    </>
  );
}

export default About;
