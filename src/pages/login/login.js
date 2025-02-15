import  "../../styles/login.css";
import loginHansumLogo from "../../assets/Page/Login/hansum_logo.png"
import loginHansumLogoImg from "../../assets/Page/Login/hansum_logo_img.png"
import loginHansumLogoText from "../../assets/Page/Login/hansum_logo_text.png"
import loginGoogle from "../../assets/Page/Login/google.svg"

import { useNavigate } from "react-router";

// import Header from "../components/header";


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
    {/* <Header /> */}
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
          <div className="login-med-container1-text3-btn" onClick={enterAboutPage}>
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
        <div className="login-small-container1" onClick={handleGoogleLogin} >
          <img src={loginGoogle} />
          <span>한동대 메일로 로그인</span>
        </div>
        <div className="login-small-container2">
          <p>졸업생이신가요? <span onClick={enterGradLoginPage}>졸업생 로그인</span> 하러 가기</p>
        </div>
      </div>
    </div>
    </>
  ); 
}

export default Loginpage;


// /* styled-components 예시 */
// import styles from "../styles/login.css";
// import loginHansumLogo from "../assets/Page/Login/hansum_logo.png"
// import loginHansumLogoImg from "../assets/Page/Login/hansum_logo_image.png"
// import loginHansumLogoText from "../assets/Page/Login/hansum_logo_text.png"
// import loginGoogle from "../assets/Page/Login/google.png"
// import styled from "styled-components";

// function Loginpage() {

//   return (
//     <LoginContainer>
//       <BottomContainer >
//         <LoginBtnContainer>
//           <img src={loginGoogle} />
//           <span>한동대 메일로 로그인</span>
//         </LoginBtnContainer>
//         <GradLink>
//           <p>졸업생이신가요? 졸업생 로그인 하러 가기</p>
//         </GradLink>
//       </BottomContainer>
//     </LoginContainer>
//   );
// }

// export default Loginpage;

// const LoginContainer = styled.div`

//  display: flex;
//  flex-direction: column;
//   width: 100vw;
//   height: 100vh;
//   background: var(--Gradient-01, linear-gradient(97deg, #E9DED3 0%, #D3DDEB 100%));

// `;
// const BottomContainer = styled.div`

// display:flex;
// padding: 30px;
// flex-direction: column;
// align-items: center;
// justify-content: center;

// /* border: 2px solid green; */

// `;

// const LoginBtnContainer = styled.div`

// display: flex;
// padding: 10px 78px;
// background-color: gray;
// align-items: center;
// border-radius: 65px;

// & > img{
//   margin-right: 10px;
//   transform: scale(0.85);
// }

// & > span{
//   color: white;
//   font-size: 12px;
// }

// &:hover{
//   cursor: pointer;
//   background-color: aqua;
// }
// `;


// const GradLink = styled.div`

// display: flex;
// margin-top: 10px;
// /* color: #25569D;
//   font-family: "SUIT Variable";
//   font-size: 10.667px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: normal; */
//   border: 2px solid red;
//   padding:30px;

//   & > p{
   
//     border: 2px solid blue;
//     cursor: pointer;
    
//   }
// `;