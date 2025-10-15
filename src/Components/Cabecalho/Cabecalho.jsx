import styled from "styled-components";
import Barbeirocoptero from "../Barbeirocoptero/Barbeirocoptero";
import { useNavigate } from "react-router-dom";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: white;
  height: 40px;
  margin-top: 50px;

  nav {
    flex: 1;
    display: flex;
    justify-content: center;
    gap: 60px;
  }

  nav a {
    font-size: 26px;
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
  }

  nav a:hover {
    color: #ffcc00;
  }
`;

const Cabecalho = () => {
   const navigate = useNavigate();
  return (
    <Container>
      <Barbeirocoptero />
      <nav>
        <a href="#home">Home</a>
        <a href="#profissionais">Profissionais</a>
        <a href="#calendario">Calendário</a>
        <a href="#locais">Locais</a>
        <a href="#contato">Contato</a>
        <a href="#mais">Mais</a>
        <a onClick={() => navigate("/cadastro")} style={{ cursor: "pointer" }}>
          Usuário
        </a>

      </nav>
      <Barbeirocoptero />
    </Container>
  );
};

export default Cabecalho;
