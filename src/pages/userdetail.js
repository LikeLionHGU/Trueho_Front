import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Accordion from "../components/Accordion";
import "../components/styles/userDetail.css";
import defaultProfileImg from "../assets/Components/Profile/profileimg.svg";

const UserDetailPage = () => {
  const { name } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ------------------- 추가된 코드 시작 (모달 상태 & 메시지 텍스트) -------------------
  const [showModal, setShowModal] = useState(false);
  const [messageText, setMessageText] = useState("");
  // ------------------- 추가된 코드 끝 -------------------

  useEffect(() => {
    async function fetchUserDetail() {
      try {
        axios.get(`${process.env.REACT_APP_HOST_URL}/hansum/profile/{id}`);
        if (!response.ok) {
          throw new Error("데이터 로딩 실패");
        }
        const data = await response.json();
        console.log("받은 사용자 데이터:", data);
        const foundUser = data.find((u) => u.name === name);
        setUser(foundUser || null);
      } catch (error) {
        console.error("유저 상세정보 불러오기 오류:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchUserDetail();
  }, [name]);

  if (loading) return <h2>로딩 중...</h2>;
  if (!user) return <h2>해당 사용자를 찾을 수 없습니다.</h2>;

  // 재학기간: admission과 graduation을 조합 (예: "2012 ~ 2016")
  const studyText =
    user.admission && user.graduation ? `${user.admission} ~ ${user.graduation}` : "";

  // 프로필 이미지: user.imgUrl이 존재하고 빈 문자열이 아니면 사용, 아니면 기본 이미지 사용
  const profileImage =
    user.imgUrl && user.imgUrl.trim() !== "" ? user.imgUrl : defaultProfileImg;

  // 직무: 새 API 명세에서는 work 필드를 사용
  const jobText = user.work ? user.work : "";

  // 태그라인: tagline이 있으면 사용, 없으면 generation(없으면 이름)
  const taglineText =
    user.tagline && user.tagline.trim() !== ""
      ? user.tagline
      : user.generation
      ? user.generation
      : user.name;

  // 경력/수상 내역: 새 API 명세에서는 history 배열 사용
  const experienceSection =
    user.history && user.history.length > 0 ? (
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
    ) : null;

  // ------------------- 추가된 코드 시작 (모달 열기/닫기 & 메시지 전송) -------------------
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setMessageText("");
  };

  const handleSendMessage = async () => {
    try {
      // 예: /chat/이영희 형태로 POST 요청 (user.name을 id로 사용)
      axios.post(`${process.env.REACT_APP_HOST_URL}/chat/${user.name}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: messageText })
      });
      if (!response.ok) {
        throw new Error("메시지 전송 실패");
      }
      alert("메시지가 전송되었습니다!");
      setShowModal(false);
      setMessageText("");
    } catch (error) {
      console.error("메시지 전송 에러:", error);
      alert("메시지 전송에 실패했습니다.");
    }
  };
  // ------------------- 추가된 코드 끝 -------------------

  return (
    <div className="user-detail-page">
      <div className="user-detail-container">
        <div className="detail-top">
          <div className="detail-left">
            <img className="profile-icon" src={profileImage} alt="Profile" />
          </div>
          <div className="detail-info">
            <h2 className="name">{name}</h2>
            {studyText && <p className="study-period">{studyText}</p>}
          </div>
          {/* 메시지 보내기 버튼에 모달 열기 핸들러 연결 */}
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

      {/* ------------------- 추가된 코드 시작 (모달 UI) ------------------- */}
      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
      {/* ------------------- 추가된 코드 끝 ------------------- */}
    </div>
  );
};

export default UserDetailPage;
