import styles from "./FailMessage.module.css";
import React from "react";

import logo from "../../assets/Components/Modal/logo.svg"

const EditCompleteModal = (props) => {
  const { open, close } = props;

  return (
    <div 
      className={open ? `${styles.openModal} ${styles.modal}` : styles.modal} 
      onClick={close} // 모달 바깥 클릭 시 닫힘
    >
      {open && props !== null ? (
        <section onClick={(e) => e.stopPropagation()}>
          <main>
            <div className={styles.topContainer}>
              <span></span> 
              <p>자기 자신에게는 메세지를</p>
              <p>보낼 수 없습니다 !</p>

              <img src={logo} className={styles.img}/>
            </div>
          </main>
        </section>
      ) : null}
    </div>
  );
};

export default EditCompleteModal;
