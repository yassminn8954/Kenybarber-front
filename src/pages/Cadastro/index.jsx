import Imagem from '../../Components/Imagem'
import Botao from '../../Components/Botao'
import styled from 'styled-components';
import CampoTexto from '../../Components/CampoTexto';

 const Fundo = styled.div`
  height: 90vh;
  width: 100vw;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Formulario = styled.div`
    background-color: #0c0b0b;
    width: 35vw;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 5px 6px #4d3d19;
    gap: 30px;
    border-radius: 4px;
    height: ${({ $height }) => $height || '42vw'} ;
`;

const Cadastro = () => {
  return (
    <Fundo>
      <Formulario>
        <Imagem />
        <CampoTexto />
        <Botao texto="Já tenho conta" destino="/login" />
      </Formulario>
    </Fundo>
  );
}
export default Cadastro