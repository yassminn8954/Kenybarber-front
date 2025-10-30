import styled from 'styled-components';


export const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Judson', serif;
  background-color: ${({ $corfundo }) => $corfundo || 'rgba(0, 0, 0, 0.09)'};
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  font-family: 'Judson', serif;
  padding: 0 15px;
  gap: 80px 60px;

  @media(max-width:480px){
    gap: 5px;
    margin-left: 30px;
}
`;

export const FooterSection = styled.div`
  flex: 1 1 250px;
  margin-bottom: 30px;

  h2, h3 {
    color: ${({ $corTexto }) => $corTexto || '#000'};
    font-size: 30px;
    margin-bottom: 5px;
  }

  p {
    color: ${({ $corTexto }) => $corTexto || '#000'};
    margin: 10px 0;
    font-size: 18px;
  }

  @media(max-width:480px){
     display: ${({$display})=> $display || "block"} ;
  }

`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  a {
    transition: transform 0.3s;

    img {
      width: 30px;
      height: 30px;
      filter: ${({ $corTexto }) =>
        $corTexto === '#fff' ? 'brightness(0) invert(1)' : 'none'};
    }

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  border-top: 1px solid rgba(68, 68, 68, 0.5);
  padding: 15px 0 10px;
  color: ${({ $corTexto }) => $corTexto || '#000'};
`;
