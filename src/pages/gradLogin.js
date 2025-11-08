/* eslint-disable */
import styles from "../styles/gradLogin.css";
import mainBBackground from "../assets/Page/jolupB.jpg"

import { useNavigate } from "react-router";
import Header from "../components/header";


function GradLoginpage() {

  const navigate = useNavigate();

  function enterLoginPage (){
    navigate("/");
  };
  

  return (
    <> 
    <Header />
    <div className="gradLogin-container" >
      <img 
        src={mainBBackground} 

      />
      <div className="gradLogin-lar-container2">
        <div className="gradLogin-small-container1" onClick={enterLoginPage}>
          <span>뒤로가기</span>
        </div>
      </div>
    </div>
    </>
    
  );
} 

export default GradLoginpage;
