import styled from "styled-components"
import Botao from "../Botao";

const GapFormulario = styled.form`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  display: flex;
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  .input-container {
    position: relative;
    width: 500px; 
  }

  .input {
    padding: 10px;
    height: 40px;
    width: 500px;
    border-top: none;
    font-size: 16px;
    background: transparent;
    outline: none;
    box-shadow: 1px 4px 0px 3px #aa8b43;
    transition: all 0.5s;
    color: #fff;
   
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

  .input-container .top-line {
    position: absolute;
    content: "";
    background-color: #8f805d;
    width: 100%;
    height: 2px;
    right: 0;
    top: 0;
    transition: all 0.5s;
  }

  .input-container input:focus~.top-line {
    width: 35%;
    transition: all 0.5s;
  }

  .input-container .under-line {
    position: absolute;
    content: "";
    background-color: #8f805d;
    width: 0%;
    height: 2px;
    right: 0;
    bottom: 0;
    transition: all 0.5s;
  }

  .input-container input:focus~.under-line {
    width: 100%;
    transition: all 0.5s;
  }

  .input-container input:focus~.label {
    top: -10px;
    transform: scale(1);
    transition: all 0.5s;
  }
    .gap{
    gap: 30px;
    }
`;

const CampoTexto = () => {
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
      const res = await fetch('http://localhost:3000/usuarios/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const body = await res.json();

      if (res.status === 201) {
        // sucesso
        console.log('Cadastrado:', body.usuario);
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
          <input required type="password" name="senha" className="input" placeholder="Digite sua senha" autoComplete="off" />
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
        <Botao/>
      </GapFormulario>
    </StyledWrapper>
  );
};

export default CampoTexto