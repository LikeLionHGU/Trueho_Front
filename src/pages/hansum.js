import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/hansum.css";
import UserCard from "../components/usercard";
import MajorFilter from "../components/majorfilter";
import ScrollToTopButton from "../components/scrolltotopbutton";

// 데이터 fetching 로직을 별도의 함수로 분리
async function fetchUserData(userId) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_HOST_URL}/hansum/list/${userId}`, // userId 변수 사용
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return []; // 에러 발생 시 빈 배열 반환
  }
}

function HansumPage() {
  const [users, setUsers] = useState([]);
  const [selectedMajor, setSelectedMajor] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 예시로 사용할 userId 값 (실제 값으로 교체하세요)
    const userId = 0;

    async function getUsers() {
      const data = await fetchUserData(userId);
      setUsers(data);
      setLoading(false);
    }
    getUsers();
  }, []);

  if (loading) {
    return <h2>로딩 중...</h2>;
  }

  if (!users || users.length === 0) {
    return <h2>등록된 사용자가 없습니다.</h2>;
  }

  return (
    <div className="hansum-page">
      <h1>원하는 한섬을 찾아 메시지를 보내보세요</h1>
      <MajorFilter 
        selectedMajor={selectedMajor} 
        setSelectedMajor={setSelectedMajor} 
      />
      
      <div className="user-grid">
        {users
          .filter((user) => selectedMajor === "All" || user.major === selectedMajor)
          .map((user) => (
            <UserCard key={user.name} user={user} />
          ))}
      </div>

      <ScrollToTopButton />
    </div>
  );
}

export default HansumPage;
