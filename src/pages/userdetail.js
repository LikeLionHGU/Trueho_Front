import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../components/styles/userDetail.css";

function UserDetail({ users }) {
  const { name } = useParams();
  const navigate = useNavigate();

  const user = users.find(user => user.name === name);

  if (!user) {
    return (
      <div className="not-found">
        <h2>사용자를 찾을 수 없습니다.</h2>
        <button onClick={() => navigate(-1)}>뒤로 가기</button>
      </div>
    );
  }

  return (
    <div className="user-detail">
      <div className="profile-section">
        <img src={user.profileImage} alt={`${user.name} profile`} className="profile-image" />
        <div className="user-info">
          <h1>{user.name}</h1>
          <p className="user-major">{user.major}</p>
          <p>{user.years} 재학</p>
        </div>
        <button className="message-button">메시지 보내기</button>
      </div>

      <div className="job-section">
        <h2>직무</h2>
        <h3>{user.jobTitle}</h3>
      </div>

      <div className="achievements-section">
        <h2>대표 이력</h2>
        {user.achievements.map((achieve, index) => (
          <div key={index} className="achievement">
            <span>{achieve}</span>
          </div>
        ))}
      </div>

      <button className="back-button" onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
}

export default UserDetail;
