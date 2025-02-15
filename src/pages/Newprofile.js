import { useState } from "react";

import "../styles/Newprofile.css";

import profileHansum from "../assets/Page/NewProfile/hansum_img.svg"
import profileHannegi from "../assets/Page/NewProfile/hannegi_img.svg"
import profiledefault from "../assets/Page/NewProfile/default_img.svg"
import muluumpobtn from "../assets/Page/NewProfile/circle.svg"
import profileactive from "../assets/Page/NewProfile/activate_img.png"
import profiledeactive from "../assets/Page/NewProfile/deactivate_img.png"

import Footer from "../components/footer";


function Newprofile() {
// x) 처음에 4개의 박스 띄우고 버튼 눌러서 박스 추가하는 함수
  const [boxes, setBoxes] = useState([1, 2, 3, 4]);

  // 새로운 박스 추가하는 함수
  const addBox = () => {
    setBoxes([...boxes, boxes.length + 1]); // 기존 배열에 새 번호 추가 
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
          <div className="newprofile-top-container-second-selectbox">
            <img src={profileHansum} />
            <div className="newprofile-top-container-second-selectbox-text">
              <span>한섬</span>
              <p>한동 섬김이로써 멘토로 등록을 원해요</p>
            </div>
          </div>
          <div className="newprofile-top-container-second-selectbox-margin"></div>
          <div className="newprofile-top-container-second-selectbox">
            <img src={profileHannegi} />
            <div className="newprofile-top-container-second-selectbox-text">
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
              <img src={profiledefault} className="newprofile-bottom-container-2-pic-img"/>
              <div className="newprofile-bottom-container-2-pic-btn">
                <span>사진 등록</span>
              </div>
            </div>
            <div className="newprofile-bottom-container-2-njj box-column">
              {/* 닉네임 입력 */}
              <div className="newprofile-bottom-container-2-njj box-row">
                <span>닉네임</span>
                {/* input 위에 별표와 인풋박스 */}
                <div className="newprofile-bottom-container-2-njj-input box-column">
                  <span>*</span>
                  <input placeholder="텍스트를 입력하세요" type="text"></input>
                </div>
              </div>
              {/* 재학기간 입력------------------------ 여기서 부터 클래스 네임 바꾸고 싶음 바꿔도 됨 */}
              <div className="newprofile-bottom-container-2-njj box-row">
                <span>재학 기간</span>
                {/* input 위에 별표와 인풋박스 */}
                <div className="newprofile-bottom-container-2-njj-input box-column">
                  <span>*</span>
                  <select name="admission" className="newprofile-bottom-container-2-njj-input-select">
                    <option disabled hidden selected >입학 연도</option>
                    {Array.from({ length: 2025 - 1995 + 1 }, (_, i) => 2025 - i).map((year) => (
                      <option key={year} value={year}>{year}<span>년</span></option>
                    ))}
                  </select>
                </div>

                <div className="padding-top"><span> ~ </span></div>
                
                <div className="newprofile-bottom-container-2-njj-input box-column">
                  <span>*</span>
                  <select name="graduation" className="newprofile-bottom-container-2-njj-input-select">
                    <option disabled hidden selected >졸업 연도</option>
                    <option key="재학 중">재학 중</option>
                    {Array.from({ length: 2025 - 1995 + 1 }, (_, i) => 2025 - i).map((year) => (
                      <option key={year} value={year}>{year}<span>년</span></option>
                    ))}
                  </select>
                </div>
              </div>
              {/* 전공 --------------------------------------------------------------*/}
              <div className="newprofile-bottom-container-2-njj box-row">
                <span>전공</span>
                {/* input 위에 별표와 인풋박스 */}
                <div className="newprofile-bottom-container-2-njj-input box-column">
                  <span>*</span>
                  <select name="major" className="newprofile-bottom-container-2-njj-input-selectmajor">
                    <option disabled hidden selected>학부 선택</option>
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
{/* 3------------------------------------------------------------ */}
          <div className="newprofile-bottom-container-3 box-row">
            <span>직무</span>
                {/* input 위에 별표와 인풋박스 */}
            <div className="newprofile-bottom-container-3-input box-column">
              <span>*</span>
              <input placeholder="현재 직무를 작성해 주세요 (ex. 마케터, 웹디자이너)" type="text"></input>
            </div>
          </div>
{/* 4------------------------------------------------------------ */}
          <div className="newprofile-bottom-container-4 box-column">
            <div className="newprofile-bottom-container-4-name box-row">
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
            <div className="newprofile-bottom-container-6-second-selectbox">
              <img src={profileactive} />
              <div className="newprofile-bottom-container-6-second-selectbox-text">
                <span>프로필 공개</span>
                <p>프로필을 공개하면 한섬들 목록에 올라가며, 메시지를 받습니다</p>
              </div>
            </div>
            <div className="newprofile-bottom-container-6-second-selectbox-margin"></div>
            <div className="newprofile-bottom-container-6-second-selectbox">
              <img src={profiledeactive} />
              <div className="newprofile-bottom-container-6-second-selectbox-text">
                <span>프로필 비공개</span>
                <p>프로필을 공개하면 한섬들 목록에 올라가지 않습니다</p>
              </div>
            </div>
          </div>
        </div>
{/* 7------------------------------------------------------------ */}
        <div className="newprofile-bottom-container-7 box-column">
          <div className="newprofile-bottom-container-7-btn">
            <span>프로필 등록하기</span>
          </div>
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