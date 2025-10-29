import styled from 'styled-components';
import imagem404 from '../../assets/imagem/404.png.png'; // sua imagem

const FullScreen = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${imagem404}) no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 3rem;
  text-shadow: 2px 2px 5px #000;
`;

export default function Erro404() {
  return (
    <FullScreen/>
     
  );
}
