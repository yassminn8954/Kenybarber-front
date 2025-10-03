import styled from "styled-components";
import Imagem from "../../../public/imagem/barber-pole.png";

const Giragira = styled.figure`
  width: 60px;
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
