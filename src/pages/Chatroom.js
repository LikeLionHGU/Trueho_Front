import React, {useState} from 'react';
import Chating from "../components/Chating";
import ChatList from "../components/ChatList";
import "../styles/Chatroom.css";
import chatBot from "../assets/Components/ChatBot/Chatbot.svg"

import ChatBotModal from "../components/chatBot/ChatBot";
import Header from "../components/header";




function Chatroom() {
// 1) 챗봇 열기
  const [chatBotModalOpen, setChatBotModalOpen] = useState(false);
  const openChatBotModal = () => setChatBotModalOpen(true);
  const closeChatBotModal = () => {
    setChatBotModalOpen(false);
    document.body.style.removeProperty('overflow');
  };

  const chatBotModalClick = () => {
    openChatBotModal();
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
    <Header />
    <div>
      <div className="chatRoom-container">
        <div className="chatRoom-innercontainer">
          <ChatList />
          <Chating />
        </div>
        <div className="chatBot" onClick={() => chatBotModalClick()}>
          <img src={chatBot} />
        </div>
      </div>
    </div>
    <ChatBotModal
        open={chatBotModalOpen}
        close={closeChatBotModal}
      />
    </> 
  );
}

export default Chatroom;