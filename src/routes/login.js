import styles from "../styles/login.css";
import loginHansumLogo from "../assets/Page/Login/hansum_logo.png"
import loginHansumLogoImg from "../assets/Page/Login/hansum_logo_image.png"
import loginHansumLogoText from "../assets/Page/Login/hansum_logo_text.png"
import loginGoogle from "../assets/Page/Login/google.png"

function Loginpage() {
  

  return (
    <div className="login-container">
      <div className="login-lar-container1">
        {/* 왼쪽 */}
        <div className="login-med-container1">
          <div className="login-med-container1-text1">
            <img src={loginHansumLogo} />
            <span>이란?</span>
          </div>
          <div className="login-med-container1-text2">
            <p>한섬은 졸업생과 재학생을 연결하여 멘토링을 돕는 플랫폼으로, </p>
            <p>선배들이 후배들에게 자신의 경험을 나누고 조언을 제공할 수 있도록 돕습니다.</p>
          </div>
          <div className="login-med-container1-text3-btn">
            <span>더 자세한 설명보기</span>
          </div>
        </div>
        {/* 오른쪽 */}
        <div className="login-med-container2">
          <div className="login-med-container2-icon1">
            <img src={loginHansumLogoText} />
          </div>
          <div className="login-med-container2-icon2">
            <img src={loginHansumLogoImg} />
          </div>
        </div>
      </div>


      <div className="login-lar-container2">
        <div className="login-small-container1">
          <img src={loginGoogle} />
          <span>한동대 메일로 로그인</span>
        </div>
        <div className="login-small-container2">
          <p>졸업생이신가요? <span>졸업생 로그인</span> 하러 가기</p>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
