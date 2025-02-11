import React from "react";
import "../components/styles/majorfilter.css";

function MajorFilter({ selectedMajor, setSelectedMajor }) {
  const majors = [
    "All", "기계제어공학부", "전산전자공학부", "생명과학부", "공간환경시스템공학부", "ICT창업학부",
    "컨텐츠융합디자인학부", "커뮤니케이션학부", "국제어문학부", "경영경제학부", "법학부", "상담심리사회복지학부"
  ];

  return (
    <div className="major-filter">
      {majors.map((major) => (
        <button 
          key={major} 
          className={selectedMajor === major ? "selected" : ""}
          onClick={() => setSelectedMajor(major)}
        >
          {major}
        </button>
      ))}
    </div>
  );
}

export default MajorFilter;
