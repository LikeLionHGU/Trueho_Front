import React from "react";
import "../components/styles/usercard.css";

function usercard({ name, major, jobTitle, profileImage }) {
  return (
    <div className="user-card">
      <img src={profileImage} alt={`${name} profile`} className="user-profile" />
      <h3>{name}</h3>
      <p>{major}</p>
      <h4>{jobTitle}</h4>
    </div>
  );
}

export default usercard;
