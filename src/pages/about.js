import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AboutPage.css";

import beforeLoginImg from "../assets/Components/About/어바웃 페이지_수정.svg";
import afterLoginImg from "../assets/Components/About/어바웃 페이지_수정.svg";
import loginButtonImg from "../assets/Components/About/Login Button.svg";
import mainButtonImg from "../assets/Components/About/Button_Main.svg";

import ScrollToTopButton from "../components/scrolltotopbutton";
import Header from "../components/header";
import Loading from "./Loading";

function AboutPage({ isLoggedIn }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // 로딩 스피너 (2초 후 해제)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // 로그인 / 페이지 이동 처리
  const handleBottomButtonClick = () => {
    if (isLoggedIn) {
      window.location.href = "/hansum";
    } else {
      handleGoogleLogin();
    }
  };

  // ✅ Google OAuth 로그인 함수
  const handleGoogleLogin = () => {
    const nonce = Math.random().toString(36).substring(2) + Date.now().toString(36);

    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
		client_id=${process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
		&redirect_uri=${process.env.REACT_APP_GOOGLE_AUTH_REDIRECT_URI}
		&response_type=id_token
		&scope=email profile
    &nonce=${nonce}
    `;
  };


  // 상태별 이미지
  const mainImage = isLoggedIn ? afterLoginImg : beforeLoginImg;
  const buttonImage = isLoggedIn ? mainButtonImg : loginButtonImg;

  return (
    <>
      <Header />
      <div className="page-container">
        <div className="about-image-wrapper">
          {/* 메인 이미지 */}
          <img
            src={mainImage}
            alt="한섬 소개 페이지"
            className="about-full-image"
          />

          {/* 로그인 상태별 버튼 */}
          <img
            src={buttonImage}
            alt={isLoggedIn ? "한섬 페이지 이동 버튼" : "로그인 버튼"}
            className="about-button-image"
            onClick={handleBottomButtonClick}
          />
        </div>
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default AboutPage;
