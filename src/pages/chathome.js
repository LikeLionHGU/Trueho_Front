import ChatingSelect from "../components/ChatingSelect";
import ChatList from "../components/ChatList";
import styles from "../styles/chathome.css";
// import gradHansumLogo from "../assets/Page/GradLogin/hamsum_logo.png"




function ChatHomepage() {
  

  return (
    <>
    <div>
      <div className="chatHome-container">
        <div className="chatHome-innercontainer">
          <ChatList />
          <ChatingSelect />
        </div>
      </div>
    </div>

    </>
  );
}

export default ChatHomepage;