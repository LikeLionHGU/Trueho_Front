import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

import "./profile.css";
import profileImg from "../../assets/Components/Chating/profile.svg";



function Profile() {

  const { id } = useParams(); 
// 1) 프로필 이미지와 닉넴 가져오는 함수
  const [data, setData] = useState({ name: "", imgUrl: profileImg });
  const getData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_HOST_URL}/chat/profile/${id}`);

      const profiledata = res.data;
      setData(profiledata);
    } catch (err) {
      console.error(err);
    }
  }; 

    useEffect(() => {
      getData();
    }, [id]);

  return(
    <>
    <div className="profile-container">
      <div >
        <img src={data.imgUrl || profileImg} alt="프로필" className="profile-container-img"/>
      </div>
      <span>{data.name || "알 수 없음"}</span>
    </div>
    </>
  );
}

export default Profile;
