import styled from 'styled-components';

const FotoLogo = styled.img`
  width: ${({ $width }) => $width || "12vw"};
  height: ${({ $height }) => $height || "auto"};
  margin-top: ${({ $marginTop }) => $marginTop || "30px"};
  transition: width 0.3s ease;
   max-width: 40%;
`;

const Imagem = ({ src, alt, ...props }) => {
  return <FotoLogo src={src} alt={alt} {...props} />;
};

export default Imagem;