import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/styles/usercard.css";

function UserCard({ user }) {
  const navigate = useNavigate();

  if (!user) {
    return null; // user가 undefined면 렌더링하지 않음
  }

  return (
    <div className="user-card" onClick={() => navigate(`/user/${user.name}`)}>
      <img 
        src={user.imgUrl ? user.imgUrl : "/assets/Components/Profile/profileimg.svg"} 
        alt={`${user.name} profile`} 
        className="user-profile" 
        onError={(e) => { e.target.src = "/assets/Components/Profile/profileimg.svg"; }} // 오류 발생 시 기본 이미지 적용
      />
      <h3>{user.name}</h3>
      <p className="user-major">{user.major}</p>
      <h4>{user.work}</h4>
    </div>
  );
}

export default UserCard;
