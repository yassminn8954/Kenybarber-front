import Imagem from '../../Components/Imagem'
import Botao from '../../Components/Botao'
import styled from 'styled-components';
import CampoTexto from '../../Components/CampoTexto';

const Fundo = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Formulario = styled.form`
    background-color: #000;
    width: 700px;
    flex-direction: column;
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 5px 6px #4d3d19;
    gap: 30px;
    border-radius: 4px;
`;

const Cadastro = () => {
  return (
    <Fundo>
      <Formulario>
        <Imagem />
        <CampoTexto />
        <Botao />
      </Formulario>
    </Fundo>
  );
}
export default Cadastro