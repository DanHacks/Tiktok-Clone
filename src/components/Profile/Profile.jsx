import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <h1>User Profile</h1>
      <p>You have no Account Here, Contact BlackHat Hacker to add you.</p>
      <button className="profile-button">Add Account</button>
      <div className="profile-stats"></div>      
    </div>
  );
}

export default Profile;
