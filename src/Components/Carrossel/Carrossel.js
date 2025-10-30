import styled from "styled-components";
import Imagem1 from '../../assets/imagem/carrossel2.jpg';
import Imagem2 from '../../assets/imagem/carrossel3.png';
import Imagem3 from '../../assets/imagem/carrossel4.jpg';
import Imagem4 from '../../assets/imagem/carrossel5.jpg';

export const CarouselContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  margin: none;
`;


export const CarouselInner = styled.div`
  display: flex;
  height: 100%;
  transition: transform 0.5s ease;
  transform: translateX(${props => -props.$currentIndex * 100}vw);
`;

export const CarouselItem = styled.div`
  flex: 0 0 100vw;


  img {
    width: 100%;
    height: 650px;
    object-fit: cover;
    display: block;
    border-radius: 30px; 

    @media(max-width: 1000px){
      
        height: 480px;
      
    }

    @media(max-width: 768px){
      
        height: 350px;
      
    }

    @media(max-width:480px){
      
        height: 250px;
      
    }
  }
`;

export const NavButton = styled.button`
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

export const PrevButton = styled(NavButton)` left: 20px; `;
export const NextButton = styled(NavButton)` right: 20px; `;

export const images = [Imagem1, Imagem2, Imagem3, Imagem4];
