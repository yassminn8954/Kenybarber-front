import styled from "styled-components";

export const GapFormulario = styled.form`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  display: flex;
  width: 100%;

  @media(max-width: 7680px){
    gap: 26px;
    
  }
   @media(max-width: 480px){
    gap: 22px;
  }
`

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 90%; // garante que o wrapper ocupe todo o espaço disponível 
  justify-content: center;
  align-items: center;


  .input-container {
    position: relative;
    width: 90%;
  }

  .input {
    padding: 10px 0 10px 5px;
    height: 40px;
    width: 100%; // ocupa toda a largura do input-container 
    border-top: none;
    background: transparent;
    outline: none;
    box-shadow: 1px 3px 1px 2px #aa8b43;
    transition: all 0.5s;
    color: #fff;
    border-radius: 4px;

    @media (max-width: 1024px) {
      box-shadow: 1px 3px 0px 2px #aa8b43;
    }

     @media (max-width: 768px) {
      box-shadow: 0px 2px 1px 1px #aa8b43;
    }

    @media (max-width: 480px) {
      box-shadow: 0px 2px 1px 1px #aa8b43;
    }
  }

  .input:focus {
    box-shadow: none;
    transition: all 0.5s;
  }

  .input::placeholder {
    color: #e0dab4a4;
    font-size: 18px;
    opacity: 1;

    @media (max-width: 480px) {
      font-size: 16px;
    }
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

export const Paragrafo=styled.p`
margin-bottom: 20px;
color:#fff;`

export const Link=styled.a`
color:#f8c256;`

