import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/hansum.css";
import UserCard from "../components/usercard";
import MajorFilter from "../components/majorfilter";
import ScrollToTopButton from "../components/scrolltotopbutton";
import bannerimg from "../assets/Components/Header/banner.svg";
import "../components/styles/usercard.css";

import Footer from "../components/footer";

import chatBot from "../assets/Components/ChatBot/Chatbot.svg"
import ChatBotModal from "../components/chatBot/ChatBot";
import Loading from "./Loading";


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
  // 초기 표시 개수를 12개로 설정
  const [visibleCount, setVisibleCount] = useState(9);

  
  const [chatBotModalOpen, setChatBotModalOpen] = useState(false);
  const openChatBotModal = () => setChatBotModalOpen(true);
  const closeChatBotModal = () => {
    setChatBotModalOpen(false);
    document.body.style.removeProperty('overflow');
  };

  const chatBotModalClick = () => {
    openChatBotModal();
    document.body.style.overflow = 'hidden';
  };


  useEffect(() => {
    const userId = 0; // 테스트용
    async function getUsers() {
      const data = await fetchUserData(userId);
      setUsers(data);
      setLoading(false);
    }
    getUsers();
  }, []);

  // major가 변경되면 표시 개수를 초기화 (필터 변경 시에도 처음부터 보여주기)
  useEffect(() => {
    setVisibleCount(9);
  }, [selectedMajor]);

  if (loading) {
    return <Loading loading={loading} />;
  }

  if (!users || users.length === 0) {
    return <h2>등록된 사용자가 없습니다.</h2>;
  }

  // 선택한 전공에 따라 사용자 필터링
  const filteredUsers = users.filter(
    (user) => selectedMajor === "All" || user.major === selectedMajor
  );
  // 표시할 사용자 목록 (visibleCount개 만큼)
  const visibleUsers = filteredUsers.slice(0, visibleCount);

  // "더보기" 버튼 클릭 핸들러
  const handleLoadMore = () => {
    setVisibleCount(visibleCount + 9);
  };

  return (
    <>
    <div className="hansum-page">
      <div className="banner-image-container"> 
        <img src={bannerimg} alt="배너 이미지" />
      </div>
          
      <h1 style={{ margin: "20px", marginLeft: "180px" }}>
        <div className="majortext">Major</div>
      </h1>

      <MajorFilter 
        selectedMajor={selectedMajor} 
        setSelectedMajor={setSelectedMajor} 
      />

      <div className="user-grid">
        {visibleUsers.map((user) => (
          // 카드 전체를 클릭하면 유저 상세 페이지(/user/:id)로 이동
          <Link key={user.id} to={`/user/${user.id}`} style={{ textDecoration: "none" }}>
            <UserCard user={user} />
          </Link>
        ))}
      </div>

      {/* 더보기 버튼: 남은 항목이 있을 경우에만 렌더링 */}
      <div className="load-more-container">
      {visibleCount < filteredUsers.length && (
        <button onClick={handleLoadMore} className="load-more-button">
          View More
        </button>
      )}
      </div>
        <div className="chatBot" onClick={() => chatBotModalClick()}>
          <img src={chatBot} />
        </div>
      <ScrollToTopButton />
    </div>
    <Footer/>
    <ChatBotModal
        open={chatBotModalOpen}
        close={closeChatBotModal}
      />
    </>
  );
}

export default HansumPage;
