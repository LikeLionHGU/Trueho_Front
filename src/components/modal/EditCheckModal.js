import React, {useState} from 'react';
import styles from "./EditCheckModal.module.css";

import EditCompleteModal from "./EditCompleteModal";


const EditCheckModal = (props) => {
//Newprofile.js에서 열림닫힘, post함수 받아옴
  const { open, close, postAllDataSequentially } = props;

  const [editCompleteModalOpen, setEditCompleteModalOpen] = useState(false);
  const openEditCompleteModal = () => {
    setEditCompleteModalOpen(true);
  };
  const closeEditCompleteModal = () => {
    setEditCompleteModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const editCompleteModalClick = (e) => {
    e.preventDefault(); // form 제출 동작 방지

    postAllDataSequentially(e); // Newprofile.js 전달받은 함수 실행 (페이지에 있는 함수를 모달에서 실행!!!)
    openEditCompleteModal();
    document.body.style.overflow = "auto";
  };

  return (
    <>
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
              <div className={`${styles.noButton} ${styles.button}`} onClick={close}>
                <span>취소</span>
              </div>
              <div className={`${styles.yesButton} ${styles.button}`} onClick={editCompleteModalClick}>
                <span>확인</span>
              </div>
            </div>
          </main>
        </section>
      ) : null}
    </div>
    <EditCompleteModal
      open={editCompleteModalOpen}
      close={closeEditCompleteModal}
    />
    </>
  );
};

export default EditCheckModal;
