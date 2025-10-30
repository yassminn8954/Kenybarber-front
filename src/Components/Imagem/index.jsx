import styled from 'styled-components';
import Logo from '../../assets/imagem/logo.png'

const FotoLogo = styled.img`
  width: ${({ $width }) => $width || "12vw"};
  height: ${({ $height }) => $height || "auto"};
  margin-top: ${({ $marginTop }) => $marginTop || "30px"};
  transition: width 0.3s ease;
   max-width: 40%;
`;

const Imagem = ({ alt, ...props }) => {
  return <FotoLogo src={Logo} alt={alt} {...props} />;
};

export default Imagem;