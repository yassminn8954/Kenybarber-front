import { useState } from "react";

import { CarouselContainer, CarouselInner, CarouselItem, NavButton, PrevButton, NextButton, images } from "./Carrossel.js"

const Carrossel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <CarouselContainer>
      <CarouselInner $currentIndex={currentIndex}>
        {images.map((img, idx) => (
          <CarouselItem key={idx}>
            <img src={img} alt={`Slide ${idx + 1}`} />
          </CarouselItem>
        ))}
      </CarouselInner>
      <PrevButton onClick={prevSlide}>‹</PrevButton>
      <NextButton onClick={nextSlide}>›</NextButton>
    </CarouselContainer>
  );
};

export default Carrossel;
