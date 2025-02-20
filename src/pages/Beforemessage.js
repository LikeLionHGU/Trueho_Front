import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

import "../styles/Beforemessage.css";
import chatBot from "../assets/Components/ChatBot/Chatbot.svg"
import Logo from "../assets/Components/before/beforehansum.svg"
import loginGoogle from "../assets/Page/Login/google.svg"


function Beforemessage() {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    navigate('/');

  };


  return (
    <>
    <div>
      <div className="chat-container">
        <div className="chat-innercontainer">
          <img src={Logo} className="logoTop"/>
          <div className="chat-text">
            <span>이 페이지는 로그인 이후 </span>
            <span>이용가능합니다 !</span>
          </div>
          
          <div className="login" onClick={handleGoogleLogin} >
            <img src={loginGoogle} />
            <span>한동대 메일로 로그인</span>
          </div>
        </div>
        <div className="chatbot" >
          <img src={chatBot} />
        </div>
      </div>
    </div>
    </>
  );
}

export default Beforemessage;
