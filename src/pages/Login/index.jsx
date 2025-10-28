import styled from "styled-components";
import { Fundo } from "../Locais";
import { StyledWrapper } from "../../Components/CampoTexto";
import Imagem from '../../Components/Imagem'
import { Formulario } from "../Cadastro";
import Botao from "../../Components/Botao";

const Login = () => {
  return (
    <>

      <Fundo>
        <Formulario $height="35vw">
            <Imagem/>
        <StyledWrapper>
            <div className="input-container">
          <input required type="email" name="email" className="input" placeholder="Digite seu e-mail" />
          <div className="top-line" />
          <div className="under-line" />
        </div>

        <div className="input-container">
          <input required type="password" name="senha" className="input" placeholder="Digite sua senha" autoComplete="off" />
          <div className="top-line" />
          <div className="under-line" />
        </div>

        </StyledWrapper>
        <Botao texto="Entrar" destino="/" />
        </Formulario>
      </Fundo>
    </>
  );
};

export default Login;

