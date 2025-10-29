import styled from "styled-components";
import Imagem from '../../assets/imagem/barber-pole.png';

<<<<<<< HEAD
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
=======
const Giragira = styled.figure`
  width: 70px;
  margin: 100px;
  
  img {
    width: 100%; 
    height: auto;
    display: block;
>>>>>>> 992437ae2fab086495204cbc90f32146d5959fba
  }
`;

const Barbeirocoptero = () => {
  return (
    <Giragira src={Imagem} alt="Logotipo barbeiro" />
  );
};

export default Barbeirocoptero;
