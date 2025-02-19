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
              <span>필수사항이 전부 입력되지 않았습니다.</span>
              <p>다시 확인해주세요.</p>
            </div>
            <div className={styles.bottomContainer}>
              <div className={`${styles.yesButton} ${styles.button}`} onClick={close}>
                <span>확인</span>
              </div>
            </div>
          </main>
        </section>
      ) : null}
    </div>
  );
};

export default NotEnteredModal;
