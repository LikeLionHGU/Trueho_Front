import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Accordion from "../components/Accordion"; // 경력/수상 표시용 (없으면 주석 처리)
import defaultProfileImg from "../assets/Components/Profile/profileimg.svg"; // 기본 프로필 이미지
import "../components/styles/userDetail.css"; // 아래 CSS 파일

import chatBot from "../assets/Components/ChatBot/Chatbot.svg";
import ChatBotModal from "../components/chatBot/ChatBot";

function UserDetailPage() {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 메시지 모달 상태
  const [showModal, setShowModal] = useState(false);
  const [messageText, setMessageText] = useState("");

  // 0) 챗봇 모달
  const [chatBotModalOpen, setChatBotModalOpen] = useState(false);
  const openChatBotModal = () => setChatBotModalOpen(true);
  const closeChatBotModal = () => {
    setChatBotModalOpen(false);
    document.body.style.removeProperty("overflow");
  };

  const chatBotModalClick = () => {
    openChatBotModal();
    document.body.style.overflow = "hidden";
  };

  // 1) 사용자 단일 정보 GET (프로필)
  async function fetchUserData(userId) {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_URL}/hansum/profile/${userId}`,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      return response.data; // 예: { id, name, major, admission, graduation, work, history: [...] }
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

  // 2) 메시지 전송 로직
  const handleSendMessage = async () => {
    try {
      // 예시: POST /hansum/chat/{userId} with { message: messageText }
      const response = await axios.post(
        `${process.env.REACT_APP_HOST_URL}/hansum/chat/${userId}`,
        { message: messageText },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const data = response.data;
      console.log("메시지 전송 성공:", data);
      // 모달 닫고, 입력값 초기화
      setShowModal(false);
      setMessageText("");

      // 채팅방으로 이동 (응답에 chatRoomId가 있다고 가정)
      if (data.chatRoomId) {
        navigate(`/chatroom/${data.chatRoomId}`);
      }
    } catch (error) {
      console.error("메시지 전송 에러:", error);
      alert("메시지 전송에 실패했습니다.");
    }
  };

  // 로딩 처리
  if (loading) return <h2>로딩 중...</h2>;
  if (!user) {
    // 유저가 없으면 목록 등으로 이동
    navigate("/hansum");
    return null;
  }

  // ------------------ UI 데이터 가공 예시 ------------------
  const studyText =
    user.admission && user.graduation
      ? `${user.admission} ~ ${user.graduation}`
      : "";
  const profileImage =
    user.imgUrl && user.imgUrl.trim() !== "" ? user.imgUrl : defaultProfileImg;
  const jobText = user.work || "";

  // 경력/수상 내역 (Accordion 예시)
  const experienceSection =
    user.history && user.history.length > 0 ? (
      <div className="detail-achievements">
        <h3>대표 약력</h3>
        <div className="accordion-container">
          {user.history.map((item, idx) => (
            <Accordion key={idx} title={item.name}>
              <p dangerouslySetInnerHTML={{ __html: item.detail.replace(/\n/g, "<br />") }}></p>
            </Accordion>
          ))}
        </div>
      </div>
    ) : null;

  return (
    <>
      <div className="user-detail-page">
        {/* 상단 영역 (그라데이션 배경) */}
        <div className="userdetail-top-container">
          {/* 이곳에 상단 로고나 기타 내용이 필요하면 추가 */}
        </div>

        {/* 하단 영역 (흰색, 둥근 모서리, 인셋 섀도) */}
        <div className="userdetail-bottom-container">
          {/* 실제 내용 중앙 정렬 */}
          <div className="bottom-inner">
            {/* 상단 프로필/이름/메시지 버튼 */}
            <div className="detail-top">
              {/* 왼쪽 - 프로필 이미지 */}

              <div className="detail-left">
                <div className="detail-img">
                  <img
                    className="profile-icon"
                    src={profileImage}
                    alt="Profile"
                  />
                  {/* 중간 - 이름, 재학 기간 */}
                </div>

                <div className="detail-info">
                  <h2 className="name">{user.name || userId}</h2>
                  {studyText && <p className="study-period">{studyText}</p>}
                </div>

                {user.generation && (
                  <div className="user-generation">{user.generation}</div>
                )}

                <div className="user-major">{user.major}</div>
              </div>

              {/* 오른쪽 - 메시지 버튼 */}
              <div className="detail-right">
                <button
                  className="message-button"
                  onClick={() => setShowModal(true)}
                >
                  메시지 보내기
                </button>
              </div>
            </div>

            {/* 직무, 전공 */}
            <div className="detail-job">
              <h3>직무</h3>
              <div className="job-title">{jobText}</div>
            </div>

            {/* 경력/수상 내역 */}
            {experienceSection}
          </div>
        </div>

        {/* 메시지 모달 */}
        {showModal && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              {/* 모달 헤더 */}
              <div className="modal-header">
                <h2>{user.name}님</h2>
                <button
                  className="modal-close"
                  onClick={() => setShowModal(false)}
                >
                  &times;
                </button>
              </div>

              {/* 모달 바디 (텍스트 입력) */}
              <div className="modal-body">
                <textarea
                  placeholder="첫 메시지 보내기"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                />
              </div>

              {/* 모달 푸터 (버튼) */}
              <div className="modal-footer">
                <button
                  className="modal-send-button"
                  onClick={handleSendMessage}
                >
                  메시지 보내기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="chatBot" onClick={() => chatBotModalClick()}>
        <img src={chatBot} />
      </div>
      <ChatBotModal open={chatBotModalOpen} close={closeChatBotModal} />
    </>
  );
}

export default UserDetailPage;
