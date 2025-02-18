import React from "react";
import "../styles/AboutPage.css"; // 1) CSS 경로
import firstSectionImg from "../assets/Components/About/image1.svg";
import secondSectionImg from "../assets/Components/About/image2.svg";

function AboutPage() {
  return (
    <div className="about-container">
      {/* 헤더(페이지 상단)나 네비게이션은 App.js 등의 공통 레이아웃에서 처리할 수 있음 */}

      {/* 1) 소개 섹션 */}
      <section className="intro-section">
        <h1><div>로고</div>이란?</h1>
        <div className="intro-content">
          <div className="intro-text">
            <p>
              한섬은 졸업생과 재학생을 연결하여 멘토링을 돕는 플랫폼으로,
              <br />
              선배들이 후배들에게 자신의 경험을 나누고 조언을 제공할 수 있도록
              돕습니다.
            </p>
            <ul>
              <li>
                한섬(한동대학교 + 섬김이)은 한동대학교의 ‘새섬 문화’에서 따온
                이름입니다.
              </li>
              <li>
                또한, 한내기(한동대 + 새내기)라는 용어도 사용됩니다. 한내기는
                멘토링을 받고 싶은 재학생들을 의미합니다.
              </li>
              <li></li>
            </ul>
          </div>
          <div className="intro-image">
            <img src={firstSectionImg} alt="Intro section" />
          </div>
        </div>
      </section>

      {/* 2) 한섬의 취지 섹션 */}
      <section className="purpose-section">
        <h2><div>로고</div>의 취지</h2>
        <div className="purpose-content">
          <div className="purpose-image">
            <img src={secondSectionImg} alt="Purpose" />
          </div>
          <div className="purpose-text">
            <p>
            한섬의 목표는 재학생과 졸업생 간의 원활한 네트워크 형성입니다. 멘토-멘티 간 가벼운 대화부터 심층적인 커리어 상담까지 자유롭게 활용할 수 있도록 설계되었습니다! 
              <br />
              (내용 작성)
            </p>
            <ol>
              <li>대학 선후배 간 진로·직무 관련 멘토링을 활성화</li>
              <li>학내 공식 네트워크(지도 교수님, 경력개발센터 등) 외에도 자율적인 동문 연결</li>
              <li>부담 없는 방식으로 익명 또는 실명 선택 가능</li>
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
            A. 프로필 작성은 웹 서비스 내 ‘프로필 작성’ 페이지에서 직접 입력할 수 있습니다. 또한, 공개 여부를 언제든지 설정할 수 있으며, 닉네임을
            사용하여 익명성을 유지할 수도 있습니다. 이를 통해 프라이버시를 보호하실 수 있습니다.
              <br />
              예를 들어...
            </p>
            <div className="faq-cards">
              <div className="faq-card">
                <h4>공개 여부 확인</h4>
                <p>프로필을 공개할 경우는 다른 이용자들이 내 프로필을 보고 대화를 신청할 수 있습니다. 반면에, 프로필을
                비공개할 경우는 본인만 확인 가능하며, 특정 요청이 있어야 매칭 가능합니다.</p>
              </div>
              <div className="faq-card">
                <h4>필수 입력 항목</h4>
                <p>01      가입목적 멘토 또는 멘티 필수적으로 선택
02     닉네임, 입학연도, 졸업연도, 학부 필수 입력
03     한섬의 경우, 직무 필수 입력</p>
              </div>
            </div>
          </div>
        </div>

        <div className="faq-item">
          <h3>Q2. 왜 이름이 아니라 닉네임을 사용하나요?</h3>
          <div className="faq-answer">
            <p>A. 한섬에서는 익명성을 원하는 사용자들을 위해 닉네임 기반 시스템을 도입했습니다.</p>
            <ul>
              <li>모든 사용자가 자유롭게 질문하고 대화할 수 있도록 익명성 보장</li>
              <li>원하는 경우, 실명을 사용해도 문제없음</li>
              <li>닉네임 설정 예시</li>
              <li>Bad Example: "ㅇㅇㅇ" (너무 모호한 닉네임은 피해주세요!)
              Good Example: "마케팅러버", "한동AI꿈나무" (자신의 관심사를 반영하면 좋음)</li>


            </ul>
          </div>
        </div>

        <div className="faq-item">
          <h3>Q3. 한섬은 졸업생만 이용할 수 있나요?</h3>
          <div className="faq-answer">
            <p>A. 아니요! 재학생과 졸업생 모두 이용 가능합니다. 재학생(한내기)는 프로필을 공개하면 졸업생 멘토와 연결될 수 있습니다. 그리고 졸업생(한섬 멘토)는 후배들에게 도움을 줄 수 있으며, 본인이 멘티로 참여하는 것도 가능합니다. 즉, 한내기가 멘토가 될 수도 있고, 한섬이 멘티가
            될 수도 있습니다. 그렇기 때문에 처음 프로필을 등록하실 때 부담감 없이 선택하시면 됩니다.</p>
          </div>
        </div>

        <div className="faq-item">
          <h3>Q4. 멘토링은 어떻게 신청하나요?</h3>
          <div className="faq-answer">
            <p>A. 멘토링을 신청하는 방법은 간단합니다! 다음 아래의 순서대로 하시면 됩니다.</p>
            <ol>
              <li>HanSums 페이지에서 프로필 탐색 후 원하는 멘토 선택 </li>
              <li>한섬의 상세 프로필을 본 후 ‘메시지 보내기’ 버튼 클릭</li>
              <li>간단한 자기 소개 메시지 작성 후 ‘메시지 보내기’ 버튼 클릭</li>
              <li>멘토가 응답하면 Message 페이지를 통해 멘토링 시작! </li>
            </ol>
          </div>
        </div>

        <div className="faq-item">
          <h3>Q5. 한섬에서 가장 중요한 매너는 무엇인가요?</h3>
          <div className="faq-answer">
            <p>A. 한섬은 선배들이 자발적으로 후배를 돕는 공간이므로, 기본적인 예의를 지키는 것이 필수입니다.</p>
            <ol>
              <li>무례한 태도 금지 (잠수, 일방적인 질문, 무반응 등) </li>
              <li>멘토님께 무리한 요구 (이력서 작성, 인맥 요청 등) 자제</li>
              <li>멘토링이 끝나면 반드시 감사 인사 전하기!</li>
            </ol>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default AboutPage;
