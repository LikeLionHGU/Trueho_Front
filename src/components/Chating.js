// import React, { useRef, useState } from 'react';
import React, { useEffect, useState , useRef} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";



import "./styles/Chating.css";

import Profile from "./chating/profile";
import Frompeople from "./chating/frompeople";
import Topeople from "./chating/topeople";

import buttonImg from "../assets/Components/Chating/button.svg";

function Chating() {


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
      getChatings();
    })
    .catch((error) => {
      console.error("에러 발생:", error.response?.data || error);
    });
  };

// 4) 채팅 리스트 가져오기
  const [chatings, setChatings] = useState([]);
  const chatingsRef = useRef(chatings); // chatings 최신 상태를 저장하는 useRef

  const getChatings = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_HOST_URL}/chat/content/${id}`);
      console.log("함수 실행 확인");
      console.log(res);
      const chatingdata = res.data;
      console.log(chatingdata);
// 4)에서 가장 중요 !! 현재 채팅과 새로 불러오는 채팅 비교해서 다를때만 새로고침 되게!
      if  (JSON.stringify(chatingsRef.current) !== JSON.stringify(chatingdata)) {
        setChatings(chatingdata);
        chatingsRef.current = chatingdata; 
      }

    } catch (err) {
      console.error(err);
    }
  }; 

// 5) 처음, 5초마다 새로고침
  useEffect(() => {
    getChatings(); // 최초 실행 되었을 때 함수 불러와서 채팅 띠워라
  
    const interval = setInterval(() => {
      getChatings();
    }, 5000); // 5초마다 채팅 새로고침
  
    return () => clearInterval(interval);
  }, [id]);

// 6) 스크롤 하단 고정
  useEffect(() => {
    const chatContainer = document.querySelector(".chating-container-top");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [chatings]);

  return (
    <>
    
    <div className="chating-container">
      <div className="chating-container-top">
      {chatings.map((chating, index) => {
        const prevSending = index > 0 ? chatings[index - 1].sending : null;

        return (

          <div 
          key={index} 
          className={`chating-container-top-message ${
            chating.sending === 0 ? "left-message" : "right-message"
          }`}
        >
          {/* chating.sending === "0" && prevSending === "0"이면 이미지 표시 */}
          {chating.sending === 0 && prevSending === 1  && (
            <Profile />
          )}

          {chating.sending === 0 ? (
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
