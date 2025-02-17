import React from "react";
import "../styles/AboutPage.css";  // 1) CSS 경로
import firstSectionImg from "../assets/Components/About/image1.svg";
import secondSectionImg from "../assets/Components/About/image2.svg";

function AboutPage() {
  return (
    <div className="about-container">
      {/* 헤더(페이지 상단)나 네비게이션은 App.js 등의 공통 레이아웃에서 처리할 수 있음 */}

      {/* 1) 소개 섹션 */}
      <section className="intro-section">
        <h1>한섬이란?</h1>
        <div className="intro-content">
          <div className="intro-text">
            <p>
              전설을 활성화 견지...
              <br />
              한섬에 속해있는...
            </p>
            <ul>
              <li>한섬의 독특한 특징 1</li>
              <li>한섬의 독특한 특징 2</li>
              <li>한섬의 독특한 특징 3</li>
            </ul>
          </div>
          <div className="intro-image">
            <img src={firstSectionImg} alt="Intro section" />
          </div>
        </div>
      </section>

      {/* 2) 한섬의 취지 섹션 */}
      <section className="purpose-section">
        <h2>한섬의 취지</h2>
        <div className="purpose-content">
          <div className="purpose-image">
            <img src={secondSectionImg} alt="Purpose" />
          </div>
          <div className="purpose-text">
            <p>
              한섬의 목표는...  
              <br />
              (내용 작성)
            </p>
            <ol>
              <li>목표1</li>
              <li>목표2</li>
              <li>목표3</li>
            </ol>
          </div>
        </div>
      </section>

      {/* 3) FAQ 섹션 */}
      <section className="faq-section">
        <h2>FAQ</h2>

        <div className="faq-item">
          <h3>Q1. 프로필은 어떻게 작성하나요?</h3>
          <div className="faq-answer">
            <p>
              A. 프로필 작성은...
              <br />
              예를 들어...
            </p>
            <div className="faq-cards">
              <div className="faq-card">
                <h4>공개 여부 확인</h4>
                <p>공개/비공개 설정...</p>
              </div>
              <div className="faq-card">
                <h4>필수 입력 항목</h4>
                <p>닉네임, 학번...</p>
              </div>
            </div>
          </div>
        </div>

        <div className="faq-item">
          <h3>Q2. 왜 이름이 아니라 닉네임을 사용하나요?</h3>
          <div className="faq-answer">
            <p>
              A. 한섬에서는...
            </p>
            <ul>
              <li>장점 1</li>
              <li>장점 2</li>
            </ul>
          </div>
        </div>

        <div className="faq-item">
          <h3>Q3. 한섬은 졸업생만 이용할 수 있나요?</h3>
          <div className="faq-answer">
            <p>
              A. 아니요...
            </p>
          </div>
        </div>

        <div className="faq-item">
          <h3>Q4. 멘토링은 어떻게 신청하나요?</h3>
          <div className="faq-answer">
            <p>
              A. 멘토링을 신청하는 방법...
            </p>
            <ol>
              <li>HanSum 페이지에서... </li>
              <li>본인 프로필에서...</li>
              <li>멘토에게 직접 Message 전송...</li>
              <li>멘토 승인 후 활동 시작...</li>
            </ol>
          </div>
        </div>

        <div className="faq-item">
          <h3>Q5. 한섬에서 가장 중요한 매너는 무엇인가요?</h3>
          <div className="faq-answer">
            <p>
              A. 한섬을...
            </p>
          </div>
        </div>
      </section>

      {/* 4) 페이지 하단 Footer */}
      <footer className="about-footer">
        <div className="footer-left">
          <img src="/images/hansum_logo.png" alt="HanSum" height="40" />
          <p>© {new Date().getFullYear()} HanSum. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <p>Team 한섬 | 문의: hansum@naver.com</p>
        </div>
      </footer>
    </div>
  );
}

export default AboutPage;
