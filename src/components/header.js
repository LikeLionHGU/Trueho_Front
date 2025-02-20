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
        alert("사용자 정보를 불러오는 데 실패했습니다.");
      } finally {

      }
    }
    getProfile();
  }, []);
  

  return (
    <header className="header">
      <div className="header-left">
        <img src={hansumLogo} alt="Hansum Logo" className="header-logo" onClick={() => navigate("/hansum")} />
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
            className={location.pathname === "/hansum" ? "menu-selected" : ""}
            onClick={() => navigate("/hansum")}
          >
            HanSums
          </li>
          <li 
            className={location.pathname === "/chathome" ? "menu-selected" : ""}
            onClick={() => navigate("/chathome")}
          >
            Message
          </li>
          <li 
            className={location.pathname === "/mypage" ? "menu-selected" : ""}
            onClick={() => navigate("/mypage")}
          >
            My Page
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
