import React, { useState } from "react";
import "../components/styles/accordion.css";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <div
        className="accordion-header"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="accordion-title">{title}</span>
        <span className="accordion-icon">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
