import React, { useState ,useEffect} from "react";
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

// 3) 챗봇에 들어갈 메세지 

  const chatBotList = [
    {
      question : "한섬과 어떻게 대화를 시작해야 하나요?" ,  
      answer : `📌 한섬과의 첫 대화를 이렇게 시작해보세요!\n\n안녕하세요! 저는 한동대학교에서 [전공]을 공부하고 있는 [이름]입니다. [한섬님의 직무/경험]에 관심이 많아 연락드렸습니다. 혹시 시간이 되신다면 간단한 조언 부탁드려도 될까요?` ,
    }, {
      question : "한섬님께 첫 메시지를 언제 보내는 게 좋을까요?" ,  
      answer : `가능하면 평일 오후 6시 이후나 주말 오전이 좋습니다. 업무 시간에는 바쁠 수 있으니 저녁 시간이나 주말을 추천드려요!` ,
    }, {
      question : "멘토링할 때 가장 중요한 게 뭐예요?" ,  
      answer : `📌 멘토링에서 가장 중요한 점!\n\n🚨 절대 잠수 타지 마세요!\n한섬님들은 무급으로 도움을 주시는 분들입니다. 매칭된 후 더 이상 관심이 없거나 시간이 안 되면 "죄송하지만 일정이 어려울 것 같습니다!" 라고 꼭 말해주세요.\n\n🎤 감사 인사는 필수!\n 멘토링을 받은 후 최소한라는 인사는 남겨야 합니다.\n\n🙏 한섬님을 너무 부담스럽게 하지 않기!\n🔹 너무 자주 질문하거나 무리한 부탁(ex. 과제 도와달라, 자소서 봐달라 등) 하지 않기!\n🔹 대화는 정중하게, 친근함을 넘어서 무례하지 않게!` ,
    }, {
      question : "한섬님께 질문할 때 어떻게 해야 하나요?" ,  
      answer : `📌 한섬님과의 대화에서 주의할 점!\n\n✅ 질문은 구체적으로!\n- "IT 직무는 어떤가요?" (❌)\n- "IT 직무 중 백엔드 개발자는 초반에 어떤 기술을 익히는 게 중요할까요?" (⭕)\n✅ 장문의 질문보다 짧고 명확하게!\n- 한섬님은 바쁘신 분들이 많아요. 질문을 짧게 하고, 추가 질문은 대화하면서 이어가는 게 좋아요!\n✅ 한섬님이 답변을 주셨다면 반응하기!\n- "감사합니다! 말씀해주신 부분 참고해서 준비해보겠습니다!"\n- "좋은 조언 감사합니다! 좀 더 공부한 뒤 다시 질문드려도 될까요?" ` ,
    }, {
      question : `멘토링 요청을 보냈는데 답장이 없어요.\n어떻게 해야 하나요?` ,  
      answer : `한섬님도 개인 일정이 있기 때문에 2~3일 정도 기다려보세요. 만약 답이 없다면 정중하게 리마인드 메시지를 한 번 더 보내보는 것도 방법입니다.`,
    }, {
      question : "한섬님과 대화를 어떻게 끝내야 하나요?" ,  
      answer : `📌 멘토님과의 대화가 끝날 때는 이렇게 마무리하세요!\n\n🔹 한섬님, 바쁘신 와중에도 귀한 시간 내어주셔서 감사합니다! 조언해주신 내용들 꼭 참고해서 준비하겠습니다. 😊\n🔹 한섬님 조언 정말 감사드립니다! 혹시 괜찮으시다면 다음에 또 궁금한 점이 생기면 연락드려도 될까요? 오늘 좋은 말씀 너무 감사했습니다! 😊` ,
    },
  ];

  const [chatQuestion, setChatQuestion] = useState([]);
  const [chatAnswer, setChatAnswer] = useState([]);
  useEffect(() => {
    if (selectedButton !== null) {
      setChatQuestion(chatBotList[selectedButton-1].question); 
      setChatAnswer(chatBotList[selectedButton-1].answer);
    } else {
      setChatQuestion(""); // 기본값 설정
      setChatAnswer("");   // 기본값 설정
    }
  }, [selectedButton]);


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


              {selectedButton !== null && (
                <>
                <div className={styles.rightmessage}>
                  <QMessage>{chatQuestion}</QMessage>
                </div>

                <div className={styles.leftmessage}>
                  <BMessage>{chatAnswer}</BMessage>
                </div></>
              )}

            </div>
          </main>
          <footer></footer>
        </section>
      ) : null}
    </div>
  );
};

export default ChatBot;
