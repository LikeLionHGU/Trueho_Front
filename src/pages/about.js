import React, { useState, useEffect } from "react";
import "../styles/AboutPage.css";
import axios from "axios";

import beforeLoginImg from "../assets/Components/About/어바웃 페이지_수정.svg";
import afterLoginImg from "../assets/Components/About/어바웃 페이지_수정.svg";
import loginButtonImg from "../assets/Components/About/Login Button.svg";  // 로그인 전
import mainButtonImg from "../assets/Components/About/Button_Main.svg";    // 로그인 후

import ScrollToTopButton from "../components/scrolltotopbutton";
import Header from "../components/header";
import Loading from "./Loading";

function AboutPage() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ 1. 로그인 상태 서버에서 확인
  useEffect(() => {
    async function checkLoginStatus() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_HOST_URL}/user/detail`,
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true, // 쿠키 포함
          }
        );

        const data = response.data;
        console.log("로그인 확인 응답:", data);

        // 로그인된 상태면 true로 설정
        if (data.state !== "No login info") {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("로그인 상태 확인 실패:", error);
        setIsLoggedIn(false);
      } finally {
        setLoading(false);
      }
    }

    checkLoginStatus();
  }, []);

  // ✅ 2. Google OAuth 로그인 함수
  const handleGoogleLogin = () => {
    const nonce = Math.random().toString(36).substring(2) + Date.now().toString(36);

    const googleAuthUrl =
      "https://accounts.google.com/o/oauth2/v2/auth" +
      `?client_id=${process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}` +
      `&redirect_uri=${process.env.REACT_APP_GOOGLE_AUTH_REDIRECT_URI}` +
      "&response_type=id_token" +
      "&scope=email%20profile" +
      `&nonce=${nonce}`;

    window.location.href = googleAuthUrl;
  };

  // ✅ 3. 버튼 클릭 처리
  const handleBottomButtonClick = () => {
    if (isLoggedIn) {
      window.location.href = "/hansum"; // 로그인 시
    } else {
      handleGoogleLogin(); // 로그인 전
    }
  };

  // ✅ 4. 로딩 중이면 로딩 화면 표시
  if (loading) {
    return <Loading loading={loading} />;
  }

  // ✅ 5. 상태별 이미지 및 버튼 선택
  const mainImage = isLoggedIn ? afterLoginImg : beforeLoginImg;
  const buttonImage = isLoggedIn ? mainButtonImg : loginButtonImg;

  return (
    <>
      <Header />
      <div className="page-container">
        <div className="about-image-wrapper">
          {/* 배경 이미지 */}
          <img
            src={mainImage}
            alt="한섬 소개 페이지"
            className="about-full-image"
          />

          {/* 로그인 상태별 버튼 */}
          <button
            className="about-button-wrapper"
            onClick={handleBottomButtonClick}
          >
            <img
              src={buttonImage}
              alt={isLoggedIn ? "한섬 페이지 이동 버튼" : "로그인 버튼"}
              className="about-button-image"
            />
          </button>
        </div>
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default AboutPage;
