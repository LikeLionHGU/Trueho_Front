import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

import "../styles/Beforemessage.css";
import chatBot from "../assets/Components/ChatBot/Chatbot.svg"
import Logo from "../assets/Components/Before/hansum.svg"

import loginGoogle from "../assets/Page/Login/google.svg"


import Header from "../components/header";


function Beforemessage() {
  const navigate = useNavigate();

  // const handleGoogleLogin = () => {
  //   navigate('/');
  // };

  const handleGoogleLogin = () => {
    const nonce = Math.random().toString(36).substring(2) + Date.now().toString(36);

    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
		client_id=${process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
		&redirect_uri=${process.env.REACT_APP_GOOGLE_AUTH_REDIRECT_URI}
		&response_type=id_token
		&scope=email profile
    &nonce=${nonce}
    `;
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
