import styled from 'styled-components';
import Logo from '../../assets/imagem/logo.png'

const FotoLogo = styled.img`
  width: ${({ $width }) => $width || "12vw"};
  height: ${({ $height }) => $height || "auto"};
  margin-top: ${({ $marginTop }) => $marginTop || "30px"};
  transition: width 0.3s ease;
   max-width: 35%;

   @media (max-width: 1024px) {
    width: 150px;
    }

   @media (max-width: 768px) {
    width: 130px;
    }

`;

const Imagem = ({ alt, ...props }) => {
  return <FotoLogo src={Logo} alt={alt} {...props} />;
};

export default Imagem;