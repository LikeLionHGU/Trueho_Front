import React, { useState, useEffect } from "react";
import "../components/styles/scrolltotopbutton.css";
import upbotton from "../assets/Components/Profile/upbotton.png"


function ScrollToTopButton() {
  const [visible, setVisible] = useState(true);

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
        <img src={upbotton} alt="upbotton" className="upbotton" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}/>
      </button>
    )
  );
}

export default ScrollToTopButton;