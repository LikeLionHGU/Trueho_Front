import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // ★ 추가
import "../styles/hansum.css";
import UserCard from "../components/usercard";
import MajorFilter from "../components/majorfilter";
import ScrollToTopButton from "../components/scrolltotopbutton";

async function fetchUserData(userId) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_HOST_URL}/hansum/list/${userId}`, 
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    return response.data; // 응답이 배열이라고 가정
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
    const userId = 0; // 예: 특정 ID (테스트용)

    async function getUsers() {
      const data = await fetchUserData(userId);
      setUsers(data);     // data가 배열이어야 filter 사용 가능
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
            // ★ user.id를 이용해서 상세 페이지로 이동할 수 있도록 Link 사용
            <Link 
              to={`/user/${user.id}`} 
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <UserCard user={user} />
            </Link>

          ))}
      </div>

      <ScrollToTopButton />
    </div>
  );
}

export default HansumPage;
