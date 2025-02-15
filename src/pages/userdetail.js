import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Accordion from "../components/Accordion";
import "../components/styles/userDetail.css";
import defaultProfileImg from "../assets/Components/Profile/profileimg.svg";

function UserDetailPage() {
  // URL 파라미터에서 userId를 받아온다고 가정 (예: /profile/123)
  // 만약 라우터 설정이 /profile/:userId 라면 { userId }로 받아야 함
  const { userId } = useParams();

  const [user, setUser] = useState(null);    // 사용자 정보
  const [loading, setLoading] = useState(true);  // 로딩 상태

  // 모달 상태 & 메시지 상태
  const [showModal, setShowModal] = useState(false);
  const [messageText, setMessageText] = useState("");

  /**
   * 하나의 파일에 합친 fetchUserData 함수.
   * /profile/list/:userId 경로로 GET 요청을 보내고,
   * 성공하면 사용자 데이터를 반환한다.
   */
  async function fetchUserData(userId) {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_URL}/hansum/profile/:userId`,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      return response.data; // 단일 객체 또는 배열(실제 백엔드 응답 형식 확인)
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null; // 에러 발생 시 null 반환
    }
  }

  /**
   * 컴포넌트가 마운트되거나 userId가 바뀔 때마다 사용자 정보를 가져온다.
   */
  useEffect(() => {
    async function getUserDetail() {
      try {
        if (!userId) {
          // userId가 없으면 사용자 없음 처리
          setUser(null);
          setLoading(false);
          return;
        }

        const data = await fetchUserData(userId);

        // 만약 백엔드가 배열을 반환한다면,
        // const foundUser = data.find((u) => u.id === Number(userId));
        // setUser(foundUser || null);

        // 여기서는 단일 객체라고 가정
        setUser(data);
      } catch (error) {
        console.error("유저 상세정보 불러오기 오류:", error);
      } finally {
        setLoading(false);
      }
    }

    getUserDetail();
  }, [userId]);

  // 로딩 중이면 "로딩 중..." 메시지
  if (loading) return <h2>로딩 중...</h2>;

  // user 정보가 없으면 "해당 사용자를 찾을 수 없습니다."
  if (!user) return <h2>해당 사용자를 찾을 수 없습니다.</h2>;

  // --------------------- 데이터 가공 예시들 ---------------------
  const studyText = user.admission && user.graduation
    ? `${user.admission} ~ ${user.graduation}`
    : "";

  const profileImage = user.imgUrl && user.imgUrl.trim() !== ""
    ? user.imgUrl
    : defaultProfileImg;

  const jobText = user.work || "";

  const taglineText = user.tagline && user.tagline.trim() !== ""
    ? user.tagline
    : user.generation
    ? user.generation
    : user.name;

  // 경력/수상 내역이 배열이라고 가정
  const experienceSection = user.history && user.history.length > 0 && (
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

  // --------------------- 모달 관련 함수 ---------------------
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setMessageText("");
  };

  // 메시지 전송 (fetch 예시 - axios 써도 무방)
  const handleSendMessage = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_HOST_URL}/chat/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ message: messageText })
        }
      );
      if (!response.ok) {
        throw new Error("메시지 전송 실패");
      }
      alert("메시지가 전송되었습니다!");
      handleCloseModal();
    } catch (error) {
      console.error("메시지 전송 에러:", error);
      alert("메시지 전송에 실패했습니다.");
    }
  };

  // --------------------- 실제 UI 렌더링 부분 ---------------------
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
          <button className="message-button" onClick={handleOpenModal}>
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

      {/* 모달 */}
      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // 모달 안쪽 클릭 시 닫히지 않도록
          >
            <h2>{user.name}님에게 메시지 보내기</h2>
            <textarea
              placeholder="메시지 내용을 입력하세요."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
            />
            <div className="modal-buttons">
              <button onClick={handleSendMessage}>메시지 보내기</button>
              <button onClick={handleCloseModal}>닫기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDetailPage;