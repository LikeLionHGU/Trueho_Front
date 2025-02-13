import React from "react";
import "./styles/Chating.css";

import Profile from "./chating/profile";
import Frompeople from "./chating/frompeople";
import Topeople from "./chating/topeople";

import buttonImg from "../assets/Components/Chating/button.svg";

function Chating() {

  const test_chatinglist = [
    {
      sending : "0" ,  
      message : "안녕하세요" ,
      time : "22/02/06 18:00" ,
     }, {
      sending : "1" ,  
      message : "안녕하세요 !" ,
      time : "22/02/06 18:00" ,
     },  {
      sending : "1" ,  
      message : "선배님께 질문이 있습니다 !" ,
      time : "22/02/06 18:00" ,
     }, {
      sending : "0" ,  
      message : "오" ,
      time : "22/02/06 18:00" ,
     }, {
      sending : "0" ,  
      message : "편하게 질문 해주세요" ,
      time : "22/02/06 18:00" ,
     }, {
      sending : "1" ,  
      message : "~~대회에서는 어떤 주제로 발표 하셨나요?" ,
      time : "22/02/06 18:00" ,
     }, {
      sending : "0" ,  
      message : "아 저는 그 주제에서 Text box Text Box Text box Text box Text box Text box Text Box Text box Text box Text boxText box Text Box Text box Text box Text box dfkdsaskljklasjfkldjfakjkjkjkjfjkjkjlajkfda" ,
      time : "22/02/06 18:00" ,
     }, {
      sending : "1" ,  
      message : "우와" ,
      time : "22/02/06 18:00" ,
     }, {
      sending : "1" ,  
      message : "대단하십니다 슨배림 !!" ,
      time : "22/02/06 18:00" ,
     }, {
      sending : "1" ,  
      message : "또 질문이 있습니다 !" ,
      time : "22/02/06 18:00" ,
     }, {
      sending : "1" ,  
      message : "이 부분에 대해서도 궁금해요 !" ,
      time : "22/02/06 18:00" ,
     }, {
      sending : "1" ,  
      message : "학교생활에서 가장 기억에 남으신 활동이 뭘까요??" ,
      time : "22/02/06 18:00" ,
     }, {
      sending : "0" ,  
      message : "아 저는 아무래도" ,
      time : "22/02/06 18:00" ,
     }, {
      sending : "0" ,  
      message : "멋사죠!!" ,
      time : "22/02/06 18:00" ,
     },
  ];

  return (
    <>
    
    <div className="chating-container">
      <div className="chating-container-top">
      {test_chatinglist.map((chating, index) => {
        const prevSending = index > 0 ? test_chatinglist[index - 1].sending : null;

        return (
          // <div key={index} className={`chating-container-top-message ${chating.sending === "0" ? "left-message" : "right-message"}`}>
          //   {/* sending 값에 따른 조건문 0이면 왼쪽 1이면 오른쪽*/}
          //   {chating.sending === "0" ? (
              
          //     // sending 값이 "0"일 때
          //     <Topeople>{chating.message}</Topeople>
          //   ) : (
          //     // sending 값이 "1"일 때
          //     <Frompeople>{chating.message}</Frompeople>
          //   )}
          // </div>

          <div 
          key={index} 
          className={`chating-container-top-message ${
            chating.sending === "0" ? "left-message" : "right-message"
          }`}
        >
          {/* chating.sending === "0" && prevSending === "0"이면 이미지 표시 */}
          {chating.sending === "0" && prevSending === "1"  && (
            <Profile />
          )}

          {chating.sending === "0" ? (
            <Topeople>{chating.message}</Topeople>
          ) : (
            <Frompeople>{chating.message}</Frompeople>
          )}
        </div>
        );
      })}
      </div>
      <div className="chating-container-bottom">
        <div className="chating-container-bottom-input">
          <input placeholder="텍스트를 입력하세요" type="text" className="chating-container-bottom-inputbox"></input>
        </div>
        <div className="chating-container-bottom-button">
          <img src={buttonImg} alt="버튼"/>
        </div>
      </div>
    </div>
    </>
  );
}

export default Chating;
