import React, { useState } from "react";
import "../components/styles/accordion.css"; // 스타일 추가
import "../components/styles/usercard.css";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <span className="accordion-title">{title}</span>
        <span className="accordion-icon">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && <div className="accordion-content">
        <div className="achievement-list">

        </div> </div>}
    </div>
  );
};

export default Accordion;
