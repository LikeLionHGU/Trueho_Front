import styles from "./BotMessage.module.css";
import botImg from "../../assets/Components/ChatBot/botProfile.svg"

function topeople() {
  return(
    <div className={styles.container}>
      <div className={styles.botProfile}>
          <div className={styles.botPic}><img src={botImg} /></div>
          <span>한섬 챗봇</span>
      </div>
      <div className={styles.topeopleContainer}>
        <div className={styles.textContainer}>
          <span>안녕하세요, 고객님! 한섬 챗봇입니다.</span>
          <span>궁금한 점이 있다면 해결해보세요!</span>
        </div>
      </div>
    </div>
  );
}

export default topeople;