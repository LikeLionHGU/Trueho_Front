import "./EditCheckModal.css";
import React, { useState, useEffect } from "react";

const Modal = (props) => {
  // 열기, 닫기를 부모로부터 받아옴
  const { open, close } = props;

  return(
    <div className={open ? 'openModal modal' : 'modal'} onClick={close}>
      
    {open && props !== null ? (
      <section onClick={(e) => e.stopPropagation()}>

      <main>
        <span>수정 모달 확인</span>
      </main>

    </section>
    ) : null}
  </div>
  );
};


export default Modal; 