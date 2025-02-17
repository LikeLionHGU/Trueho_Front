import "./ProfileGuideModal.css";
import React, { useState, useEffect } from "react";

const Modal = (props) => {
  // 열기, 닫기를 부모로부터 받아옴
  const { open, close } = props;

  return(
    <div className={open ? 'openModal modal' : 'modal'}>
      
    {open && props !== null ? (
      <div className="modal">안녕 난 모달이야</div>
    ) : null}
  </div>
  );
};


export default Modal; 