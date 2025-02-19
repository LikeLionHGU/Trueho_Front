import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
    return response.data; // 배열
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

function HansumPage() {
  const [users, setUsers] = useState([]);
  const [selectedMajor, setSelectedMajor] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = 0; // 테스트용
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
      <h1><div className="majortext">Major</div></h1>

      <MajorFilter 
        selectedMajor={selectedMajor} 
        setSelectedMajor={setSelectedMajor} 
      />

      <div className="user-grid">
        {users
          .filter((user) => selectedMajor === "All" || user.major === selectedMajor)
          .map((user) => (
            // 카드 전체를 클릭하면 유저 상세 페이지(/user/:id)로 이동
            <Link key={user.id} to={`/user/${user.id}`} style={{ textDecoration: "none" }}>
              <UserCard user={user} />
            </Link>
          ))}
      </div>

      <ScrollToTopButton />
    </div>
  );
}

export default HansumPage;
