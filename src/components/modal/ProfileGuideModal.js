import "./ProfileGuideModal.css";
import React, { useState, useEffect } from "react";

const Modal = (props) => {
  // 열기, 닫기를 부모로부터 받아옴
  const { open, close } = props;

  return(
    <div className={open ? 'openModal modal' : 'modal'}>
      
    {open && props !== null ? (
      <section>
      <header>
        <div className='modalHeaderBox'>
          <span>헤더입니다</span>
        </div>
        <button className="close" onClick={close}>
          close
        </button>
      </header>
      <main>
        <span>모달 확인</span>
      </main>
      <footer>

      </footer>
    </section>
    ) : null}
  </div>
  );
};


export default Modal; 