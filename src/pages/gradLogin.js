import styles from "../styles/gradLogin.css";
import gradHansumLogo from "../assets/Page/GradLogin/hamsum_logo.png"

// import Header from "../components/header";

function GradLoginpage() {
  

  return (
    <>
    {/* <Header /> */}
    <div className="gradLogin-container">
      <div className="gradLogin-lar-container1">
        {/* 왼쪽 */}
        <div className="gradLogin-med-container1">
          <div className="gradLogin-med-container1-text1">
            <span>졸업생 인증</span>
          </div>
          <div className="gradLogin-med-container1-text2">
            <p>졸업생 인증을 원하시면 여기로 연락주세요</p>
            <p><span>0000000@handong.ac.kr</span></p>
          </div>
        </div>
        {/* 오른쪽 */}
        <div className="gradLogin-med-container2">
          <div className="gradLogin-med-container2-icon1">
            <span>Welcome to</span>
          </div>
          <div className="gradLogin-med-container2-icon2">
            <img src={gradHansumLogo} />
          </div>
        </div>
      </div>


      <div className="gradLogin-lar-container2">
        <div className="gradLogin-small-container1">
          <span>뒤로가기</span>
        </div>
      </div>
    </div>
    </>
    
  );
} 

export default GradLoginpage;
