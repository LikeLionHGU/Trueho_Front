import React, { useState, useEffect } from "react";
import "../components/styles/scrolltotopbutton.css";

// ❌ 중복 선언 제거
// const upBotton = document.getElementById("your-button-id");  --> 삭제

// ✅ 'upBotton'은 이미지 import 용도로만 사용
import upBotton from "../Components/Profile/upbotton.png"; 

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    visible && (
      <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <img src={upBotton} alt="Scroll to top" className="upbotton"/>
      </button>
    )
  );
}

export default ScrollToTopButton;
