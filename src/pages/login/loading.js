import React, { useEffect , useState} from "react";
import sendAccessTokenToBackend from "./sendAccessTokenToBackend";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Load from "../../pages/Loading";
import FailLogin from "../../components/modal/FailLogin";


/*
사용자의 토큰을 받는 페이지
이 페이지에서는 url 에 포함된 response token을 백엔드에 보내고 성공하면 메인화면으로 보내고 실패하면 에러처리를 할것이다. 

URLSearchParams를 통해 url에 있는 토큰을 추출하고 그 토큰을 axios를 사용해 backend에 보낸다. 

이후 성공하면 navigate를 통해 메인화면으로 보낸다. 
실패하면 에러처리 (알아서 ~)

*/

const Loading = () => {
  const navigate = useNavigate();

  //1) 아이디토큰 잘라서 백엔드로 전달 & state 값 받아서 경로 다르게 지정
  useEffect(() => {
    const fetchData = async () => {
      try {
        const parsedHash = new URLSearchParams(window.location.hash.substring(1));
        const idToken = parsedHash.get("id_token");
        console.log("id 토큰: " + idToken);

        // 서버 응답 데이터 받아오기 ! & 경로 지정
        const responseData = await sendAccessTokenToBackend(idToken);
        console.log(responseData);
        console.log(responseData.state);

        if (responseData.state==="0") {
          navigate("/newprofile"); // 처음 로그인 하는 사람은 프로필 등록 페이지로
        } else {
          navigate("/hansum"); // 이미 로그인 했던 사람들은 hansum 페이지로 이동
        }

      } catch (error) {
        openFailModal();

        console.error("로그인 과정에서 에러가 발생했습니다.", error);
      }
    };

    fetchData();
  }, [navigate]);

    // 2) 로그인 실패 모달
    const [failModalOpen, setFailModalOpen] = useState(false);
    const openFailModal = () => setFailModalOpen(true);
    const closeFailModal = () => {
      setFailModalOpen(false);
      document.body.style.removeProperty('overflow');
      navigate("/");
    };
  

  // 3) 로딩중
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Load loading={loading} />;
  }

  return (
    <div>
      {/* <LoginLoding>로그인 중입니다...</LoginLoding> */}
      <FailLogin
        open={failModalOpen}
        close={closeFailModal}
      />
    </div>
  );
};

export default Loading;

const LoginLoding = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin-top: 100px;
`;
