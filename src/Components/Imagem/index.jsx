import styled from 'styled-components';
import Foto from '../../assets/imagem/logo.png'

const FotoLogo= styled.figure`
    width: 300px;
`
const Imagem=()=> {
  return(
    <>
     <FotoLogo src={Foto} alt="Logo" />;
     </>
);
}
export default Imagem 