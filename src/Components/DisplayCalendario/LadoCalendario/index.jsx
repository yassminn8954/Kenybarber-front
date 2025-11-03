import styled from "styled-components";

const Side = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: #d6d1d1;
  border-radius: 12px;
  padding: 16px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  max-width: 420px;
  width: 100%;
  transition: all 0.3s ease;

  h2 {
    font-size: 18px;
    color: #222;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 16px;
    color: #222;
    margin: 15px 0 8px 0;
  }

  p {
    margin: 0 0 10px 0;
    color: #444;
    font-size: 14px;
  }

  a {
    color: #006400;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }

  /* ---------- RESPONSIVIDADE ---------- */
  @media (max-width: 1024px) {
    max-width: 360px;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 16px;
    h2 { font-size: 16px; }
    h3 { font-size: 15px; }
    p { font-size: 13px; }
  }

  @media (max-width: 480px) {
    max-width: 85%;
    padding: 14px;
    text-align: center;

    h2 { font-size: 15px; }
    h3 { font-size: 14px; }
    p { font-size: 12px; }
    a { font-size: 13px; }
  }
`;

const Legenda = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 15px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #333;
    flex-wrap: wrap;
  }

  span {
    width: 20px;
    height: 20px;
    border-radius: 4px;
  }

  @media (max-width: 480px) {
    div {
      justify-content: center;
      font-size: 15px;
    }
  }
`;

const LadoCalendario = ({ tipoUsuario = "cliente" }) => {
  return (
    <Side>
      <h2>Informações</h2>

      {tipoUsuario === "cliente" ? (
        <>
          <p>
            Você, cliente, deve conversar com o barbeiro para que ele agende
            seu horário.
          </p>
          <hr />
          <h3>Converse com o barbeiro para agendar:</h3>
          <a
            href="https://wa.me/5542982379328"
            target="_blank"
            rel="noreferrer"
          >
            📞 (42) 98237-9328
          </a>

          <Legenda>
            <h3>Significado das cores:</h3>
            <div>
              <span style={{ backgroundColor: "#4CAF50" }}></span> Verde – Horários disponíveis
            </div>
            <div>
              <span style={{ backgroundColor: "#FFEB3B" }}></span> Amarelo – Parcialmente disponível
            </div>
            <div>
              <span style={{ backgroundColor: "#F44336" }}></span> Vermelho – Indisponível
            </div>
          </Legenda>
        </>
      ) : (
        <>
          <p>Como barbeiro, você pode clicar nos dias para definir a disponibilidade:</p>

          <Legenda>
            <h3>Como definir as cores:</h3>
            <div>
              🖱️ <strong>1º clique:</strong>{" "}
              <span style={{ backgroundColor: "#4CAF50" }}></span> Verde – Disponível
            </div>
            <div>
              🖱️ <strong>2º clique:</strong>{" "}
              <span style={{ backgroundColor: "#FFEB3B" }}></span> Amarelo – Parcial
            </div>
            <div>
              🖱️ <strong>3º clique:</strong>{" "}
              <span style={{ backgroundColor: "#F44336" }}></span> Vermelho – Indisponível
            </div>
            <div>
              🖱️ <strong>4º clique:</strong> 🔄 Remove a cor (volta ao padrão)
            </div>
          </Legenda>
        </>
      )}
    </Side>
  );
};

export default LadoCalendario;
