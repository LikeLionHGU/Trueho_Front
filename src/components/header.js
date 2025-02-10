import React from "react";
import "./styles/header.css";
import hansumLogo from "../assets/Components/Footer/hansum_logo_text.png";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={hansumLogo} alt="Hansum Logo" className="header-logo" />
        <span className="header-title"> </span>
      </div>
      <nav className="header-nav">
        <ul>
          <li>About</li>
          <li className="menu-selected">HanSums</li>
          <li>Message</li>
          <li>My Page</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
