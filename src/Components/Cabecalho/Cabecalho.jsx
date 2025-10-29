import styled from "styled-components";
import Barbeirocoptero from "../Barbeirocoptero/Barbeirocoptero";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Imagem from "../Imagem";
import Logo from '../../assets/imagem/logo.png';

const Container = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: white;
  background: transparent;
  gap: 1rem;
  box-sizing: border-box;
  position: relative;
  height: 10vh;

  .logo {
    display: flex;
    align-items: center;
    flex: 0 0 auto;
  }

  .center-logo {
    display: none;
  }

  nav {
    flex: 1;
    display: flex;
    justify-content: center;
    gap: 10vh;
    align-items: center;
  }

  nav a {
    font-size: 26px;
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
    cursor: pointer;
    white-space: nowrap;
  }

  nav a:hover {
    color: #ffcc00;
  }

  .menu-btn {
    display: none;
    background: transparent;
    border: none;
    color: white;
    font-size: 28px;
    cursor: pointer;
  }

  // Responsividade 
  @media (max-width: 1024px) {
    nav a {
      font-size: 20px;
      gap: 2vh;
    }
  }

  @media (max-width: 768px) {
    padding: 10vw 10vw 5vw 10vw ;
    gap: 0.5rem;

    .menu-btn {
      display: block;
      flex: 0 0 auto;
      z-index: 25;
    }

    /* ocultar ícones laterais e mostrar logo central */
    .logo,
    .right-logo {
      display: none;
    }

.center-logo {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center; /* centraliza horizontal */
  align-items: center;     /* centraliza vertical */
  z-index: 20;
  pointer-events: none;
}

    nav {
      /* menu hamburguer */
      position: absolute;
      top: calc(100% + 0.5rem);
      left: 0;
      right: 0;
      margin: 0 0.5rem;
      background: rgba(0, 0, 0, 0.95);
      border-radius: 8px;
      padding: 0.75rem;
      flex-direction: column;
      gap: 0.5rem;
      align-items: stretch;
      display: ${props => (props.$menuOpen ? "flex" : "none")};
      z-index: 15;
    }

    nav a {
      font-size: 18px;
      padding: 0.5rem 0.75rem;
    }
  }
`;


const Cabecalho = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Fecha o menu ao redimensionar a tela para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  const handleNavigate = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <Container $menuOpen={menuOpen}>
      <div className="logo">
        <Barbeirocoptero />
      </div>

     <div className="center-logo" aria-hidden={menuOpen ? "false" : "true"}>
  <Imagem src={Logo} $width="105px" alt="Logo central" />
</div>


      <button
        className="menu-btn"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        onClick={() => setMenuOpen((s) => !s)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#profissionais" onClick={() => setMenuOpen(false)}>Profissionais</a>
          <a href="#calendario" onClick={() => setMenuOpen(false)}>Calendário</a>
          <a onClick={() => handleNavigate("/locais")}>
            Locais
          </a>
          <a onClick={() => handleNavigate("/cadastro")}>
            Usuário
          </a>
      </nav>

      <div className="right-logo">
        <Barbeirocoptero />
      </div>
    </Container>
  );
};

export default Cabecalho;
