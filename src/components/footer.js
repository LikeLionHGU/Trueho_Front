//import React, { useEffect, useState } from 'react';
import styles from "./styles/footer.css";
import hansumLogo from "../assets/Components/Footer/hansum_logo.png"
import hansumImg from "../assets/Components/Footer/hansum_img.png"
import insta from "../assets/Components/Footer/insta.svg"
import mail from "../assets/Components/Footer/mail.svg"



function Footer() {
  

  return (
    <div className="footer-container">
      <div className="footer-lar-container">
        <div className="footer-med-container1">
          <img src={hansumLogo}/>
          <span className="footer-med-container1-text">About Us</span>
          <div className="footer-med-container1-btn">
            <img src={insta}/>
            <span className="footer-med-container1-btn-text">트루호</span>
          </div>
        </div>

        <div className="footer-med-container2">
          <div className="footer-small-container1">
            <div className="footer-small-container1-text1">
              <p>커피챗 동문 연결해주는 서비스 설명 커피챗 동문 연결해주는 서비스 설명 </p>
              <p>커피챗 동문 연결해주는 서비스 설명 커피챗 동문 연결해주는 서비스 설명 </p>
              <p>커피챗 동문 연결해주는 서비스 설명 커피챗 동문 연결해주는 서비스 설명 </p>
              <p>커피챗 동문 연결해주는 서비스 설명 커피챗 동문 연결해주는 서비스 설명 </p>
              <p>커피챗 동문 연결해주는 서비스 설명 커피챗 동문 연결해주는 서비스 설명 </p>
            </div>
            <div className="footer-small-container1-text2">
              <p className="footer-small-container1-text2-title">Team name: 트루호</p>
              <p>Planner: 김태연, 정소연</p>
              <p>Frontend: 성하은, 이재호</p>
              <p>Backend: 박해석, 서병주</p>
              <p>Designer: 박주현</p>
            </div>
            <div className="footer-small-container1-text3">
              <img src={mail}/>
              <p className="footer-small-container1-text3-p">12345678@handong.ac.kr</p>
            </div>
          </div>
          <div className="footer-small-container2">
            <img src={hansumImg} className="footer-small-container2-img"/>
            <div className="footer-small-container2-text1">
              <p><span>HanSum</span> was created by Team <span>TrueHo</span></p>
            </div>
            <div className="footer-small-container2-text2">
              <p>Copyright © 2025 TrueHo. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
