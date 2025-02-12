import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/styles/usercard.css";
// import profilelogo from "../components/Profile/profilelogo.png";

function UserCard({ name, major, jobTitle, profilelogo }) {
  const navigate = useNavigate();

  return (
    <div className="user-card" onClick={() => navigate(`/user/${name}`)}>
      <img src={profilelogo} alt={`${name} profile`} className="user-profile" />
      <h3>{name}</h3>
      <p className="user-major">{major}</p>
      <h4>{jobTitle}</h4>
    </div>
  );
}

export default UserCard;
