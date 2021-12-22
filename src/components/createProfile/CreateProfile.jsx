import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createProfile } from "../../actions/profile";

function CreateProfile() {
  const [formData, setFormData] = useState({
    bio: "",
    city: "",
    state: "",
  });

  const { bio, city, state } = formData;

  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="create-profile">
      <h1>Lets create your new profile!</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <label>Bio:</label>
        <textarea />
        <label>City:</label>
        <input type="text" />
        <label>State/Province</label>
        <input type="text" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default CreateProfile;
