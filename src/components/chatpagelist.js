import React from "react";
import "./styles/chatpagelist.css";

function ChatList() {
  const messages = ["안녕!", "잘 지내?", "뭐해?", "오늘 날씨 좋다", "밥 먹었어?", "리액트 공부 중?", "내일 뭐해?", "좋은 하루!", "화이팅!", "잘자!"];

  const test_chatlist = [
    {
      id  : 1 , 
      name : "잘생긴라이언" ,  
      imgUrl : "img_url1" ,
      lastChat : "안녕하세요" ,
      flag: 0
     }, {
      id  : 2 , 
      name : "잘생긴사자" ,  
      imgUrl : "img_url2" ,
      lastChat : "반갑습니다" ,
      flag: 0
     }, {
      id  : 3 , 
      name : "잘생긴호랑이" ,  
      imgUrl : "img_url3" ,
      lastChat : "안녕히계세요" ,
      flag: 0
     },
  ];

  return (
    <div className="chatlist-container">
      {test_chatlist.map((chat) => (
        <div key={chat.id} className="chatlist-item">

          <img src={chat.imgUrl} alt={chat.name} className="chatlist-item-img" />

          <div className="chatlist-item-textcontainer">
            <p className="chatlist-item-textcontainer-name">{chat.name}</p>
            <p className="chatlist-item-textcontainer-last">{chat.lastChat}</p>
          </div>

          <div className="chatlist-item-check">
            
          </div>

        </div>
      ))}
    </div>
  );
}

export default ChatList;
