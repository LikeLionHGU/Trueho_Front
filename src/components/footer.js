//import React, { useEffect, useState } from 'react';
import styles from "./styles/footer.css";
import footerHansumLogo from "../assets/Components/Footer/hansum_logo_text.png"
import footerHansumImg from "../assets/Components/Footer/hansum_logo_img.png"
import footerGithub from "../assets/Components/Footer/github.png"



function Footer() {
  

  return (
    <div className="footer-container">
      <div className="footer-lar-container">

        <div className="footer-med-container1">
          <img src={footerHansumLogo} className="imgmargin"/>
          <span className="footer-med-container1-text">Team 트루호</span>

          <div className="btnColumn">
            <div className="footer-med-container1-btn">
              <img src={footerGithub} className="github-btn"/>
              <a href="https://github.com/LikeLionHGU/Trueho_Front.git"><span className="footer-med-container1-btn-text">Front</span></a>
            </div>
            <div className="footer-med-container1-btn">
              <img src={footerGithub} className="github-btn"/>
              <a href="https://github.com/LikeLionHGU/TrueHo_Back.git"><span className="footer-med-container1-btn-text">Back</span></a>
            </div>
          </div>

        </div>

        <div className="footer-med-container2">
          <div className="footer-small-container1">
            <div className="footer-small-container1-text1">
              <p>한섬은 졸업생과 재학생을 연결하여 멘토링을 돕는 플랫폼으로, 선배들이</p>
              <p>후배들에게 자신의 경험을 나누고 조언을 제공할 수 있도록 돕습니다.</p>
              <p>한섬(한동대학교 + 섬김이)은 한동대학교의 ‘새섬 문화’에서 따온 이름이며,</p>
              <p>재학생과 졸업생 간의 원활한 네트워크 형성을 목표로 제작되었습니다.</p>
            </div>
            <div className="footer-small-container1-text2">
              <p>Planner: 김태연, 정소연</p>
              <p>Frontend: 성하은, 이재호</p>
              <p>Backend: 박해석, 서병주</p>
              <p>Designer: 박주현</p>
            </div>
            <div className="footer-small-container1-text3">
              <p className="footer-small-container1-text3-p"><span>Contact:</span>kty123@handong.ac.kr</p>
            </div>
          </div>
          <div className="footer-small-container2">
            <img src={footerHansumImg} className="footer-small-container2-img"/>
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
