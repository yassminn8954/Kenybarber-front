import styled from "styled-components"

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
`;

const CampoTexto = () => {
  return (
    <StyledWrapper>
      <div className="input-container">
        <input required type="text" name="nome" className="input" placeholder="Digite seu nome" />
        <div className="top-line" />
        <div className="under-line" />
      </div>

      <div className="input-container">
        <input required type="password" name="senha" className="input" placeholder="Digite sua senha" />
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
    </StyledWrapper>
  );
};

export default CampoTexto