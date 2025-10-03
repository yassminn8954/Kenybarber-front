import { useState } from "react";
import styled from "styled-components";
import Imagem1 from '../../../public/imagem/carrossel2.jpg';
import Imagem2 from '../../../public/imagem/carrossel3.png';
import Imagem3 from '../../../public/imagem/carrossel4.jpg';
import Imagem4 from '../../../public/imagem/carrossel5.jpg';


const CarouselContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;


const CarouselInner = styled.div`
  display: flex;
  height: 100%;
  transition: transform 0.5s ease;
  transform: translateX(${props => -props.$currentIndex * 100}vw);
`;

const CarouselItem = styled.div`
  flex: 0 0 100vw;
  height: 100vh;

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    display: block;
    border-radius: 30px; */
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 260px;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  padding: 10px 14px;
  font-size: 3rem;
  cursor: pointer;
  border-radius: 2px;
  opacity: 0.6;
  z-index: 10;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const PrevButton = styled(NavButton)` left: 20px; `;
const NextButton = styled(NavButton)` right: 20px; `;

const images = [Imagem1, Imagem2, Imagem3, Imagem4];

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
