import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/hansum.css";
import UserCard from "../components/usercard";
import MajorFilter from "../components/majorfilter";
import ScrollToTopButton from "../components/scrolltotopbutton";

function HansumPage() {
  const [users, setUsers] = useState([]);
  const [selectedMajor, setSelectedMajor] = useState("All");
  const [loading, setLoading] = useState(true);

  // 실제 id 값을 사용해야 한다면 변수에 저장합니다.
  //const id = `${process.env.REACT_APP_HOST_URL}/hansum/list/${id}`; // 필요에 따라 변경하세요.

  useEffect(() => {
    async function getUsers() {
      try {
        const url = `${process.env.REACT_APP_HOST_URL}/hansum/list/{id}`;
        const response = await axios.get(`${process.env.REACT_APP_HOST_URL}/hansum/list/{id}`);
        console.log("불러온 사용자 데이터:", response.data);
        setUsers(response.data);
      } catch (error) {
       // console.error("사용자 데이터를 불러오는 중 오류 발생:", error);
      } finally {
        setLoading(false);
      }
    }

    getUsers();
  });

  if (loading) {
    return <h2>로딩 중...</h2>;
  }

  if (!Array.isArray(users) || users.length === 0) {
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
          .filter(
            (user) => selectedMajor === "All" || user.major === selectedMajor
          )
          .map((user) => (
            <UserCard key={user.name} user={user} />
          ))}
      </div>
      <ScrollToTopButton />
    </div>
  );
}

export default HansumPage;
