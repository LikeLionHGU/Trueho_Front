import React from 'react';
import { ClipLoader } from 'react-spinners'; // ClipLoader 임포트 확인
import styles from "../styles/Loading.module.css";

import loading from "../assets/Components/Loading/loading.svg"


const override = {
  display: 'block',
  margin: '0 auto',
  marginTop: '220px',
  textAlign: 'center',
};

const Loading = ({ loading }) => {
  if (!loading) return null; // 로딩 중이 아닐 때는 아무것도 렌더링하지 않음

  return (
    <div style={{ textAlign: 'center' }}>
      <ClipLoader
        color="#25569D"
        cssOverride={override}
        loading={loading}
        size={100}
        speedMultiplier={0.7}
      >
        {/* <img src={loading} /> */}
      </ClipLoader>
      <div className={styles.loadtext}>
        <span>Loading ...</span>
      </div>
    </div>
  );
};

export default Loading;
