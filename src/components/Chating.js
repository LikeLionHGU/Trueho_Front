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
      {test_chatinglist.map((chat) => (
        <div key={chat.id} className="chatlist-item">

          <img src={chat.imgUrl} alt={chat.name} className="chatlist-item-img" />

          <div className="chatlist-item-textcontainer">
            <div className="chatlist-item-textcontainer-up">
              <p className="chatlist-item-textcontainer-up-name">{chat.name}</p>
              <img src={heart} alt="heart" className="chatlist-item-textcontainer-up-img" />
            </div>
            <p className="chatlist-item-textcontainer-last">{chat.lastChat}</p>
          </div>

          <div className="chatlist-item-check">
            
          </div>

        </div>
      ))}
    </div>
    </>
  );
}

export default Chating;
