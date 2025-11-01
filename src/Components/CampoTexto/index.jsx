import Botao from "../Botao";
import { useNavigate } from "react-router-dom";
import { GapFormulario, Link, Paragrafo, StyledWrapper } from "./CampoTexto.js"

export * from "./CampoTexto.js"

const CampoTexto = () =>  {
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
         <Botao $marginbottom="0" texto="Cadastrar" destino="/login"  tipo="submit"/>
          <Paragrafo >Já possui login? <Link href="http://localhost:5173/login"> Clique aqui</Link></Paragrafo>
      </GapFormulario>
    </StyledWrapper>
  );
};

export default CampoTexto