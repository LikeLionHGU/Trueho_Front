import React, { useRef, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";


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
// 1) url에 있는 id 값 가져오기
  const { id } = useParams(); 
  //console.log(id);

// 2) 채팅 입력 받은거 배열에 넣기
  const [data, setData] = useState({
    message: "",
  });

  const onChangeInput = (input) => {
    setData({
      ...data,
      [input.target.name]: input.target.value,
    });
  };

// 3) 채팅 배열 값 post 하는 함수
  const postDataToJSONFile = (e) => {
    e.preventDefault();
    console.log("보낼 데이터:", data); // 확인용 로그
    axios.post(`${process.env.REACT_APP_HOST_URL}/chat/message/${id}`, data, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    })
    .then((response) => {
      console.log("서버 응답:", response.data);
      setData({ message: "" });

    })
    .catch((error) => {
      console.error("에러 발생:", error.response?.data || error);
    });
  };

  return (
    <>
    
    <div className="chating-container">
      <div className="chating-container-top">
      {test_chatinglist.map((chating, index) => {
        const prevSending = index > 0 ? test_chatinglist[index - 1].sending : null;

        return (

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
          <input placeholder="텍스트를 입력하세요" type="text" value={data.message} className="chating-container-bottom-inputbox" name="message" onChange={onChangeInput} onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault(); 
              postDataToJSONFile(e);
            }
  }}/>
        </div>
        <button className="chating-container-bottom-button" onClick={(e) => postDataToJSONFile(e)} type="submit">
          <img src={buttonImg} alt="버튼"/>
        </button>
      </div>
    </div>
    </>
  );
}

export default Chating;
