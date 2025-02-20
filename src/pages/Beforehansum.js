import React, { useState } from "react";
import "../styles/hansum.css";
import MajorFilter from "../components/majorfilter";
import BannerCarousel from "../components/Banner"; // BannerCarousel 컴포넌트 import
import beforehansum from "../assets/Components/before/beforehansum.svg";

function HansumPage() {
  const [selectedMajor, setSelectedMajor] = useState("All");

  return (
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
        <img src={beforehansum} alt="Before Hansum" />
      </div>
    </div>
  );
}

export default HansumPage;
