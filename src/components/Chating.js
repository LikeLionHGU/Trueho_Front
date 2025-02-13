import React from "react";
import "./styles/Chating.css";
import heart from "../assets/Components/ChatList/heart.svg"

function Chating() {

  const test_chatinglist = [
    {
      id  : 1 , 
      name : "잘생긴라이언" ,  
      imgUrl : "img_url1" ,
      lastChat : "마지막 메시지(최대 몇글자 뒤...)" ,
      flag: 0
     }, 
  ];

  return (
    <>
    
    <div className="chatinglist-container">
        
    </div>
    </>
  );
}

export default Chating;
