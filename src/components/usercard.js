import React from "react";
import defaultProfileImg from "../assets/Components/Profile/profileimg.svg";
import "../components/styles/usercard.css";

function UserCard({ user }) {
  if (!user) return null;

  // 프로필 이미지
  const profileImage = user.imgUrl && user.imgUrl.trim() !== ""
    ? user.imgUrl
    : defaultProfileImg;

  // 직무 (없으면 표시 안 함)
  const jobText = user.work || "";

  // 재학 기간
  const studyText = (user.admission && user.graduation)
    ? `${user.admission} ~ ${user.graduation}`
    : "";

  // 경력/수상 (배열)
  const achievementList = Array.isArray(user.history) && user.history.length > 0 
    ? user.history.map((item, idx) => (
        <li key={idx}>{item.name}: {item.detail}</li>
      ))
    : null;

  // 관심 등록 버튼 (별도 이벤트)
  const handleFavoriteClick = (e) => {
    e.preventDefault(); // Link 클릭 방지
    e.stopPropagation(); 
    alert("관심 등록!");
  };

  return (
    <div className="user-card">
      {/* 헤더 */}
      <div className="user-card-header">
        <img className="hansum-profile-icon" src={profileImage} alt="Profile" />
        <div className="user-card-header-text">
          <h2 className="user-name">{user.name}</h2>
          {user.major && <p className="user-major">{user.major}</p>}
        </div>
      </div>

      {/* 바디 (2줄 제한) */}
      <div className="user-card-body">
        {jobText && <h3 className="user-job">{jobText}</h3>}
        {studyText && <p className="study-period">{studyText}</p>}
        {achievementList && <ul className="achievement-list">{achievementList}</ul>}
      </div>

      {/* 푸터 */}
      <div className="user-card-footer">
        <button className="favorite-button" onClick={handleFavoriteClick}>
          관심 ♡
        </button>
      </div>
    </div>
  );
}

export default UserCard;
