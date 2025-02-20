import React, { useState, useEffect } from "react";
import banner from "../assets/Components/Header/banner.svg";
import banner1 from "../assets/Components/Header/banner1.svg";
import banner2 from "../assets/Components/Header/banner2.svg";

const BannerCarousel = () => {
  // banner.svg를 포함한 이미지 배열 (필요 시 다른 이미지들도 추가)
  const images = [banner, banner1, banner2];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="banner-carousel">
      <img src={images[currentIndex]} alt={`배너 ${currentIndex + 1}`} />
    </div>
  );
};

export default BannerCarousel;
