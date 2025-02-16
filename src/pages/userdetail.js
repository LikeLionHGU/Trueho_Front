import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Accordion from "../components/Accordion";
import "../components/styles/userDetail.css";
import defaultProfileImg from "../assets/Components/Profile/profileimg.svg";

function UserDetailPage() {
  const { userId } = useParams(); // ★ /user/:userId 에서 userId 추출
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 모달 상태 & 메시지 상태 (필요 시)
  const [showModal, setShowModal] = useState(false);
  const [messageText, setMessageText] = useState("");

  // 백엔드에서 단일 유저 정보 가져오기
  async function fetchUserData(userId) {
    try {
      const response = await axios.get(
        // 여기서도 encodeURIComponent(userId) 사용 가능 (공백 등의 특수문자 대응)
        `${process.env.REACT_APP_HOST_URL}/hansum/profile/${userId}`, 
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      return response.data; // 단일 객체라고 가정
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  }

  useEffect(() => {
    async function getUserDetail() {
      if (!userId) {
        setUser(null);
        setLoading(false);
        return;
      }

      const data = await fetchUserData(userId);

      // ★ 백엔드가 '단일 객체'라고 가정하면 그대로 setUser
      // 예: { id: 1, name: '홍길동', major: '컴퓨터공학', ... }
      setUser(data);

      setLoading(false);
    }

    getUserDetail();
  }, [userId]);

  if (loading) return <h2>로딩 중...</h2>;

  if (!user) return <h2>해당 사용자를 찾을 수 없습니다.</h2>;

  // --------------------- 데이터 가공 예시 ---------------------
  const studyText =
    user.admission && user.graduation
      ? `${user.admission} ~ ${user.graduation}`
      : "";

  const profileImage =
    user.imgUrl && user.imgUrl.trim() !== ""
      ? user.imgUrl
      : defaultProfileImg;

  const jobText = user.work || "";

  // 경력/수상 내역이 배열이라고 가정
  const experienceSection =
    user.history && user.history.length > 0 && (
      <div className="detail-achievements">
        <h3>경력/수상 내역</h3>
        <div className="accordion-container">
          {user.history.map((item, idx) => (
            <Accordion key={idx} title={item.name}>
              <p>{item.detail}</p>
            </Accordion>
          ))}
        </div>
      </div>
    );

  return (
    <div className="user-detail-page">
      <div className="user-detail-container">
        <div className="detail-top">
          <div className="detail-left">
            <img className="profile-icon" src={profileImage} alt="Profile" />
          </div>
          <div className="detail-info">
            <h2 className="name">{user.name || userId}</h2>
            {studyText && <p className="study-period">{studyText}</p>}
          </div>
          {/* 메시지 모달 열기 버튼 예시 */}
          <button className="message-button" onClick={() => setShowModal(true)}>
            메시지 보내기
          </button>
        </div>

        <div className="detail-job">
          <h3>직무</h3>
          <div className="job-title">{jobText}</div>
          <div className="user-major">{user.major}</div>
        </div>

        {experienceSection}
      </div>

      {/* 모달 예시 */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} 
          >
            <h2>{user.name}님에게 메시지 보내기</h2>
            <textarea
              placeholder="메시지 내용을 입력하세요."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
            />
            <div className="modal-buttons">
              <button onClick={() => alert("메시지 전송 로직")}>
                메시지 보내기
              </button>
              <button onClick={() => setShowModal(false)}>닫기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDetailPage;
