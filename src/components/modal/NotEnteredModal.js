import styles from "./NotEnteredModal.module.css";
import React from "react";

const NotEnteredModal = (props) => {
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
              <span>프로필을 등록하시겠어요?</span>
            </div>
            <div className={styles.bottomContainer}>
              
            </div>
          </main>
        </section>
      ) : null}
    </div>
  );
};

export default NotEnteredModal;
