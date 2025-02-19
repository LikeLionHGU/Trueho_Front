import React, { useState } from "react";
import styles from "./ChatBot.module.css";

import closeImg from "../../assets/Components/Modal/x.png";
import hansumLogo from "../../assets/Components/ChatBot/logo.svg";

import BotMessage from "./BotMessage";
import BMessage from "./BMessage";
import QMessage from "./QMessage";


const ChatBot = (props) => {
  const { open, close } = props;

// 1) 6개의 버튼 클릭한 버튼 색상 변경
  const [selectedButton, setSelectedButton] = useState(null); // 선택된 버튼 인덱스 저장

  const handleButtonClick = (index) => {
    setSelectedButton(index); // 클릭한 버튼의 인덱스 저장
  };

// 2) 모달 닫을 때 index 값 0으로 세팅
  const closeClick = () => {
    setSelectedButton(null);
    close();
  }; 

  return (
    <div 
      className={open ? `${styles.openModal} ${styles.modal}` : styles.modal} 
      onClick={closeClick} // 모달 바깥 영역 클릭 시 닫힘
    >
      {open && props !== null ? (
        <section onClick={(e) => e.stopPropagation()}> 
          <header>
            <div className={styles.modalHeaderBox}>
              <img src={hansumLogo}/>
              <p><span>챗봇</span>과 대화중</p>
            </div>
            <button className={styles.close} onClick={closeClick}>
              <img src={closeImg}/>
            </button>
          </header>

          <main>
            <div className={styles.container}>
              <div className={styles.leftmessage}>
                <BotMessage></BotMessage>
              </div>
              <div className={`${styles.leftmessage} ${styles.buttons_1}`}>
                <button key= "1"
                    className={selectedButton === "1" ? styles.activeBtn : styles.btn}
                    onClick={() => handleButtonClick("1")}>
                  <span>첫질문 내용</span>
                </button>
                <button key= "2"
                    className={selectedButton === "2" ? styles.activeBtn : styles.btn}
                    onClick={() => handleButtonClick("2")}>
                  <span>메시지 보내는 시간</span>
                </button>
                <button key= "3"
                    className={selectedButton === "3" ? styles.activeBtn : styles.btn}
                    onClick={() => handleButtonClick("3")}>
                  <span>대화 매너</span>
                </button>
              </div>
              <div className={`${styles.leftmessage} ${styles.buttons_2}`}>
                <button key= "4"
                    className={selectedButton == "4" ? styles.activeBtn : styles.btn}
                    onClick={() => handleButtonClick("4")}>
                  <span>질문 방식</span>
                </button>
                <button key= "5"
                    className={selectedButton === "5" ? styles.activeBtn : styles.btn}
                    onClick={() => handleButtonClick("5")}>
                  <span>답장이 없는 경우</span>
                </button>
                <button key= "6"
                    className={selectedButton === "6" ? styles.activeBtn : styles.btn}
                    onClick={() => handleButtonClick("6")}>
                  <span>대화 마무리 방법</span>
                </button>
              </div>


              
              {/* <div className={styles.rightmessage}>
                <QMessage>{"반갑습니다"}</QMessage>
              </div>

              <div className={styles.leftmessage}>
                <BMessage>{"안녕하세요"}</BMessage>
              </div> */}

            </div>
          </main>
          <footer></footer>
        </section>
      ) : null}
    </div>
  );
};

export default ChatBot;
