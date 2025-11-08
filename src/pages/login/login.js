/* eslint-disable */

import  "../../styles/login.css";
import loginHansumLogo from "../../assets/Page/Login/hansum_logo.png"
import loginHansumLogoImg from "../../assets/Page/Login/hansum_logo_img.png"
import loginHansumLogoText from "../../assets/Page/Login/hansum_logo_text.png"
import loginGoogle from "../../assets/Page/Login/google.svg"
import mainBBackground from "../../assets/Page/mainB.jpg"

import { useNavigate } from "react-router";

import Header from "../../components/header";
import Footer from "../../components/footer";



function Loginpage() {
// 1) 로그인 페이지로 이동 !
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

// 2) 디테일 버튼으로 어바웃 페이지 이동
  const navigate = useNavigate();

  function enterAboutPage (){
    navigate("/about");
  };

// 3) 졸업생 로그인 페이지 이동

  function enterGradLoginPage (){
    navigate("/gradlogin");
  };

  return (
    <>
    <Header />
    <div className="login-container" style={{position: 'relative'}}>
      <img 
        src={mainBBackground} 
        alt="Background" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }}
      />
      <div className="login-lar-container1">
        {/* 왼쪽 */}
        <div className="login-med-container1">

          <div className="login-med-container1-text3-btn" onClick={enterAboutPage}>
            <span>한섬 더 알아보기</span>
          </div>
        </div>

      </div>


      <div className="login-lar-container2">
        <div className="login-small-container1" onClick={handleGoogleLogin} >
          <img src={loginGoogle} />
          <span>한동대 메일로 로그인</span>
        </div>
        <div className="login-small-container2">
          <p>졸업생이신가요? <span onClick={enterGradLoginPage}>졸업생 로그인</span> 하러 가기</p>
        </div>
      </div>
    </div>

    <Footer />
    </>
  );
}

export default Loginpage;
