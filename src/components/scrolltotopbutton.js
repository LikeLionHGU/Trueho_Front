
import React, { useState, useEffect } from "react";
import "../components/styles/scrolltotopbutton.css";
import upimg from "../assets/Components/Profile/upbotton.svg";


function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top-button">
          <img src={upimg} alt="Profile" />
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;
