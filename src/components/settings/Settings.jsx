import React from "react";

import { deleteProfile } from "../../actions/profile";

import "./Settings.css";

function Settings() {
	return (
		<div className="settings">
			<header>
				<h1>User Settings</h1>
			</header>
			<div className="option">
				<h2>Want to delete your account?</h2>
				<p>Warning this is a permanent action!!!</p>
				<button onClick={() => deleteProfile()}>Delete</button>
			</div>
		</div>
	);
}

export default Settings;
