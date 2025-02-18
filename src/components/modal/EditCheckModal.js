import styles from "./EditCheckModal.module.css";
import React from "react";

const Modal = (props) => {
  const { open, close } = props;

  return (
    <div 
      className={open ? `${styles.openModal} ${styles.modal}` : styles.modal} 
      onClick={close} // 모달 바깥 클릭 시 닫힘
    >
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
