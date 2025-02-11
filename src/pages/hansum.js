import React, { useState } from "react";
import "../styles/hansum.css"; // ✅ 대소문자 맞춰서 import
import MajorFilter from "../components/majorfilter"; // ✅ 대소문자 맞춤
import UserCard from "../components/usercard"; // ✅ 소문자로 변경
import ScrollToTopButton from "../components/scrolltotopbutton"; // ✅ 소문자로 변경



const sampleUsers = [
  { name: "사용자1", major: "전산전자공학부", jobTitle: "소프트웨어 엔지니어", profileImage: "profile1.png" },
  { name: "사용자2", major: "경영경제학부", jobTitle: "마케팅 매니저", profileImage: "profile2.png" },
];

function HansumPage() {
  const [selectedMajor, setSelectedMajor] = useState("All");

  return (
    <div className="hansum-page">
      <h1>원하는 한섬을 찾아 메시지를 보내보세요</h1>
      <MajorFilter selectedMajor={selectedMajor} setSelectedMajor={setSelectedMajor} />
      <div className="user-grid">
        {sampleUsers
          .filter(user => selectedMajor === "All" || user.major === selectedMajor)
          .map(user => <UserCard key={user.name} {...user} />)}
      </div>
      <ScrollToTopButton />
    </div>
  );
}

export default HansumPage;
