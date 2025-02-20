import React from "react";
import "../styles/AboutPage.css";

// 실제 이미지 경로(예: src/assets/logo.png, src/assets/introImg.svg 등)로 변경해주세요.
import logoImg from "../assets/Components/Header/hansum_logo.svg";
import firstSectionImg from "../assets/Components/About/image1.svg";
import secondSectionImg from "../assets/Components/About/image2.svg";
import ScrollToTopButton from "../components/scrolltotopbutton";

import Header from "../components/header";


function AboutPage() {
  return (
    <>
    <Header />
    <div className="page-container">
    <div className="about-container">
      {/* 상단에 헤더나 네비게이션이 있다면 별도 컴포넌트에서 처리 */}

      {/* 1) 소개 섹션 */}
      <section className="intro-section">
        {/* “로고” 텍스트 대신 실제 이미지로 */}
        <div className="intro-left">
          <h1 className="logo-container">
            <div className="logo-wrapper">
              <img src={logoImg} alt="한섬 로고" className="logo-image" />
              <span className="logo-text">이란?</span>
            </div>
          </h1>
          <div className="intro-content">
            <div className="intro-text">
              <p>
                한섬은 졸업생과 재학생을 연결하여 멘토링을 돕는 플랫폼으로,
                <br />
                선배들이 후배들에게 자신의 경험을 나누고 조언을 제공할 수 있도록
                돕습니다.
              </p>
              <ul className="intro-text">
                <li>
                  <div className="icon"></div>한섬(한동대학교 + 섬김이)은
                  한동대학교의 <br />
                  ‘새섬 문화’에서 따온 이름입니다.
                </li>

                <li>
                  <div className="icon"></div> 또한, 한내기(한동대 + 새내기)라는
                  용어도 <br />
                  사용됩니다. 한내기는 멘토링을 받고 싶은 <br />
                  재학생들을 의미합니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="intro-image">
          <img src={firstSectionImg} alt="Intro section" />
        </div>
      </section>

      {/* 2) 한섬의 취지 섹션 */}

      {/* 1) 소개 섹션 */}
      <section className="purpose-section">
        {/* “로고” 텍스트 대신 실제 이미지로 */}
        <div className="purpose-image">
          <img src={secondSectionImg} alt="Intro section" />
        </div>

        <div className="purpose-left">
          <h1 className="logo-container">
            <div className="logo-wrapper">
              <img src={logoImg} alt="한섬 로고" className="logo-image" />
              <span className="logo-text">의 취지</span>
            </div>
          </h1>
          <div className="purpose-content">
            <div className="purpose-text">
              <p>
                한섬의 목표는 재학생과 졸업생 간의 원활한 네트워크 형성입니다.
                멘토-멘티 간 가벼운 대화부터 심층적인 커리어 상담까지 자유롭게 활용할 수 있도록
                설계되었습니다!
              </p>
              <ul className="purpose-text">
                <li>
                  <div className="mok1"></div>대학 선후배 간 진로·직무 관련
                  멘토링을 활성화
                </li>

                <li>
                  <div className="mok2"></div> 학내 공식 네트워크(지도 교수님,
                  경력개발센터 등) 외에도 자율적인 동문 연결
                </li>

                <li>
                  <div className="mok3"></div> 부담 없는 방식으로 익명 또는 실명
                  선택 가능
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3) FAQ 섹션 */}
      <section className="faq-section">
        {/* 큰 제목 (FAQ) + 서브타이틀 (자주 묻는 질문 01) */}
        <div className="faq-header">
          <h2>FAQ</h2>
          <p className="faq-subtitle">자주 묻는 질문 01</p>
        </div>

        {/* FAQ 아이템 */}
        <div className="faq-item">
          {/* 질문 (Q) */}
          <h3>Q. 프로필은 어떻게 작성하나요?</h3>

          {/* 답변 (A) */}
          <div className="faq-answer">
            <p>
              A. 프로필 작성은 웹 서비스 내 ‘프로필 작성’ 페이지에서 직접 입력할
              수 있습니다. 또한, 공개 여부를 언제든지 설정할 수 있으며, 닉네임을
              <br />
              사용하여 익명성을 유지할 수도 있습니다.
            </p>

            <div className="faq-cards">
              <div className="faq-card">
                <div className="faq-card-header">
                  <div>주의사항</div>
                  <div>01</div>
                </div>
                <div className="faq-card-bodyfooter">
                  <div className="faq-card-body">공개 여부 확인</div>
                  <div className="faq-card-footer">
                    프로필을 공개할 경우는 다른 이용자들이 내 프로필을 보고
                    대화를 신청할 수 있습니다. 반면에, 프로필을 비공개할 경우는
                    본인만 확인 가능하며, 특정 요청이 있어야 매칭 가능합니다.
                  </div>
                </div>
              </div>
              {/* 프로필을 공개할 경우는 다른 이용자들이 내 프로필을<  br/>보고 대화를 신청할 수 있습니다. 반면에, 프로필을<  br/>
                비공개할 경우는 본인만 확인 가능하며, 특정 요청이<  br/>있어야 매칭 가능합니다.</div></div> */}

              <div className="faq-card">
                <div className="faq-card-header">
                  <div>주의사항</div>
                  <div>02</div>
                </div>
                <div className="faq-card-bodyfooter1">
                  <div className="faq-card-body">필수 입력 항목</div>
                  <div className="faq-card-footer">
                    01 (멘토 또는 멘티) 필수적으로 선택
                    <br />
                    02 닉네임, 입학졸업연도, 학부 필수 입력
                    <br />
                    03 한섬의 경우, 직무 필수 입력
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Q2 */}
        <div className="faq-item">
          <p className="faq-subtitle">자주 묻는 질문 02</p>
          <h3>Q. 왜 이름이 아니라 닉네임을 사용하나요?</h3>
          <div className="faq-answer">
            <p>
              A. 한섬에서는 익명성을 원하는 사용자들을 위해 닉네임 기반 시스템을
              도입했습니다.
            </p>
            <ul className="q2-text">
              <ul class="no-marker-list">
                <li>
                  <div className="q21"></div>대학 선후배 간 진로·직무 관련
                  멘토링을 활성화
                </li>

                <li>
                  <div className="q22"></div> 학내 공식 네트워크(지도 교수님,
                  경력개발센터 등) 외에도 자율적인 동문 연결
                </li>

                <li>
                  <div className="q23"></div> 부담 없는 방식으로 익명 또는 실명
                  선택 가능
                </li>
              </ul>
            </ul>
          </div>
        </div>

        {/* Q3 */}
        <div className="faq-item">
          <p className="faq-subtitle">자주 묻는 질문 03</p>
          <h3>Q. 한섬은 졸업생만 이용할 수 있나요?</h3>
          <div className="faq-answer">
            <p>
              A. 아니요! 재학생과 졸업생 모두 이용 가능합니다. 재학생(한내기)는
              프로필을 공개하면 졸업생 멘토와 연결될 수 있습니다. 그리고
              졸업생(한섬 멘토)
              <br />
              는 후배들에게 도움을 줄 수 있으며, 본인이 멘티로 참여하는 것도
              가능합니다. 즉, 한내기가 멘토가 될 수도 있고, 한섬이 멘티가
              <br />될 수도 있습니다. 그렇기 때문에 처음 프로필을 등록하실 때
              부담감 없이 선택하시면 됩니다.
            </p>
          </div>
        </div>

        {/* Q4 */}
        <div className="faq-item">
          <p className="faq-subtitle">자주 묻는 질문 04</p>
          <h3>Q. 멘토링은 어떻게 신청하나요?</h3>
          <div className="faq-answer">
            <p>
              A. 멘토링을 신청하는 방법은 간단합니다! 다음 아래의 순서대로
              하시면 됩니다.
            </p>

            <div className="mentoring-steps">
              {/* 1번 단계 */}
              <div className="step-card">
                <div className="step-number">01</div>
                <div className="step-text">
                  HanSums 페이지에서 프로필 탐색 후 원하는 멘토 선택
                </div>
              </div>

              {/* 2번 단계 */}
              <div className="step-card">
                <div className="step-number">02</div>
                <div className="step-text">
                  한섬의 상세 프로필을 본 후 ‘메시지 보내기’ 버튼 클릭
                </div>
              </div>

              {/* 3번 단계 */}
              <div className="step-card">
                <div className="step-number">03</div>
                <div className="step-text">
                  간단한 자기 소개 메시지 작성 후 ‘메시지 보내기’ 버튼 클릭
                </div>
              </div>

              {/* 4번 단계 */}
              <div className="step-card">
                <div className="step-number">04</div>
                <div className="step-text">
                  멘토가 응답하면 Message 페이지를 통해 멘토링 시작!
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Q5 */}
        <div className="faq-item">
          <p className="faq-subtitle">자주 묻는 질문 05</p>
          <h3>Q. 한섬에서 가장 중요한 매너는 무엇인가요?</h3>
          <div className="faq-answer">
            <p>
              A. 한섬은 선배들이 자발적으로 후배를 돕는 공간이므로, 기본적인
              예의를 지키는 것이 필수입니다.
            </p>
            <ul className="q2-text">
              <ul class="no-marker-list">
                <li>
                  <div className="q51"></div>무례한 태도 금지 (잠수, 일방적인
                  질문, 무반응 등)
                </li>

                <li>
                  <div className="q52"></div> 멘토님께 무리한 요구 (이력서 작성,
                  인맥 요청 등) 자제
                </li>

                <li>
                  <div className="q53"></div> 멘토링이 끝나면 반드시 감사 인사
                  전하기! 선택 가능
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </section>
    </div>
    <ScrollToTopButton />
    </div>
    </>
    
  );
}


export default AboutPage;
