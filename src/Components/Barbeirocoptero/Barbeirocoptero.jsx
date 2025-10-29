import styled from "styled-components";
import Imagem from '../../assets/imagem/barber-pole.png';

export const Giragira = styled.img`
  display: ${({ $display }) => $display || "block"};
  flex: 0 0 auto;
  width: 80px; 
  height: auto;
  margin: 0.25rem; 
  object-fit: contain;
  transition: width 0.2s ease;


  @media (max-width: 1000px) {
    width: 56px;
  }

 
`;

const Barbeirocoptero = ({ $display }) => {
  return <Giragira src={Imagem} alt="Logotipo barbeiro" $display={$display} />;
};

export default Barbeirocoptero;
