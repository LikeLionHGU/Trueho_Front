import React from "react";
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

  {/* 
    5) 셀 클릭 → 모달
    const handleCellClick = (item) => {
    setSelectedData(item);
    console.log(item.emoProfile);
    openModal();
    document.body.style.overflow = 'hidden';
  };

  onClick={() => handleCellClick(item)}
  */}

  return (
    <>
    
    <div className="chatlist-container">
      {test_chatlist.map((chat) => (
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
