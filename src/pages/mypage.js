import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import defaultProfileImg from "../assets/Components/Profile/profileimg.svg";
import offProfileImg from "../assets/Components/Profile/offimage.svg";
import "../styles/MyPage.css";

//axios.defaults.withCredentials = true; // 세션 쿠키 필요 시

function MyPage() {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState("사용자 닉네임");
  const [isProfilePublic, setIsProfilePublic] = useState(true);
  const [profilePic, setProfilePic] = useState(defaultProfileImg);
  const [loading, setLoading] = useState(true);

  // ★ 추가: 로그인 정보 없을 때 처리용 상태
  const [noLoginInfo, setNoLoginInfo] = useState(false);

  useEffect(() => {
    async function getProfile() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_HOST_URL}/user/detail`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true, 
        });

        // 예: { name, showing, pic } 또는 { state: "No login info" }
        const data = response.data;
        console.log("서버 응답:", data);

        if (data.state === "No login info") {
          // 로그인 정보 없음
          setNoLoginInfo(true);
        } else {
          // 정상 유저 데이터
          setNickname(data.name || "사용자 닉네임");
          setIsProfilePublic(data.showing === 1);
          setProfilePic(data.pic || defaultProfileImg);
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

  // 프로필 공개 토글
  const handleToggle = async () => {
    if (noLoginInfo) return; // 로그인 정보 없으면 조작 불가

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

  // 프로필 수정
  const handleEditProfile = () => {
    if (noLoginInfo) return; // 로그인 정보 없으면 조작 불가
    navigate("/editprofile");
  };

  // 로그아웃
  const handleLogout = async () => {
    if (noLoginInfo) return; // 로그인 정보 없으면 조작 불가

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
        alert("로그아웃 성공!");
        navigate("/");
      } else {
        // 예: state === "No login info"
        alert("로그인 정보가 없습니다.");
      }
    } catch (error) {
      console.error("로그아웃 처리 오류:", error);
      alert("로그아웃 처리에 실패했습니다.");
    }
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  // ★ 추가 스타일: noLoginInfo=true일 때 배경/디자인 변경 등
  const containerClassName = noLoginInfo 
    ? "mypage-container no-login" 
    : "mypage-container";

  return (
    <div className={containerClassName}>
      <main className="mypage-main" style={ noLoginInfo ? { opacity: 0.5 } : {} }>
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
              disabled={noLoginInfo}
            />
            <span className="slider"></span>
          </label>
        </div>
        

        {/* 버튼 그룹 */}
        <div className="button-group">
          <button
            className="profile-edit-button"
            onClick={handleEditProfile}
            disabled={noLoginInfo} // 로그인 정보 없으면 disabled
          >
            프로필 수정하기
          </button>
        </div>
        <div className="button-group">
        <button
            className="logout-button"
            onClick={handleLogout}
            disabled={noLoginInfo} // 로그인 정보 없으면 disabled
          >
            로그아웃
        </button>
        </div>

        {/* 만약 noLoginInfo=true면 별도 안내 문구 */}
        {noLoginInfo && (
          <p style={{ color: "red", marginTop: "1rem" }}>
            로그인 정보가 없습니다. 기능을 사용할 수 없습니다.
          </p>
        )}
      </main>
    </div>
  );
}

export default MyPage;
