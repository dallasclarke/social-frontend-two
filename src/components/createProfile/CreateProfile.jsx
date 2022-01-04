import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";

import { createProfile } from "../../actions/profile";

function CreateProfile() {
  const [formData, setFormData] = useState({
    bio: "",
    city: "",
    state: "",
  });

  const { bio, city, state } = formData;

  const dispatch = useDispatch();
  const history = useHistory();

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(createProfile({ bio, city, state }));
    history.push("/profile")
  };

  return (
    <div className="create-profile">
      <h1>Lets create your new profile!</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <label>Bio:</label>
        <textarea
          name="bio"
          value={bio}
          onChange={(e) => onChange(e)}
          required
        />
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => onChange(e)}
          required
        />
        <label>State/Province</label>
        <input
          type="text"
          name="state"
          value={state}
          onChange={(e) => onChange(e)}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default CreateProfile;
