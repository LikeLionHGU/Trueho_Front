import styles from "./BotMessage.module.css";
import botImg from "../../assets/Components/ChatBot/botProfile.svg"

function topeople({children}) {
  return(
    <div className={styles.container}>
      <div className={styles.botProfile}>
          <div className={styles.botPic}><img src={botImg} /></div>
          <span>한섬 챗봇</span>
      </div>
      <div className={styles.topeopleContainer}>
        <div className={styles.textContainer}>
        <span>{children}</span>
        </div>
      </div>
    </div>
  );
}

export default topeople;