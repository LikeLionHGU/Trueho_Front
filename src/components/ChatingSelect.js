import React from "react";
import "./styles/ChatingSelect.css";
import heart from "../assets/Components/ChatList/heart.svg"
import logo from "../assets/Components/ChatingSelect/hansum_logo.svg"


function Chating() {

  return (
    <>
    
    <div className="chatinglist-container">
        <img src={logo} className="chatinglist-container-img"/>
        <div className="chatinglist-container-text">
          <p>채팅 목록에서 프로필을</p>
          <p>선택해주세요</p>
        </div>
    </div>
    </>
  );
}

export default Chating;
