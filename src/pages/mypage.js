import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/MyPage.css"; // 스타일 시트
import axios from "axios";

function MyPage() {
  const [nickname, setNickname] = useState("사용자 닉네임");
  const [isProfilePublic, setIsProfilePublic] = useState(true);
  const navigate = useNavigate();

  // 프로필 공개 토글 핸들러 (API 호출 포함)
  const handleToggle = async () => {
    const newValue = !isProfilePublic;
    // UI 먼저 업데이트
    setIsProfilePublic(newValue);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_HOST_URL}/show`,
        { showing: newValue ? 1 : 0 }, // 전송할 데이터 객체
        { headers: { "Content-Type": "application/json" } } // 옵션(헤더)
      );
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
      // 예시: 로그아웃 엔드포인트가 "/user/logout"라고 가정
      const response = await axios.post(
        `${process.env.REACT_APP_HOST_URL}/user/logout`
      );

      // axios에서는 response.ok가 없으므로 response.status를 확인합니다.
      if (response.status !== 200) {
        throw new Error("로그아웃 요청 실패");
      }

      // 응답 데이터는 response.data에 담겨있습니다.
      if (response.data.state === "Bye") {
        alert("로그아웃 성공!");
        // 로그아웃 성공 시 로그인 페이지로 이동
        navigate("/login");
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
      {/* 메인 콘텐츠 영역 */}
      <main className="mypage-main">
        {/* 가운데 큰 아이콘 (예시로 D 표시) */}
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
