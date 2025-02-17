import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// 기본 프로필 이미지 (assets 폴더에 넣어둔 예시)
import defaultProfileImg from "../assets/Components/Profile/profileimg.svg";

import "../styles/MyPage.css";

// 모든 axios 요청에 대해 withCredentials 허용 (선택)
axios.defaults.withCredentials = true;

function MyPage() {
  const navigate = useNavigate();

  // 사용자 정보
  const [nickname, setNickname] = useState("사용자 닉네임");
  const [isProfilePublic, setIsProfilePublic] = useState(true);
  const [profilePic, setProfilePic] = useState(defaultProfileImg);

  const [loading, setLoading] = useState(true);

  // [1] 마운트 시 사용자 정보 GET /user/detail
  useEffect(() => {
    async function getProfile() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_HOST_URL}/user/detail`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        /**
         * 서버 응답 예시:
         * {
         *   "name": "잘생긴 라이언",
         *   "showing": 0,
         *   "pic": "img_url"
         * }
         */
        const data = response.data;
        setNickname(data.name || "사용자 닉네임");
        setIsProfilePublic(data.showing === 1); // 1이면 공개, 0이면 비공개
        setProfilePic(data.pic || defaultProfileImg);
      } catch (error) {
        console.error("사용자 정보 불러오기 실패:", error);
        alert("사용자 정보를 불러오는 데 실패했습니다.");
        // 필요 시 로그인 페이지 이동
        // navigate("/login");
      } finally {
        setLoading(false);
      }
    }
    getProfile();
  }, [navigate]);

  // [2] 프로필 공개 토글 핸들러
  // 일반적으로, isProfilePublic=true → 공개(1), false → 비공개(0)
const handleToggle = async () => {
  const newValue = !isProfilePublic; 
  // newValue = false 라면 → 비공개
  setIsProfilePublic(newValue);

  try {
    // 1 ⇒ 공개, 0 ⇒ 비공개 (서버 규칙 확인)
    const showingValue = newValue ? 1 : 0;

    console.log("전송할 showing 값:", showingValue);
    await axios.post(
      `${process.env.REACT_APP_HOST_URL}/user/profile/show`,
      { showing: showingValue },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    console.log("프로필 공개 설정 업데이트 성공:", showingValue);
  } catch (error) {
    // 실패 시 원상복귀
    setIsProfilePublic(!newValue);
    alert("프로필 공개 설정 변경에 실패했습니다.");
    console.error(error);
  }
  
};


  // [3] 프로필 수정 버튼
  const handleEditProfile = () => {
    alert("프로필 수정 페이지로 이동합니다.");
    // 예: navigate("/profile/edit");
  };

  // [4] 로그아웃
  const handleLogout = async () => {
    try {
      /**
       * POST /user/logout
       * 응답 예: { "state": "Bye" } || { "state": "No login info" }
       */
      const response = await axios.post(
        `${process.env.REACT_APP_HOST_URL}/user/logout`,
        null,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log("로그아웃 응답:", response.data);
      
      const { state } = response.data;
      if (state === "Bye") {
        alert("로그아웃 성공!");
        navigate("/");
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

  if (loading) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="mypage-container">
      <main className="mypage-main">
        {/* 프로필 이미지 */}
        <img
          className="profile-icon"
          src={profilePic}
          alt="Profile"
          style={{ width: 100, height: 100 }}
        />
        {/* 닉네임 */}
        <h2 className="nickname">{nickname}</h2>

        {/* 프로필 공개 토글 */}
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

        {/* 프로필 수정 & 로그아웃 버튼 */}
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
