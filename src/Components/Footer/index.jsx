import Instagram from '../../assets/sociais/instagram-icon.png';
import Twitter from '../../assets/sociais/twitter-x.png';
import Whatsapp from '../../assets/sociais/whatsapp.png';
import { FooterBottom,FooterContainer, FooterSection, SocialIcons, StyledFooter } from "./Footer.js"

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
