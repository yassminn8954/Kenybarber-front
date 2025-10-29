import styled from 'styled-components';
import Instagram from '../../assets/sociais/instagram-icon.png';
import Twitter from '../../assets/sociais/twitter-x.png';
import Whatsapp from '../../assets/sociais/whatsapp.png';

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Judson', serif;
  background-color: ${({ $corfundo }) => $corfundo || 'rgba(0, 0, 0, 0.09)'};
`;

const FooterContainer = styled.div`
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

const FooterSection = styled.div`
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

const SocialIcons = styled.div`
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

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  border-top: 1px solid rgba(68, 68, 68, 0.5);
  padding: 15px 0 10px;
  color: ${({ $corTexto }) => $corTexto || '#000'};
`;

const Footer = ({ $corTexto, $corFundo }) => {
  return (
    <StyledFooter $corFundo={$corFundo}>
      <FooterContainer>
        <FooterSection $display="none" $corTexto={$corTexto}>
          <h2>Barbearia Kenybarber</h2>
          <p>Os melhores cortes, produtos de qualidade e atendimento diferenciado. Venha nos visitar!</p>
        </FooterSection>

        <FooterSection $corTexto={$corTexto}>
          <h3>Contato</h3>
          <p>📍 Entre em contato com a barbearia mais perto de você!</p>
          <p>📞 (41) 99999-9999</p>
          <p>✉️ contato@barbeariakenybarber.com</p>
        </FooterSection>

        <FooterSection $corTexto={$corTexto}>
          <h3>Siga-nos</h3>
          <SocialIcons $corTexto={$corTexto}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={Twitter} alt="X" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={Whatsapp} alt="WhatsApp" />
            </a>
          </SocialIcons>
        </FooterSection>
      </FooterContainer>

      <FooterBottom>
        &copy; 2025 Barbearia Kenybarber. Todos os direitos reservados.
      </FooterBottom>
    </StyledFooter>
  );
};

export default Footer;
