import Chating from "../components/Chating";
import ChatList from "../components/ChatList";
import styles from "../styles/Chatroom.css";
// import gradHansumLogo from "../assets/Page/GradLogin/hamsum_logo.png"




function Chatroom() {
  

  return (
    <>
    <div>
      <div className="chatRoom-container">
        <div className="chatRoom-innercontainer">
          <ChatList />
          <Chating />
        </div>
      </div>
    </div>

    </>
  );
}

export default Chatroom;