import styled from "styled-components";
import {Legenda, Side} from "./LadoCalendario.js"

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
