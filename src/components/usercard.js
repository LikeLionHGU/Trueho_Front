import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/styles/usercard.css";

function UserCard({ name, major, jobTitle, profileImage }) {
  const navigate = useNavigate();

  return (
    <div className="user-card" onClick={() => navigate(`/user/${name}`)}>
      <img src={profileImage} alt={`${name} profile`} className="user-profile" />
      <h3>{name}</h3>
      <p className="user-major">{major}</p>
      <h4>{jobTitle}</h4>
    </div>
  );
}

export default UserCard;
