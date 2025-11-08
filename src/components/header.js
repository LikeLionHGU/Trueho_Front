import React, { useState, useEffect} from "react";
import axios from "axios";

import { useNavigate, useLocation } from "react-router-dom";
import "./styles/header.css";
import hansumLogo from "../assets/Components/Header/hansum_logo.svg";

function Header() {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 페이지 경로 가져오기

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
          setNoLoginInfo(true);
        } 
      } catch (error) {
        console.error("사용자 정보 불러오기 실패:", error);
        // 로그인하지 않은 경우로 처리 (alert 제거)
        setNoLoginInfo(true);
      } finally {

      }
    }
    getProfile();
  }, []);

  // 클릭 핸들러 함수들
  const handleLogoClick = () => {
    if (noLoginInfo) {
      navigate("/");
    } else {
      navigate("/hansum");
    }
  };

  const handleHansumClick = () => {
    if (noLoginInfo) {
      alert("로그인이 필요한 서비스입니다.");
      return;
    }
    navigate("/hansum");
  };

  const handleMessageClick = () => {
    if (noLoginInfo) {
      alert("로그인이 필요한 서비스입니다.");
      return;
    }
    navigate("/chathome");
  };

  const handleMyPageClick = () => {
    if (noLoginInfo) {
      alert("로그인이 필요한 서비스입니다.");
      return;
    }
    navigate("/mypage");
  };
  

  return (
    <header className="header">
      <div className="header-left">
        <img 
          src={hansumLogo} 
          alt="Hansum Logo" 
          className="header-logo" 
          onClick={handleLogoClick}
        />
      </div>
      <nav className="header-nav">
        <ul>
          <li 
            className={location.pathname === "/about" ? "menu-selected" : ""}
            onClick={() => navigate("/about")}
          >
            About
          </li>
          <li 
            className={`${location.pathname === "/hansum" ? "menu-selected" : ""} ${noLoginInfo ? "disabled" : ""}`}
            onClick={handleHansumClick}
          >
            HanSums
          </li>
          <li 
            className={`${location.pathname === "/chathome" ? "menu-selected" : ""} ${noLoginInfo ? "disabled" : ""}`}
            onClick={handleMessageClick}
          >
            Message
          </li>
          <li 
            className={`${location.pathname === "/mypage" ? "menu-selected" : ""} ${noLoginInfo ? "disabled" : ""}`}
            onClick={handleMyPageClick}
          >
            My Page
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
