import React from 'react';
import styled from 'styled-components';
import Instagram from '../../assets/sociais/instagram-icon.png'
import Twitter from '../../assets/sociais/twitter-x.png'
import Whatsapp from '../../assets/sociais/whatsapp.png'

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; 
  font-family: 'Judson', serif;
  background-color:rgba(0, 0, 0, 0.09);
  padding: 30px 40px ;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin-top: 0px;
  font-family: 'Judson', serif;
  padding: 0 15px; 
  gap: 80px 60px;

`;

const FooterSection = styled.div`
  flex: 1 1 250px; 
  margin-bottom: 30px; 

  h2, h3 {
    color: #000; 
    font-size: 26px;
    margin-bottom: 15px; 
  }

  p {
    margin: 8px 0;
    font-size: 17px;
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
  border-top: 1px solid rgba(68, 68, 68, 0.5); /* Torna a linha mais suave */
  padding: 15px 0 10px; 
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>

        <FooterSection>
          <h2>Barbearia Kenybarber</h2>
          <p>Os melhores cortes, produtos de qualidade e atendimento diferenciado. Venha nos visitar!</p>
        </FooterSection>

        <FooterSection>
          <h3>Contato</h3>
          <p>📍 Entre em contato com a barbearia mais perto de você!</p>
          <p>📞 (41) 99999-9999</p>
          <p>✉️ contato@barbeariakenybarber.com</p>
        </FooterSection>

        <FooterSection>
          <h3>Siga-nos</h3>
          <SocialIcons>
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