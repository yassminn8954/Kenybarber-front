import styled from 'styled-components';
import Foto from '../../assets/imagem/logo.png'

const FotoLogo = styled.img`
    width: 250px;
    margin-top: 30px;
`;

const Imagem = () => {
  return (
    <FotoLogo src={Foto} alt="Logo" />
  );
}

export default Imagem;