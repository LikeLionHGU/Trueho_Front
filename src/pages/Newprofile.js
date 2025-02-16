import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../styles/Newprofile.css";

import profileHansum from "../assets/Page/NewProfile/hansum_img.svg"
import profileHannegi from "../assets/Page/NewProfile/hannegi_img.svg"
import profiledefault from "../assets/Page/NewProfile/default_img.svg"
import muluumpobtn from "../assets/Page/NewProfile/circle.svg"
import profileactive from "../assets/Page/NewProfile/activate_img.png"
import profiledeactive from "../assets/Page/NewProfile/deactivate_img.png"

import Footer from "../components/footer";


function Newprofile() {
  const navigate = useNavigate();

// 1) 처음에 4개의 박스 띄우고 버튼 눌러서 박스 추가하는 함수
  const [boxes, setBoxes] = useState([1, 2, 3, 4]);

  // 새로운 박스 추가하는 함수
  const addBox = () => {
    setBoxes([...boxes, boxes.length + 1]); // 기존 배열에 새 번호 추가 
  };

// 2) 입력 받은 값 배열에 넣기
  const [data, setData] = useState({
    hansum: "2",
    name: "0",
    admission: "0",
    graduation: "0",
    major: "0",
    work: "0",
    history: [
      { 
        name: "0",
        detail: "0",
      }, ],
    showing: "2",
  });

  const onChangeInput = (input) => {
    setData({
      ...data,
      [input.target.name]: input.target.value,
    });
  };

// 3) 한섬 한내기 클릭 했을때 값 저장

  const handleClickHansum = () => {
    setData({
      ...data,
      hansum: "1", // 한섬 클릭 시 hansum 값을 1로 변경
    });
  };

  const handleClickHannegi = () => {
    setData({
      ...data,
      hansum: "0", // 한내기 클릭 시 hansum 값을 0으로 변경
    });
  };

// 4) 프로필 공개 비공개 

const handleClickShow = () => {
  setData({
    ...data,
    showing: "1", // 1이면 공개
  });
};

const handleClickNoShow = () => {
  setData({
    ...data,
    showing: "0", // 0이면 비공개
  });
};


// 5) 배열 값 post 하는 함수
  const postDataToJSONFile = (e) => {
    e.preventDefault();
    console.log("보낼 데이터:", data); // 확인용 로그
    axios.post(`${process.env.REACT_APP_HOST_URL}/main/register`, data, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    })
    .then((response) => {
      console.log("서버 응답:", response.data);
      alert("입력이 완료되었습니다.");
      navigate('/hansum');
    })
    .catch((error) => {
      console.error("에러 발생:", error.response?.data || error);
      alert("에러가 발생했습니다.");
    });
  };

// 6) 사진 업로드 + 사진 미리보기
  const [uploadImgFile, setUploadImgFile] = useState(""); // 미리보기 URL
  const [uploadFile, setUploadFile] = useState(null); // 실제 파일 저장
  const imgRef = useRef();

  const saveImgFile = () => {
    // 입력된 파일을 가져온다.
    const file = imgRef.current.files[0];

    console.log(file);//업로드한 파일의 정보가 보여진다!
    setUploadFile(file);
    //파일 데이터를 읽어올 수 있도록 FileReader 생성자 만들기.
    const reader = new window.FileReader();

    //readAsDataURL - File, Blob을 읽어와 base64로 인코딩 한 문자열을 FileReader 인스턴스의 result라는 속성에 담아준다.
    //간단히 File, Blob 객체를 읽어 Data URL 형태로 바꿔준다!
    reader.readAsDataURL(file);

    //onload - 파일을 성공적으로 읽었을 때 실행.
    reader.onload = () => {
        //파일이 읽어졌다면 result 속성에 담기게 된다.
      setUploadImgFile(reader.result);
    };
  }
