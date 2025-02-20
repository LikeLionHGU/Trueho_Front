import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

import "../styles/Beforemessage.css";
import chatBot from "../assets/Components/ChatBot/Chatbot.svg"
import Logo from "../assets/Components/Before/hansum.svg"
import loginGoogle from "../assets/Page/Login/google.svg"


import Header from "../components/header";


function Beforemessage() {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    navigate('/');

  };


  return (
    <>
    <Header />
    <div>
      <div className="chat-container">
        <div className="chat-innercontainer">
          <img src={Logo} className="logoTop"/>
          <div className="chat-text">
            <span>이 페이지는 로그인 이후 </span>
            <span>이용가능합니다 !</span>
          </div>
          
          <div className="login" onClick={handleGoogleLogin} >
            <span>로그인하러 가기</span>
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
