import styles from "./ProfileGuideModal.module.css";
import React from "react";

import closeImg from "../../assets/Components/Modal/x.png";

const ProfileGuideModal = (props) => {
  const { open, close } = props;

  return (
    <div 
      className={open ? `${styles.openModal} ${styles.modal}` : styles.modal} 
      onClick={close} // 모달 바깥 영역 클릭 시 닫힘
    >
      {open && props !== null ? (
        <section onClick={(e) => e.stopPropagation()}> 
          <header>
            <div className={styles.modalHeaderBox}>
              <span>프로필 작성 가이드</span>
            </div>
            <button className={styles.close} onClick={close}>
              <img src={closeImg}/>
            </button>
          </header>
          <main>
            <div className={styles.topContainer}>
            {/* 첫번째 박스 입니다아 */}
              <div className={styles.topBox}>
                <div className={styles.topBox_first}>
                  <span>작성요령</span>
                  <span>01</span>
                </div>
                <div className={styles.topBox_second}>
                  <span>익명 기반 프로필 작성법</span>
                </div>
                <div className={styles.topBox_third}>
                  <span>한동 선배·후배들과 자유롭게 소통할 수 있도록</span> <br/>
                  <span>닉네임 기반 프로필을 사용합니다.</span><br/><br/>
                  <span>닉네임을 설정하고, 자신을 잘 표현하는</span><br/>
                  <span>프로필을 작성해보세요! 😊</span>
                </div>
              </div>

             {/* 두번째 박스 입니다아 */}
              <div className={styles.topBox}>
                <div className={styles.topBox_first}>
                  <span>작성요령</span>
                  <span>02</span>
                </div>
                <div className={styles.topBox_second}>
                  <span>프로필을 잘 작성하는 법</span>
                </div>
                <div className={styles.topBox_third}>
                  <span>세 가지 요소를 포함하면 더 좋은</span> <br/>
                  <span>프로필이 될 수 있어요!</span><br/><br/>
                  <span>✔️  한눈에 보기 쉽게 정리</span><br/>
                  <span>✔️  자신의 경험과 성향을 간결하게 표현</span><br/>
                  <span>✔️  멘토/멘티로서 나눌 수 있는 부분 강조</span>
                </div>
              </div>

              {/* 세번째 박스 입니다아 */}
              <div className={styles.topBox}>
                <div className={styles.topBox_first}>
                  <span>작성요령</span>
                  <span>03</span>
                </div>
                <div className={styles.topBox_second}>
                  <span>대표 이력 및 경험 작성법</span>
                </div>
                <div className={styles.topBox_third}>
                  <span>✨ 내가 해본 경험 중, 도움이 될 만한 내용을 정리</span> <br/>
                  <span>해보세요. 학업, 프로젝트, 공모전, 대외활동, 연구 </span><br/>
                  <span>등 어떤 경험이든 좋습니다.</span><br/><br/>
                  <span>✔️  경험을 한 문장으로 요약한 후, </span><br/>
                  <span>   간단한 설명을 덧붙이세요.</span>
                </div>
              </div>
            </div>

            <div className={styles.bottomContainer}>
              <div className={styles.bottomText}>
                <span>대표 이력 작성 예시</span>
              </div>

              {/* 첫번째 박스입니다 */}
              <div className={styles.bottomBox}>
                <div className={styles.bottomBox_all}>
                  <div className={styles.bottomBox_first}>
                    <span>2026년 대한민국 가치투자 챌린지 대상</span>
                  </div>
                  <div className={styles.bottomBox_second}>
                    <ul>
                      <li>대한민국에서 가장 권위 있는 투자 대회 중 하나에서 1위를 차지.</li>
                      <li>심사위원단에게 ‘안정성과 수익성을 동시에 잡은 포트폴리오’라는<br/> 평가를 받음.</li>
                      <li>3년간의 실제 투자 데이터를 기반으로 한 장기 투자 전략이 강점으로 작용.</li>
                    </ul>
                  </div>
                </div>
              

              {/* 두번째 박스입니다 */}
              
                <div className={styles.bottomBox_all}>
                  <div className={styles.bottomBox_first}>
                    <span>2026년 대한민국 가치투자 챌린지 대상</span>
                  </div>
                  <div className={styles.bottomBox_second}>
                    <ul>
                      <li>6개월간 진행된 모의투자 대회에서 연평균 18%의 수익률을 기록.</li>
                      <li>경기 변동성을 고려한 ‘방어적 성장주’ 투자 전략이 주요한 성공 요인</li>
                      <li>대회 종료 후 한국투자증권 리서치센터에서 초청 강연 진행.</li>
                    </ul>
                  </div>
                </div>
              

              {/* 세번째 박스입니다 */}
              
                <div className={styles.bottomBox_all}>
                  <div className={styles.bottomBox_first}>
                    <span>2024년 금융시장 분석 논문 공모전 우수상</span>
                  </div>
                  <div className={styles.bottomBox_second}>
                    <ul>
                      <li>‘거시경제 변수와 주식시장 상관관계 분석’ 논문으로 수상.</li>
                      <li>금리 변화가 특정 업종에 미치는 영향을 계량적으로 분석한 점이 <br/>높은 평가를 받음. </li>
                      <li>논문 내용 일부가 경제 전문지에 게재됨.</li>
                    </ul>
                  </div>
                </div>
              

              {/* 네번째 박스입니다 */}
              
                <div className={styles.bottomBox_all}>
                  <div className={styles.bottomBox_first}>
                    <span>한동대학교 인기 스타, ENFP의 정석</span>
                  </div>
                  <div className={styles.bottomBox_second}>
                    <ul>
                      <li>두번의 팀장 생활, 금융경제학회의 학회장 경험 등 한동에서 많은 사<br/>람을 만나고 같이 놀기를 좋아합니다! 어렵게 생각하지 마시고 편하<br/>게 질문 주세요 😊</li>
                    </ul>
                  </div>
                </div>
              </div>                                          
            </div>
          </main>
          <footer></footer>
        </section>
      ) : null}
    </div>
  );
};

export default ProfileGuideModal;