// 7) 저장된 사진 API에 전송
const postDataToIMGFile = (e) => {
  e.preventDefault();
  if (!uploadFile) {
    alert("이미지를 업로드해주세요!");
    return;
  }

  const formData = new FormData();
  formData.append("image", uploadFile); // 파일 추가

  console.log("보낼 이미지 데이터:", uploadFile);

  axios.post(`${process.env.REACT_APP_HOST_URL}/main/image`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
    withCredentials: true,
  })
  .then((response) => {
    console.log("서버 응답:", response.data);
    alert("입력이 완료되었습니다.");
    navigate('/hansum');
  })
  .catch((error) => {
    console.error("에러 발생:", error.response?.data || error);
    alert("에러가 발생했습니다.");
    console.error("에러 상태:", error.response?.status);
    console.error("에러 데이터:", error.response?.data);
    console.error("에러 메시지:", error.message);
    alert("에러가 발생했습니다. 콘솔을 확인하세요.");
  });
};

  return (
    <>
    <div className="newprofile-container">
      <div className="newprofile-top-container">
        <div className="newprofile-top-container-first">
          <p>사이트 이용 목적</p>
          <span>한섬(한동대학교 + 섬김이)과 한내기(한동대학교 + 내기)는 한동대학교의 ‘새섬 문화’에서 따온 이름입니다.</span> <br/>
          <span>프로필 공개 여부를 확인하고 설정을 원하는 대로 변경할 수 있습니다.</span>
        </div>

        <div className="newprofile-top-container-second box-row">

          <div className={`newprofile-top-container-second-selectbox ${data.hansum === "1" ? "active" : ""}`} onClick={handleClickHansum}>
            <img src={profileHansum} />
            <div className="newprofile-top-container-second-selectbox-text" >
              <span>한섬</span>
              <p>한동 섬김이로써 멘토로 등록을 원해요</p>
            </div>
          </div>

          <div className="newprofile-top-container-second-selectbox-margin"></div>

          <div className={`newprofile-top-container-second-selectbox ${data.hansum === "0" ? "active" : ""}`} onClick={handleClickHannegi}>
            <img src={profileHannegi} />
            <div className="newprofile-top-container-second-selectbox-text" >
              <span>한내기</span>
              <p>한동 새내기로써 멘티로 등록을 원해요</p>
            </div>
          </div>

        </div>
      </div>

      <div className="newprofile-bottom-container">
        <div className="newprofile-bottom-container-size">
          <div className="newprofile-bottom-container-1">
            <p>프로필 작성하기</p>
            <span>*필수 입력 사항: 닉네임, 입학연도, 졸업연도, 전공 (한섬을 택한 경우, 직무도 필수로 입력해주세요)</span>
          </div>
{/* 2------------------------------------------------------------ */}
          <div className="newprofile-bottom-container-2 box-row">
            <div className="newprofile-bottom-container-2-pic box-column">
              <img src={uploadImgFile || profiledefault} alt="이미지 미리보기" className="newprofile-bottom-container-2-pic-img" />
              
              {/* input과 span을 분리 */}
              <label htmlFor="file-upload" className="newprofile-bottom-container-2-pic-btn">
                <span>사진 등록</span>
              </label>
              <input 
                id="file-upload" 
                className="newprofile-bottom-container-2-pic-btn-input" 
                type="file" 
                onChange={saveImgFile} 
                ref={imgRef} 
                accept="image/*" 
                style={{ display: 'none' }} 
              />
            </div>

            <div className="newprofile-bottom-container-2-njjall box-column">
              {/* 닉네임 입력 */}
              <div className="newprofile-bottom-container-2-njj box-row">
                <div className='container_1'>
                  <span>닉네임</span>
                </div>
                
                {/* input 위에 별표와 인풋박스 */}
                <div className='container_2'>
                  <div className="newprofile-bottom-container-2-njj-input box-column">
                    <div className='star'><span>*</span></div>
                    <input placeholder="텍스트를 입력하세요" type="text" name="name" onChange={onChangeInput}/>
                  </div>
                  </div>
              </div>
              {/* 재학기간 입력------------------------ 여기서 부터 클래스 네임 바꾸고 싶음 바꿔도 됨 */}
              <div className="newprofile-bottom-container-2-njj box-row">
                <div className='container_1'>
                  <span>재학 기간</span>
                </div>
                {/* input 위에 별표와 인풋박스 */}
                <div className='container_2 box-row'>
                  <div className="newprofile-bottom-container-2-njj-input box-column">
                  <div className='star'><span>*</span></div>

                    <select name="admission" className="newprofile-bottom-container-2-njj-input-select" value={data.admission} onChange={onChangeInput}>
                      <option value="" >입학 연도</option>
                      {Array.from({ length: 2025 - 1995 + 1 }, (_, i) => 2025 - i).map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>

                <div className="padding-top"><span> ~ </span></div>
                
                <div className="newprofile-bottom-container-2-njj-input box-column">
                <div className='star'><span>*</span></div>

                  <select name="graduation" className="newprofile-bottom-container-2-njj-input-select" onChange={onChangeInput} value={data.graduation}>
                    <option value="">졸업 연도</option>
                    <option key="재학 중">재학 중</option>
                    {Array.from({ length: 2025 - 1995 + 1 }, (_, i) => 2025 - i).map((year) => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>

                </div>
              </div>
              </div>
              {/* 전공 --------------------------------------------------------------*/}
              <div className="newprofile-bottom-container-2-njj box-row">
                <div className='container_1'>
                  <span>전공</span>
                </div>
                {/* input 위에 별표와 인풋박스 */}
                <div className='container_2'>
                  <div className="newprofile-bottom-container-2-njj-input box-column">
                  <div className='star'><span>*</span></div>
                    <select name="major" className="newprofile-bottom-container-2-njj-input-selectmajor" onChange={onChangeInput} value={data.major}>
                      <option value="">학부 선택</option>
                      <option value="기계제어공학부">기계제어공학부</option>
                      <option value="전산전자공학부">전산전자공학부</option>
                      <option value="생명과학부">생명과학부</option>
                      <option value="공간환경시스템공학부">공간환경시스템공학부</option>
                      <option value="ICT창업학부">ICT창업학부</option>
                      <option value="콘텐츠융합디자인학부">콘텐츠융합디자인학부</option>
                      <option value="커뮤니케이션학부">커뮤니케이션학부</option>
                      <option value="국제어문학부">국제어문학부</option>
                      <option value="경영경제학부">경영경제학부</option>
                      <option value="법학부">법학부</option>
                      <option value="상담심리사회복지학부">상담심리사회복지학부</option>
                      <option value="글로벌리더십학부">글로벌리더십학부</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
{/* 3------------------------------------------------------------ */}
          <div className="newprofile-bottom-container-3 box-row">
            <div className="newprofile-bottom-container-3-z">
              <span>직무</span>
            </div>
                {/* input 위에 별표와 인풋박스 */}
            <div className="newprofile-bottom-container-3-input box-column">
            <div className='star'><span>*</span></div>
              <input placeholder="현재 직무를 작성해 주세요 (ex. 마케터, 웹디자이너)" type="text" name="work" onChange={onChangeInput}></input>
            </div>
          </div>
{/* 4------------------------------------------------------------ */}
          <div className="newprofile-bottom-container-4 box-column">
            <div className="newprofile-bottom-container-4-name">
              <span>대표 이력</span>
              <img src={muluumpobtn}/>
            </div>
          <div className="gridBox">
            {boxes.map((box) => (
                <div key={box} className="newprofile-bottom-container-4-box">
                  <div className="newprofile-bottom-container-4-box-test box-column">
                    <input placeholder="공백 포함 최대 25자 입력하실 수 있습니다" type="text" />
                    <div className="newprofile-bottom-container-4-box-test-in">
                      <input placeholder="이력에 대한 상세한 내용을 공백 포함 최대 300자 내로 작성하실 수 있습니다." type="text" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
          </div>
{/* 5------------------------------------------------------------ */}
        <div className="newprofile-bottom-container-5">
          <div className="newprofile-bottom-container-5-btn" onClick={addBox}>
            <span>약력 추가하기</span>
          </div>
        </div>
{/* 6------------------------------------------------------------ */}
        <div className="newprofile-bottom-container-6">
          <div className="newprofile-bottom-container-6-first">
            <p>프로필 공개 / 비공개 설정</p>
            <span>한섬(한동대 섬김이)의 기본값은 프로필 공개입니다. 만약, 한섬이지만 프로필 공개를 원하지 않는 경우는 비공개로 선택해주세요.</span> <br/>
            <span>프로필을 공개하면 다른 사용자들에게 메시지를 받을 수 있습니다. 비공개로 설정하더라도 원하는 상대에게 메시지를 보낼 수 있습니다.</span>
          </div>

          <div className="newprofile-bottom-container-6-second box-row">
            <div className={`newprofile-bottom-container-6-second-selectbox ${data.showing === "1" ? "active" : ""}`} onClick={handleClickShow}>
              <img src={profileactive} />
              <div className={`newprofile-bottom-container-6-second-selectbox-text ${data.showing === "1" ? "active" : ""}`}>
                <span>프로필 공개</span>
                <p>프로필을 공개하면 한섬들 목록에 올라가며, 메시지를 받습니다</p>
              </div>
            </div>
            <div className="newprofile-bottom-container-6-second-selectbox-margin"></div>
            <div className={`newprofile-bottom-container-6-second-selectbox ${data.showing === "0" ? "active" : ""}`} onClick={handleClickNoShow}>
              <img src={profiledeactive} />
              <div className={`newprofile-bottom-container-6-second-selectbox-text ${data.showing === "0" ? "active" : ""}`}>
                <span>프로필 비공개</span>
                <p>프로필을 공개하면 한섬들 목록에 올라가지 않습니다</p>
              </div>
            </div>
          </div>
        </div>
{/* 7------------------------------------------------------------ */}
        <div className="newprofile-bottom-container-7 box-column">

          <button 
            onClick={(e) => {
              postDataToJSONFile(e);
              postDataToIMGFile(e);
              }} 
              className='newprofile-bottom-container-7-btn' type="submit">
            제출
          </button>
          <p>프로필 수정은 My Page에서 가능합니다</p>
        </div>




        </div>
      </div>
      <Footer /> 
    </div>

    {/* <Footer />  */}
    </>
  );
}

export default Newprofile;