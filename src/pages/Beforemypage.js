import React from "react";
import beforemylogo from "../assets/Components/Before/beforemylogo.svg";
import loginGoogle from "../assets/Page/Login/google.svg";
import "../styles/beforemypage.css";
// import "../styles/common.css";

import Header from "../components/header";


function BeforeMyPage() {

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

      <div className="before-my-page common-container">
        <div className="before-my-container">
          <img
            src={beforemylogo}
            alt="Before My Logo"
            className="before-my-logo"
          />
          <div className="before-my-text">
            이 페이지는 로그인 이후 <br /> 이용가능합니다 :)
          </div>
          <button className="login2" onClick={handleGoogleLogin}>
            <img src={loginGoogle} alt="Google Login" />
            <span>한동대 메일로 로그인</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default BeforeMyPage;
