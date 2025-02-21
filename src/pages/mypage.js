import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import defaultProfileImg from "../assets/Components/Profile/profileimg.svg";
import offProfileImg from "../assets/Components/Profile/offimage.svg";
import Header from "../components/header";
import Loading from "./Loading";
import Logout from "../components/modal/Logout";
// 새로 추가
import BeforeMyPage from "../pages/Beforemypage";

import "../styles/MyPage.css";
import "../styles/beforemypage.css";

function MyPage() {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState("사용자 닉네임");
  const [isProfilePublic, setIsProfilePublic] = useState(true);
  const [profilePic, setProfilePic] = useState(defaultProfileImg);
  const [loading, setLoading] = useState(true);

  // 로그인 정보 없으면 true
  const [noLoginInfo, setNoLoginInfo] = useState(false);

  // 로그아웃 모달
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const openLogoutModal = () => {
    setLogoutModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeLogoutModal = () => {
    setLogoutModalOpen(false);
    document.body.style.removeProperty("overflow");
  };

  useEffect(() => {
    async function getProfile() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_HOST_URL}/user/detail`,
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );

        const data = response.data;
        console.log("서버 응답:", data);

        if (data.state === "No login info") {
          setNoLoginInfo(true); // 로그인 정보 없음
        } else {
          // 정상 유저 데이터
          setNickname(data.name || "사용자 닉네임");
          setIsProfilePublic(data.showing === 1);
          setProfilePic(data.imgUrl || defaultProfileImg);
        }
      } catch (error) {
        console.error("사용자 정보 불러오기 실패:", error);
        alert("사용자 정보를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    }
    getProfile();
  }, [navigate]);

  // 로딩 상태면 로딩 화면
  if (loading) {
    return <Loading loading={loading} />;
  }

  // -----------------------------
  // 1) 로그인 정보가 없으면
  if (noLoginInfo) {
    return (
      <>
        <Header />
        <BeforeMyPage />
      </>
    );
  }
  // -----------------------------

  // 2) 로그인 정보가 있으면
  const handleToggle = async () => {
    const newValue = !isProfilePublic;
    setIsProfilePublic(newValue);

    try {
      await axios.post(
        `${process.env.REACT_APP_HOST_URL}/user/profile/show`,
        { showing: newValue ? 1 : 0 },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
    } catch (error) {
      setIsProfilePublic(!newValue);
      alert("프로필 공개 설정 변경에 실패했습니다.");
      console.error(error);
    }
  };

  const handleEditProfile = () => {
    navigate("/editprofile");
  };

  const handleLogout = async () => {
    try {
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
      if (state === "Bye~") {
        openLogoutModal();
        navigate("/");
      } else {
        alert("로그인 정보가 없습니다.");
      }
    } catch (error) {
      console.error("로그아웃 처리 오류:", error);
      alert("로그아웃 처리에 실패했습니다.");
    }
  };

  return (
    <>
      <Header />
      <div className="mypage-container">
        <main className="mypage-main">
          {/* 프로필 이미지 */}
          <div className="profile-image-container">
            <img
              className="profile-image"
              src={!isProfilePublic ? offProfileImg : profilePic}
              alt="Profile"
              style={{ width: 100, height: 100 }}
            />
          </div>

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
              <span className="slider"></span>
            </label>
          </div>

          {/* 버튼 그룹 */}
          <div className="button-group">
            <button className="profile-edit-button" onClick={handleEditProfile}>
              프로필 수정하기
            </button>
          </div>
          <div className="button-group">
            <button className="logout-button" onClick={handleLogout}>
              로그아웃
            </button>
          </div>
        </main>
      </div>

      {/* 로그아웃 모달 */}
      <Logout open={logoutModalOpen} close={closeLogoutModal} />
    </>
  );
}

export default MyPage;
