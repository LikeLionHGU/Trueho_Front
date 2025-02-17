import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Accordion from "../components/Accordion";
import "../components/styles/userDetail.css";
import defaultProfileImg from "../assets/Components/Profile/profileimg.svg";

function UserDetailPage() {
  const { userId } = useParams(); 
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 메시지 모달 상태
  const [showModal, setShowModal] = useState(false);
  const [messageText, setMessageText] = useState("");

  // (1) 사용자 단일 정보 GET
  async function fetchUserData(userId) {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_URL}/hansum/profile/${userId}`, 
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      return response.data;
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
      setUser(data);
      setLoading(false);
    }
    getUserDetail();
  }, [userId]);

  // (2) 메시지 전송 함수
  const handleSendMessage = async () => {
    try {
      // /chat/{userId}로 POST
      const response = await axios.post(
        `${process.env.REACT_APP_HOST_URL}/chat/${userId}`,
        { message: messageText },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      // 서버에서 반환 예시: { "message": "내용", "time": "22/02/06 18:00" }
      const data = response.data;
      console.log("메시지 전송 성공:", data);

      alert(`메시지 전송 성공!
내용: ${data.message}
시간: ${data.time}`);

      // 모달 닫기 & 메시지 초기화
      setShowModal(false);
      setMessageText("");
    } catch (error) {
      console.error("메시지 전송 실패:", error);
      alert("메시지 전송에 실패했습니다.");
    }
  };

  if (loading) return <h2>로딩 중...</h2>;
  if (!user) return <h2>해당 사용자를 찾을 수 없습니다.</h2>;

  // ------------------ UI ------------------
  const studyText =
    user.admission && user.graduation
      ? `${user.admission} ~ ${user.graduation}`
      : "";

  const profileImage =
    user.imgUrl && user.imgUrl.trim() !== ""
      ? user.imgUrl
      : defaultProfileImg;

  const jobText = user.work || "";

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
          {/* 메시지 모달 열기 버튼 */}
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

      {/* (3) 메시지 모달 */}
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
              <button onClick={handleSendMessage}>메시지 보내기</button>
              <button onClick={() => setShowModal(false)}>닫기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDetailPage;
