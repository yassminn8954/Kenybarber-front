import styled from "styled-components";
import Imagem from '../../assets/imagem/barber-pole.png';

const Giragira = styled.img`
  display: block;
  flex: 0 0 auto;
  width: 56px; 
  height: auto;
  margin: 0.25rem; 
  object-fit: contain;
  transition: width 0.2s ease;

  @media (max-width: 1024px) {
    width: 48px;
  }

  @media (max-width: 768px) {
    width: 40px;
    margin: 0.15rem;
  }

  @media (max-width: 480px) {
    width: 32px;
  }
`;

const Barbeirocoptero = () => {
  return (
    <Giragira src={Imagem} alt="Logotipo barbeiro" />
  );
};

export default Barbeirocoptero;
