import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles/header.css";
import hansumLogo from "../assets/Components/Header/header_logo.png";

function Header() {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 페이지 경로 가져오기

  return (
    <header className="header">
      <div className="header-left">
        <img src={hansumLogo} alt="Hansum Logo" className="header-logo" onClick={() => navigate("/")} />
      </div>
      <nav className="header-nav">
        <ul>
          <li 
            className={location.pathname === "/" ? "menu-selected" : ""}
            onClick={() => navigate("/")}
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
            className={location.pathname === "/message" ? "menu-selected" : ""}
            onClick={() => navigate("/message")}
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
