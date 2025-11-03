import Imagem from '../../Components/Imagem'
import Botao from '../../Components/Botao'
import styled from 'styled-components';
import CampoTexto from '../../Components/CampoTexto';

export const Fundo = styled.div`
  min-height: 100vh; /* 🔹 ocupa a tela inteira */
  width: 100%;
  background-color: ${({ $backgroundcolor }) => $backgroundcolor || "#000"};
  display: flex;
  justify-content: center; /* 🔹 centraliza horizontalmente */
  align-items: center;     /* 🔹 centraliza verticalmente */
  flex-direction: column;  /* ou row, se quiser imagem ao lado */
  padding: 20px;
  box-sizing: border-box;
  overflow: auto; /* 🔹 evita corte em telas pequenas */
`;

export const Formulario = styled.div`
  background-color: #0c0b0b;
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 5px 6px #4d3d19;
  gap: 30px;
  border-radius: 8px;
  padding: 40px 20px; /* 🔹 dá espaço interno */
  box-sizing: border-box;
  height: auto;

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 480px) {
    width: 85%;
  }
`;

const Cadastro = () => {
  return (
    <Fundo>
      <Formulario>
        <Imagem $marginTop="20px" />
        <CampoTexto />
      </Formulario>
    </Fundo>
  );
}

export default Cadastro;
