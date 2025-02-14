import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../components/styles/userDetail.css";
import Img from "../assets/Components/Profile/profileimg.svg"
import "../components/styles/usercard.css";

function UserDetailPage() {
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
      {/* 안쪽에 콘텐츠를 담을 컨테이너 */}
      <div className="user-detail-container">
        <div className="detail-top">
          <div className="detail-left">
          <img src={Img}/>
          </div>
            <h2 className="tagline">{user.tagline}
            <p className="study-period">{user.studyPeriod}</p>
            </h2>
            
          
          <button className="message-button">메시지 보내기</button>
        </div>

        <div className="detail-job">
          <h3>직무</h3>
          <div className="job-title">{user.job}</div>
          <div className="user-major">{user.major}</div>
        </div>

        <div className="detail-achievements">
          {user.achievements && user.achievements.length > 0 && (
            <>
              <h3>대회 경력</h3>
              <ul>
                {user.achievements.map((ach, idx) => (
                  <li key={idx}>{ach}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDetailPage;
