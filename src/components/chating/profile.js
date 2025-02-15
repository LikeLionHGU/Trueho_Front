import "./profile.css";
import profileImg from "../../assets/Components/Chating/profile.svg";



function profile() {
  return(
    <>
    <div className="profile-container">
      <div >
        <img src={profileImg} alt="프로필" className="profile-container-img"/>
      </div>
      <span>춤추는 고라니</span>
    </div>
    </>
  );
}

export default profile;
