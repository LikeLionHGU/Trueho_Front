import React from "react";
import { useNavigate } from "react-router-dom";
import defaultProfileImg from "../assets/Components/Profile/profileimg.svg";
import "../components/styles/usercard.css";

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

  // 프로필 이미지: user.imgUrl이 존재하고 빈 문자열이 아니면 사용, 아니면 기본 이미지 사용
  const profileImage =
    user.imgUrl && user.imgUrl.trim() !== "" ? user.imgUrl : defaultProfileImg;

  // 재학기간: admission과 graduation 조합 (예: "2012 ~ 2016")
  const studyText =
    user.admission && user.graduation ? `${user.admission} ~ ${user.graduation}` : "";

  // 경력/수상 내역: 새 API 명세에서는 history 배열 사용
  const achievementList = user.history
    ? user.history.map((item, idx) => (
        <li key={idx}>
          <strong>{item.name}</strong>: {item.detail}
        </li>
      ))
    : null;

  // 직무: 새 API 명세에서는 work 필드를 사용
  const jobText = user.work ? user.work : "";

  return (
    <div className="user-card" onClick={handleCardClick}>
      <div className="user-card-header">
      <img className="profile-icon" src={profileImage} alt="Profile" />
      <div className="user-card-header-text">
          <h2 className="user-name">{user.name}</h2>
          <p className="user-major">{user.major}</p>
        </div>
      </div>

      <div className="user-card-body">
        <h3 className="user-job">{jobText}</h3>
        {studyText && <p className="study-period">{studyText}</p>}
        {achievementList && (
          <ul className="achievement-list">
            {achievementList}
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
