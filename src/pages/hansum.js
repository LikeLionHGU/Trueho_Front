import React, { useEffect, useState } from "react";
import "../styles/hansum.css";
import UserCard from "../components/usercard";
import MajorFilter from "../components/majorfilter";
import ScrollToTopButton from "../components/scrolltotopbutton";

function HansumPage() {
  const [users, setUsers] = useState([]);
  const [selectedMajor, setSelectedMajor] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(`${process.env.REACT_APP_HOST_URL}/hansum/list`);
        if (!response.ok) {
          throw new Error("데이터 로딩 실패");
        }
        const data = await response.json();
        console.log("불러온 사용자 데이터:", data);
        setUsers(data);
      } catch (error) {
        console.error("사용자 데이터를 불러오는 중 오류 발생:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
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
