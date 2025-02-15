import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Accordion from "../components/Accordion";
import "../components/styles/userDetail.css";
import profileImg from "../assets/Components/Profile/profileimg.svg";

const UserDetailPage = () => {
  const { name } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserDetail() {
      try {
        const response = await fetch("/hansumUsers.json");
        if (!response.ok) {
          throw new Error("데이터 로딩 실패");
        }
        const data = await response.json();

        // 콘솔에 데이터 형태 확인
        console.log("받은 사용자 데이터:", data);

        const foundUser = data.find((u) => u.name === name);
        setUser(foundUser || null);
      } catch (error) {
        console.error("유저 상세정보 불러오기 오류:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchUserDetail();
  }, [name]);

  if (loading) return <h2>로딩 중...</h2>;
  if (!user) return <h2>해당 사용자를 찾을 수 없습니다.</h2>;

  return (
    <div className="user-detail-page">
      <div className="user-detail-container">
        <div className="detail-top">
          <div className="detail-left">
            <img src={profileImg} alt="User" />
          </div>
          <div className="detail-info">
            <h2 className="tagline">{user.name}</h2>
            <p className="study-period">{user.studyPeriod}</p>
          </div>
            <button className="message-button">메시지 보내기</button>
        </div>
        

        <div className="detail-job">
          <h3>직무</h3>
          <div className="job-title">{user.job}</div>
          <div className="user-major">{user.major}</div>
        </div>

        {user.achievements && user.achievements.length > 0 && (
          <div className="detail-achievements">
            <h3>대회 경력</h3>
            <div className="accordion-container">
              {user.achievements.map((achievement, idx) => {
                // achievement.details가 문자열인지 확인하고 아니라면 문자열로 변환
                const details =
                  typeof achievement.details === "string"
                    ? achievement.details
                    : JSON.stringify(achievement.details, null, 2);
                return (
                  <Accordion key={idx} title={achievement.title}>
                    {/* 반드시 문자열 또는 JSX 요소로 감싸서 전달 */}
                    <p>{details}</p>
                  </Accordion>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetailPage;
