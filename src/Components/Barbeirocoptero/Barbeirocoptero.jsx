import styled from "styled-components";
import Imagem from '../../assets/imagem/barber-pole.png';

const Giragira = styled.figure`
  width: 70px;
  margin: 100px;
  
  img {
    width: 100%; 
    height: auto;
    display: block;
  }
`;

const Barbeirocoptero = () => {
  return (
    <Giragira>
      <img src={Imagem} alt="Barber pole" />
    </Giragira>
  );
};

export default Barbeirocoptero;
