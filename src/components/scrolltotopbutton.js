import React from "react";
import "../components/styles/scrolltotopbutton.css";
import upimg from "../assets/Components/Profile/upbotton.svg";

function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={scrollToTop} className="scroll-to-top-button">
      <img src={upimg} alt="Profile" />
    </button>
  );
}

export default ScrollToTopButton;


// import React, { useState, useEffect } from "react";
// import "../components/styles/scrolltotopbutton.css";
// import upimg from "../assets/Components/Profile/upbotton.svg";


// function ScrollToTopButton() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.pageYOffset > -100) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(true);
//       }
//     };

//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <>
//       {isVisible && (
//         <button onClick={scrollToTop} className="scroll-to-top-button">
//           <img src={upimg} alt="Profile" />
//         </button>
//       )}
//     </>
//   );
// }

// export default ScrollToTopButton;


