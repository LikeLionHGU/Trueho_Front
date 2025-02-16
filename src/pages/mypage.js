import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/MyPage.css";

function MyPage() {
  const [nickname, setNickname] = useState("사용자 닉네임");
  const [isProfilePublic, setIsProfilePublic] = useState(true);
  const navigate = useNavigate();

  // 프로필 공개 토글 핸들러
  const handleToggle = async () => {
    const newValue = !isProfilePublic;
    setIsProfilePublic(newValue);

    try {
      const response = await fetch(`${process.env.REACT_APP_HOST_URL}/show`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ showing: newValue ? 1 : 0 }),
      });

      if (!response.ok) {
        throw new Error("서버 응답 오류");
      }

      console.log("프로필 공개 설정 업데이트 성공:", newValue ? 1 : 0);
    } catch (error) {
      console.error("프로필 공개 설정 업데이트 실패:", error);
      // 실패 시 UI 상태 되돌리기
      setIsProfilePublic(!newValue);
      alert("프로필 공개 설정 변경에 실패했습니다.");
    }
  };

  // 프로필 수정 버튼 핸들러
  const handleEditProfile = () => {
    alert("프로필 수정 페이지로 이동합니다.");
    // 예: navigate("/profile/edit");
  };

  // 로그아웃 버튼 핸들러 (API 호출 포함)
  const handleLogout = async () => {
    try {
      /**
       * /logout API 응답 예시 (POST):
       * {
       *   “state” : “Bye”
       * }
       * 
       * 예외 상황 예시:
       * {
       *   "state": "No login info"
       * }
       */

      // (1) 요청 바디가 필요 없다면 두 번째 인자로 null
      // (2) 세 번째 인자로 { headers, withCredentials 등 } config 객체
      const response = await axios.post(
        `${process.env.REACT_APP_HOST_URL}/logout`,
        null,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true, // 필요한 경우 쿠키/세션을 위해 사용
        }
      );

      // 서버 응답 구조: { state: "Bye" } 또는 { state: "No login info" }
      const { state } = response.data;

      if (state === "Bye") {
        alert("로그아웃 성공!");
        navigate("/login");
      } else if (state === "No login info") {
        alert("로그인 정보가 없습니다.");
      } else {
        throw new Error("예상하지 못한 로그아웃 응답");
      }
    } catch (error) {
      console.error("로그아웃 처리 오류:", error);
      alert("로그아웃 처리에 실패했습니다.");
    }
  };

  return (
    <div className="mypage-container">
      <main className="mypage-main">
        <div className="profile-icon">D</div>
        <h2 className="nickname">{nickname}</h2>

        <div className="profile-toggle">
          <span>프로필 공개하기</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={isProfilePublic}
              onChange={handleToggle}
            />
            <span className="slider round"></span>
          </label>
          <span className="toggle-state">{isProfilePublic ? "ON" : "OFF"}</span>
        </div>

        <div className="button-group">
          <button className="profile-edit-button" onClick={handleEditProfile}>
            프로필 수정하기
          </button>
          <button className="logout-button" onClick={handleLogout}>
            로그아웃
          </button>
        </div>
      </main>
    </div>
  );
}

export default MyPage;
