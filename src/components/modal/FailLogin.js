import styles from "./FailLogin.module.css";
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
              <span>로그인이 실패했습니다.</span> 
              <p>한동 메일로 로그인 해주세요 !</p>

              <img src={logo} className={styles.img}/>
            </div>
          </main>
        </section>
      ) : null}
    </div>
  );
};

export default EditCompleteModal;
