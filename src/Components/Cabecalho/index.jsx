import { Container, } from "./Cabecalho.js"
import Barbeirocoptero from "../Barbeirocoptero";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Imagem from "../Imagem";
import Logo from '../../assets/imagem/logo.png';



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
        <Barbeirocoptero $display={menuOpen ? "none" : "block"} />
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#profissionais" onClick={() => setMenuOpen(false)}>Profissionais</a>
          <a onClick={() => handleNavigate("/calendario")}>Calendário</a>
          <a onClick={() => handleNavigate("/locais")}>Locais</a>
          <a onClick={() => handleNavigate("/cadastro")}>Usuário</a>
        <Barbeirocoptero $display={menuOpen ? "none" : "block"} />
      </nav>
    </Container>
  );
};

export default Cabecalho;
