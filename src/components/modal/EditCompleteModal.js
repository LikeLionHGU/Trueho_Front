import styles from "./EditCompleteModal.module.css";
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
              <span>프로필이 등록되었습니다.</span> 
              <p>한섬 페이지로 이동합니다 !</p>

              <img src={logo} className={styles.img}/>
            </div>
          </main>
        </section>
      ) : null}
    </div>
  );
};

export default EditCompleteModal;
