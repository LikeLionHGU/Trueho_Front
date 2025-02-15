import React from "react";
import Accordion from "./accordion.css";

const awards = [
  {
    title: "2016년 한국투자증권 모의투자 대회 우수상",
    content: "상세 설명: 모의투자 대회에서 우수한 성적을 거둔 사례.",
  },
  {
    title: "2016년 한국투자증권 모의투자 대회 우수상",
    content: "추가 설명: 동일한 대회에서 또 다른 성과.",
  },
];

const AwardList = () => {
  return (
    <div className="award-list">
      <h3>대표 약력</h3>
      <div className="accordion-container">
        {awards.map((award, index) => (
          <Accordion key={index} title={award.title} content={award.content} />
        ))}
      </div>
    </div>
  );
};

export default AwardList;
