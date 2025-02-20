import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "../styles/hansum.css";
import MajorFilter from "../components/majorfilter";
import BannerCarousel from "../components/Banner"; // BannerCarousel 컴포넌트 import
import beforehansum from "../assets/Components/Before/background.svg";
import "../styles/beforehansum.css";
import loginGoogle from "../assets/Page/Login/google.svg"


import Header from "../components/header";
import Loading from "./Loading";
import Footer from "../components/footer";



function BeforeHansumPage() {
  const [selectedMajor, setSelectedMajor] = useState("All");
  const navigate = useNavigate();

// 1) 로그인 함수
  const handleGoogleLogin = () => {
    const nonce = Math.random().toString(36).substring(2) + Date.now().toString(36);

    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
		client_id=${process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
		&redirect_uri=${process.env.REACT_APP_GOOGLE_AUTH_REDIRECT_URI}
		&response_type=id_token
		&scope=email profile
    &nonce=${nonce}
    `;
  };

  // 2) 로딩중
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading loading={loading} />;
  }

  return (

    <>
    <Header />
    <div className="hansum-page">
      <div className="banner-image-container">
        <BannerCarousel />
      </div>
      <h1 style={{ margin: "20px", marginLeft: "180px" }}>
        <div className="majortext">Major</div>
      </h1>
      <MajorFilter 
        selectedMajor={selectedMajor} 
        setSelectedMajor={setSelectedMajor} 
      />
      {/* MajorFilter 아래에 beforehansum 이미지 표시 */}
      <div className="before-hansum">
          <div className="login1" onClick={handleGoogleLogin} >
            <img src={loginGoogle} />
            <span>한동대 메일로 로그인</span>
          </div>
        <img src={beforehansum} alt="Before Hansum" />
      </div>
    </div>
    <Footer/>

    </>
  );
}

export default BeforeHansumPage;
