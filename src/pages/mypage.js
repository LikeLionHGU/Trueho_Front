import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/MyPage.css";

function MyPage() {
  const [nickname, setNickname] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [isProfilePublic, setIsProfilePublic] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // [1] 마이페이지 진입 시 사용자 정보 불러오기
  useEffect(() => {
    // 로그인 후 저장해둔 토큰을 localStorage에서 꺼냄 (이름은 예시)
    const token = localStorage.getItem("accessToken");
    if (!token) {
      // 토큰 없으면 로그인 안 된 상태이므로 리다이렉트
      alert("로그인 정보가 없습니다. 로그인 페이지로 이동합니다.");
      navigate("/newprofile");
      return;
    }

    // GET /user/detail 호출
    // ※ 서버가 session 쿠키 기반 인증이면 withCredentials: true만 필요할 수도 있음.
    axios
      .get(`${process.env.REACT_APP_HOST_URL}/user/detail`, {
        headers: {
          "Content-Type": "application/json",
          // 토큰 기반 인증이라면, 예: Authorization 헤더 사용
          // "Authorization": `Bearer ${token}`,
        },
        withCredentials: true, // 세션 쿠키 인증 필요 시
      })
      .then((response) => {
        // 서버 응답 예시:
        // {
        //   "name": "잘생긴 라이언",
        //   "showing": 0,
        //   "pic": "img_url"
        // }
        const { name, showing, pic } = response.data;
        setNickname(name);
        setIsProfilePublic(showing === 1);
        setProfilePic(pic);
      })
      .catch((error) => {
        console.error("사용자 정보 불러오기 실패:", error);
        alert("사용자 정보를 불러오는 데 실패했습니다.");
        // 필요 시 로그인 페이지로 이동
        // navigate("/");
      })
      .finally(() => setLoading(false));
  }, [navigate]);

  // [2] 프로필 공개 여부 토글
  const handleToggle = async () => {
    const newValue = !isProfilePublic;
    setIsProfilePublic(newValue);

    try {
      // showing: 1 (공개), 0 (비공개)
      const response = await axios.post(
        `${process.env.REACT_APP_HOST_URL}/show`,
        { showing: newValue ? 1 : 0 },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log("프로필 공개 설정 업데이트 성공:", response.data);
    } catch (error) {
      console.error("프로필 공개 설정 업데이트 실패:", error);
      setIsProfilePublic(!newValue);
      alert("프로필 공개 설정 변경에 실패했습니다.");
    }
  };

  // [3] 프로필 수정 버튼
  const handleEditProfile = () => {
    // 프로필 수정 페이지로 이동 등
    alert("프로필 수정 페이지로 이동합니다.");
    // navigate("/profile/edit");
  };

  // [4] 로그아웃
  const handleLogout = () => {
    axios
      .post(
        `${process.env.REACT_APP_HOST_URL}/user/logout`,
        null, // 요청 바디가 필요 없다면 null
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((response) => {
        // 예: { state: 'Bye' }
        console.log("서버 응답:", response.data);
        // localStorage 정리
        localStorage.removeItem("accessToken");
        alert("로그아웃 되었습니다.");
        navigate("/login");
      })
      .catch((error) => {
        console.error("로그아웃 에러:", error);
        alert("로그아웃에 실패했습니다.");
      });
  };

  // 로딩 상태
  if (loading) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="mypage-container">
      <main className="mypage-main">
        {/* 프로필 이미지 표시 (일단 텍스트로 대체) */}
        {profilePic ? (
          <img className="profile-icon" src={profilePic} alt="Profile" />
        ) : (
          <div className="profile-icon">D</div>
        )}

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

