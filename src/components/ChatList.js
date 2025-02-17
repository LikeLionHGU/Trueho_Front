import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";

import "./styles/chatlist.css";
import heart from "../assets/Components/ChatList/heart.svg"
import defaultprofile from "../assets/Components/ChatList/listprofile.svg"


function ChatList() {

  const test_chatlist = [
    {
      id  : 1 , 
      name : "잘생긴라이언" ,  
      imgUrl : "img_url1" ,
      lastChat : "마지막 메시지(최대 몇글자 뒤...)" ,
      flag: 0
     }, {
      id  : 2 , 
      name : "잘생긴사자" ,  
      imgUrl : "img_url2" ,
      lastChat : "마지막 메시지(최대 몇글자 뒤...)" ,
      flag: 0
     }, {
      id  : 3 , 
      name : "잘생긴호랑이" ,  
      imgUrl : "img_url3" ,
      lastChat : "마지막 메시지(최대 몇글자 뒤...)" ,
      flag: 0
     }, {
      id  : 4 , 
      name : "잘생긴라이언" ,  
      imgUrl : "img_url1" ,
      lastChat : "마지막 메시지(최대 몇글자 뒤...)" ,
      flag: 0
     }, {
      id  : 5 , 
      name : "잘생긴사자" ,  
      imgUrl : "img_url2" ,
      lastChat : "마지막 메시지(최대 몇글자 뒤...)" ,
      flag: 0
     }, {
      id  : 6 , 
      name : "잘생긴호랑이" ,  
      imgUrl : "img_url3" ,
      lastChat : "마지막 메시지(최대 몇글자 뒤...)" ,
      flag: 0
     }, {
      id  : 7 , 
      name : "잘생긴라이언" ,  
      imgUrl : "img_url1" ,
      lastChat : "마지막 메시지(최대 몇글자 뒤...)" ,
      flag: 0
     }, {
      id  : 8 , 
      name : "잘생긴사자" ,  
      imgUrl : "img_url2" ,
      lastChat : "마지막 메시지(최대 몇글자 뒤...)" ,
      flag: 0
     }, {
      id  : 9 , 
      name : "잘생긴호랑이" ,  
      imgUrl : "img_url3" ,
      lastChat : "마지막 메시지(최대 몇글자 뒤...)" ,
      flag: 0
     },
  ];



// 1) chathome에서 각자의 chatroom으로 들어가기
  const navigate = useNavigate();

  const enterChatRoom = (id) => {
    navigate(`/chatroom/${id}`);
  };

// 2) url에 있는 id 값 가져오기
  const { id } = useParams(); 

// 3) 리스트 가져오기
const [list, setList] = useState([]);
const getList = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_HOST_URL}/chat/list`);
    // console.log("함수 실행 확인");
    // console.log(res);
    const chatinglist = res.data;
    // console.log(chatinglist);
    setList(chatinglist);
  } catch (err) {
    console.error(err);
  }
}; 
//페이지 로드되면 list값 불러옴
useEffect(() => {
  getList();
}, []); 


  return (
    <>
    
    <div className="chatlist-container">
      {list.map((chat) => (
        <div key={chat.id} className="chatlist-item" onClick={() => enterChatRoom(chat.id)}>

          <img src={defaultprofile} alt={chat.name} className="chatlist-item-img" />

          <div className="chatlist-item-textcontainer">
            <div className="chatlist-item-textcontainer-up">
              <p className="chatlist-item-textcontainer-up-name">{chat.name}</p>
            </div>
            <p className="chatlist-item-textcontainer-last">{chat.lastChat}</p>
            
          </div>

          <div className="chatlist-item-check">
            <img src={heart} alt="heart" className="chatlist-item-textcontainer-up-img" />
          </div>

        </div>
      ))}
    </div>
    </>
  );
}

export default ChatList;
