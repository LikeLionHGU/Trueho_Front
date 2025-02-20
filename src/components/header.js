import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles/header.css";
import hansumLogo from "../assets/Components/Header/hansum_logo.svg";

function Header() {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 페이지 경로 가져오기

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
