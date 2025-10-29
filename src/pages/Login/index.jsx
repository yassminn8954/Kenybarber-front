import { useState } from "react";
import axios from "axios";
import { Fundo } from "../Locais";
import { StyledWrapper } from "../../Components/CampoTexto";
import Imagem from "../../Components/Imagem";
import { Formulario } from "../Cadastro"; // idealmente styled.form
import Botao from "../../Components/Botao";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    console.log("handleLogin chamado", { email, senha });

    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email,
        senha,
      });

      alert("Login realizado com sucesso!");
      console.log("Resposta:", response.data);
      window.location.href = "/";
    } catch (error) {
      console.error("Erro no login:", error);
      alert(error.response?.data?.erro || "Erro ao realizar login");
    }
  };

  return (
    <Fundo>
      {/* Se Formulario for um div, troque para <form> real aqui */}
      <Formulario $height="35vw">
        {/* Garante um <form> real por dentro */}
        <form onSubmit={handleLogin} style={{ display: "contents" }}>
          <Imagem />
          <StyledWrapper>
            <div className="input-container">
              <input
                required
                type="email"
                name="email"
                className="input"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="top-line" />
              <div className="under-line" />
            </div>

            <div className="input-container">
              <input
                required
                type="password"
                name="senha"
                className="input"
                placeholder="Digite sua senha"
                autoComplete="off"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <div className="top-line" />
              <div className="under-line" />
            </div>
          </StyledWrapper>

          <Botao texto="Entrar" tipo="submit" />
        </form>
      </Formulario>
    </Fundo>
  );
};

export default Login;
