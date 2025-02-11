import React, { useState, useRef } from "react";
import axios from "axios";
import styled from "styled-components";

const FileReader = () => {
  const [uploadImgFile, setUploadImgFile] = useState(""); // 이미지 미리보기용
  const [selectedFile, setSelectedFile] = useState(null); // 실제 파일 저장
  const imgRef = useRef(); // input 요소 참조

  // 파일 선택 시 실행되는 함수
  const saveImgFile = () => {
    const file = imgRef.current.files[0];

    if (file) {
      console.log("업로드된 파일 정보:", file);
      setSelectedFile(file);

      const reader = new window.FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => setUploadImgFile(reader.result);
    }
  };

  // 📌 API에 "img" 필드로 파일 업로드
  const uploadFileToServer = async () => {
    if (!selectedFile) {
      alert("파일을 선택해주세요!");
      return;
    }

    const formData = new FormData();
    formData.append("img", selectedFile); // "img" 필드에 파일 추가

    try {
      const response = await axios.post(
        "https://674e9de9635bad45618f3c1c.mockapi.io/books", // 업로드할 API 주소
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("서버 응답:", response.data);
      alert("파일 업로드 성공!");
    } catch (error) {
      console.error("파일 업로드 실패:", error);
      alert("파일 업로드 실패!");
    }
  };

  return (
    <>
      <li>FileReader Web API 사용해보기</li>
      <input type="file" onChange={saveImgFile} ref={imgRef} accept="image/*" />
      <PreviewBox>
        {uploadImgFile && <img src={uploadImgFile} alt="이미지 미리보기" />}
      </PreviewBox>
      <button onClick={uploadFileToServer}>업로드</button>
    </>
  );
};

export default FileReader;

const PreviewBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: wheat;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;
