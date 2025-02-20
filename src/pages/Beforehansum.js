import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/hansum.css";
import MajorFilter from "../components/majorfilter";
import BannerCarousel from "../components/Banner"; // BannerCarousel 컴포넌트 import
import beforehansum from "../assets/Components/before/beforehansum.svg";
import "../styles/beforehansum.css";

import Header from "../components/header";


function BeforeHansumPage() {
  const [selectedMajor, setSelectedMajor] = useState("All");
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/");
  };

  return (

    <>
    <Header />
    <div className="hansum-page">
      <div className="banner-image-container">
        <BannerCarousel />
      </div>
      <h1 style={{ margin: "20px", marginLeft: "180px" }}>
        <div className="majortext">Major</div>
      </h1>
      <MajorFilter 
        selectedMajor={selectedMajor} 
        setSelectedMajor={setSelectedMajor} 
      />
      {/* MajorFilter 아래에 beforehansum 이미지 표시 */}
      <div className="before-hansum">
        <button className="gotologin" onClick={handleLoginClick}>
        로그인하러 가기
      </button>
        <img src={beforehansum} alt="Before Hansum" onClick={() => navigate("/")}/>
      </div>
    </div>

    </>
  );
}

export default BeforeHansumPage;
