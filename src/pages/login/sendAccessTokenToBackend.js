import axios from "axios";

const sendAccessTokenToBackend = async (idToken) => {
  console.log("아이디토큰: "+ idToken);
  try {
    const serverResponse = await axios.post(
      `${process.env.REACT_APP_HOST_URL}/main/login?id_token=${idToken}`, // id_token을 쿼리 파라미터로 전달
      {
        
      }, // 요청 본문은 빈 객체
     
    );

    console.log("Login successful with server response:", serverResponse);
    localStorage.setItem("memberId", serverResponse.data.memberId);

    return serverResponse.data;
  } catch (error) {
    console.error("Login failed with error:", error);
    throw error;
  }
};

export default sendAccessTokenToBackend;
