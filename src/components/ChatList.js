import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";

import "./styles/chatlist.css";
import heart from "../assets/Components/ChatList/heart.svg"
import whiteheart from "../assets/Components/ChatList/wheart.svg"


import defaultprofile from "../assets/Components/ChatList/listprofile.svg"


function ChatList() {



// 1) chathome에서 각자의 chatroom으로 들어가기
  const navigate = useNavigate();

  const enterChatRoom = (id) => {
    getList();
    navigate(`/chatroom/${id}`);
    console.log("경로 id 확인합니다 "+id);
  };

// 2) url에 있는 id 값 가져오기
  const { id } = useParams(); 

// 3) 리스트 가져오기
  const [list, setList] = useState([]);
  const getList = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_HOST_URL}/chat/list`);
      console.log("list 함수 실행 확인");
      console.log(res);
      const chatinglist = res.data;
      console.log(chatinglist);
      setList(chatinglist);
    } catch (err) {
      console.error(err);
    }
  }; 
// 4) 페이지 로드되면 list값 불러옴 + 5초마다 새로고침
  useEffect(() => {
    getList();

    const interval = setInterval(() => {
      getList();
    }, 1000); // 1초마다 채팅 새로고침

    return () => clearInterval(interval);
  }, []); 


  return (
    <>
    
    <div className="chatlist-container">
      {list.map((chat) => (
        <div key={chat.id} className={`chatlist-item ${chat.id === Number(id) ? "active" : ""}`} onClick={() => enterChatRoom(chat.id)}>
          <div className="profile">
            <img src={chat.imgUrl || defaultprofile} alt={chat.name} className="chatlist-item-img" />
            <div className={`${chat.unreadMessage === 1 ? "redDot" : ""}`} >
              <div className={`${chat.unreadMessage === 1 ? "redDotIn" : ""}`}>
              
              </div>
            </div>
          </div>


          <div className="chatlist-item-textcontainer">
            <div className="chatlist-item-textcontainer-up">
              <p className={`chatlist-item-textcontainer-up-name ${chat.id === Number(id) ? "active" : ""}`}>{chat.name}</p>
            </div>
            
            <div className="chatlist-zzum">
              <p className={`chatlist-item-textcontainer-last ${chat.id === Number(id) ? "active" : ""} ${chat.unreadMessage === 1 ? "unread" : ""}`}>{chat.lastChat}</p>
            </div>

  
          </div>

          {/* <div className="chatlist-item-check">
            if({chat.unreadMessage === 1}){
              <img src={chat.id === Number(id) ? whiteheart : heart}  alt="heart" className={`chatlist-item-textcontainer-up-img `} />
            }
          </div> */}
          <div className="chatlist-item-check">
            {chat.unreadMessage === 1 ? (
              <img 
                src={chat.id === Number(id) ? whiteheart : heart}  
                alt="heart" 
                className="chatlist-item-textcontainer-up-img" 
              />
            ) : null}
          </div>

          
        </div>
      ))}
    </div>
    </>
  );
}

export default ChatList;
