import { Container } from "./Cabecalho.js"
import Barbeirocoptero from "../Barbeirocoptero";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Imagem from "../Imagem";
import Logo from '../../assets/imagem/logo.png';

const Cabecalho = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  // estado que controla o link ativo; inicia em "home"
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  const handleNavigate = (path, name) => {
    setMenuOpen(false);
    if (name) setActiveLink(name);
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
        <a
          className={activeLink === "home" ? "active" : ""}
          onClick={() => { setActiveLink("home"); /* se quiser navegar coloque handleNavigate("/", "home") */ }}
        >
          Home
        </a>
        <a
          className={activeLink === "profissionais" ? "active" : ""}
          href="#profissionais"
          onClick={() => { setMenuOpen(false); setActiveLink("profissionais"); }}
        >
          Profissionais
        </a>
        <a
          className={activeLink === "calendario" ? "active" : ""}
          onClick={() => handleNavigate("/calendario", "calendario")}
        >
          Calendário
        </a>
        <a
          className={activeLink === "locais" ? "active" : ""}
          onClick={() => handleNavigate("/locais", "locais")}
        >
          Locais
        </a>
        <a
          className={activeLink === "cadastro" ? "active" : ""}
          onClick={() => handleNavigate("/cadastro", "cadastro")}
        >
          Usuário
        </a>
        <Barbeirocoptero $display={menuOpen ? "none" : "block"} />
      </nav>
    </Container>
  );
};

export default Cabecalho;