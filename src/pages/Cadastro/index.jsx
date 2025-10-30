import Imagem from '../../Components/Imagem'
import Botao from '../../Components/Botao'
import styled from 'styled-components';
import CampoTexto from '../../Components/CampoTexto';

 export const Fundo = styled.div`
  height: 90vh;
  width: 100vw;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Formulario = styled.div`
    background-color: #0c0b0b;
    width: 35%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 5px 6px #4d3d19;
    gap: 30px;
    border-radius: 4px;
    height: ${({ $height }) => $height || '45vw'} ;
`;

const Cadastro = () => {
  return (
    <Fundo>
      <Formulario>
        <Imagem />
        <CampoTexto /> 
    
      </Formulario>
    </Fundo>
  );
}
export default Cadastro