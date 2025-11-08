import React from "react";
import "../styles/AboutPage.css";

import beforeLoginImg from "../assets/Components/About/어바웃 페이지_수정.svg";
import afterLoginImg from "../assets/Components/About/어바웃 페이지_수정.svg";
import loginButtonImg from "../assets/Components/About/Login Button.svg"; 
import mainButtonImg from "../assets/Components/About/Button_Main.svg";


import ScrollToTopButton from "../components/scrolltotopbutton";
import Header from "../components/header";

function AboutPage({ isLoggedIn }) {
  const mainImage = isLoggedIn ? afterLoginImg : beforeLoginImg;
  const buttonImage = isLoggedIn ? mainButtonImg : loginButtonImg;

  const handleBottomButtonClick = () => {
    if (isLoggedIn) {
      window.location.href = "/hansum"; // 로그인 후 이동
    } else {
      window.location.href = "/login"; // 로그인 전 이동
    }
  };

  return (
    <>
      <Header />
      <div className="page-container">
        <div className="about-image-wrapper">
          <img
            src={mainImage}
            alt="한섬 소개 페이지"
            className="about-full-image"
          />

          {/* 로그인 여부에 따라 버튼 이미지 변경 */}
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