import React, {useState} from 'react';
import ChatingSelect from "../components/ChatingSelect";
import ChatList from "../components/ChatList";
import "../styles/Chathome.css";
import chatBot from "../assets/Components/ChatBot/Chatbot.svg"

import ChatBotModal from "../components/chatBot/ChatBot";


function Chathome() {
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
    <div>
      <div className="chatHome-container">
        <div className="chatHome-innercontainer">
          <ChatList />
          <ChatingSelect />
        </div>
        <div className="chatbot" onClick={() => chatBotModalClick()}>
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

export default Chathome;
