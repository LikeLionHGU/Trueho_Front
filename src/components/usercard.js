import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/usercard.css";

function UserCard({ user }) {
  const navigate = useNavigate();

  if (!user) return null;

  const handleCardClick = () => {
    navigate(`/user/${user.name}`);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    alert("관심 등록!");
  };

  return (
    <div className="user-card" onClick={handleCardClick}>
      <div className="user-card-header">
        <img
          src={
            user.imgUrl
              ? user.imgUrl
              : "../src/assets/Components/Profile/profileimg.svg"
          }
          alt="프로필 아이콘"
          className="profile-icon"
          onError={(e) => {
            e.target.src = "../src/assets/Components/Profile/profileimg.svg";
          }}
        />

        <div className="user-card-header-text">
          <h2 className="user-name">{user.name}</h2>
          <p className="user-major">{user.major}</p>
        </div>
      </div>

      <div className="user-card-body">
        <h3 className="user-job">{user.work}</h3>

        {user.studyPeriod && <p className="study-period">{user.studyPeriod}</p>}

        {user.achievements && user.achievements.length > 0 && (
          <ul className="achievement-list">
            {user.achievements.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="user-card-footer">
        <button className="favorite-button" onClick={handleFavoriteClick}>
          관심 ♡
        </button>
      </div>
    </div>
  );
}

export default UserCard;
