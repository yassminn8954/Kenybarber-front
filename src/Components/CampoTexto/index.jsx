/* eslint-disable no-undef */
import styled from "styled-components"
import Botao from "../Botao";
import { useNavigate } from "react-router-dom";



const GapFormulario = styled.form`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  display: flex;
`



export const StyledWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 80%; /* garante que o wrapper ocupe todo o espaço disponível */
  justify-content: center;
  align-items: center;
  

  .input-container {
    position: relative;
    width: 100%; /* ocupa toda a largura do pai */
  }

  .input {
    padding: 10px;
    height: 45px;
    width: 100%; /* ocupa toda a largura do input-container */
    border-top: none;
    font-size: 16px;
    background: transparent;
    outline: none;
    box-shadow: 1px 4px 0px 3px #aa8b43;
    transition: all 0.5s;
    color: #fff;
    border-radius: 4px;
  }

  .input:focus {
    box-shadow: none;
    transition: all 0.5s;
  }

  .input::placeholder {
    color: #e0dab4a4;
    font-size: 18px;
    opacity: 1;
  }

  /* Linhas animadas */
  .input-container .top-line,
  .input-container .under-line {
    position: absolute;
    content: "";
    background-color: #8f805d;
    height: 2px;
    transition: all 0.5s;
  }

  .input-container .top-line {
    width: 100%;
    right: 0;
    top: 0;
  }

  .input-container .under-line {
    width: 0%;
    right: 0;
    bottom: 0;
  }

  .input-container input:focus ~ .top-line {
    width: 35%;
  }

  .input-container input:focus ~ .under-line {
    width: 100%;
  }

  /* Responsividade opcional */
  @media (max-width: 768px) {
    gap: 25px;
    .input {
      height: 40px;
      font-size: 15px;
    }
  }

  @media (max-width: 480px) {
    gap: 20px;
    .input {
      height: 38px;
      font-size: 14px;
    }
  }
`;

const Paragrafo=styled.p`
color:#fff;`
const Link=styled.a`
color:#f8c256;`

const CampoTexto = () => {
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = {
      nome_usuario: form.nome.value,
      email: form.email.value,
      senha: form.senha.value,
      telefone: form.telefone.value,
    };

    try {
      const res = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        credentials: 'include',
      });

      const body = await res.json();

      if (res.status === 201) {
        // sucesso
        alert('Usuario cadastrado com sucesso, volte a pagina de login');
        navigate('/login');
        // redirecionar ou mostrar mensagem
      } else if (res.status === 400) {
        // validação/email duplicado
        alert(body.message || 'Erro de validação');
      } else {
        // outros erros
        alert('Erro no servidor');
      }
    } catch (err) {
      console.error('Erro na requisição:', err);
      alert('Não foi possível conectar ao servidor');
    }
  }
  return (
    <StyledWrapper>
      <GapFormulario onSubmit={handleSubmit} autoComplete="off">
        <div className="input-container">
          <input required type="text" name="nome" className="input" placeholder="Digite seu nome" autoComplete="off" />
          <div className="top-line" />
          <div className="under-line" />
        </div>

        <div className="input-container">
          <input required type="tel" name="telefone" className="input" placeholder="Digite seu telefone" />
          <div className="top-line" />
          <div className="under-line" />
        </div>

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
         <Botao texto="Cadastrar" destino="/login" />
          <Paragrafo >Já possui login? <Link href="http://localhost:5173/login"> clique aqui</Link></Paragrafo>
      </GapFormulario>
    </StyledWrapper>
  );
};

export default CampoTexto