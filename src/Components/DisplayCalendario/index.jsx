import React, { useState, useEffect } from "react";
import { Fundo } from "../../pages/Cadastro";
import LadoCalendario from "./LadoCalendario";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { CalendarWrapper } from "./DisplayCalendario.js";
import styled from "styled-components";

const TituloArea = styled.div`
  text-align: center;
  color: #fff;
  margin-bottom: 20px;

  h2 {
    font-size: 1.8rem;
    color: #f5c542;
    margin: 5px 0;
  }

  p {
    font-size: 1rem;
    color: #ccc;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.4rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

const CalendarBox = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 15px;
  box-sizing: border-box;
  transition: all 0.3s ease;

  /* Garante que o conteúdo do FullCalendar ocupe o espaço corretamente */
  .fc {
    width: 100%;
    flex: 1;
    min-height: 400px;
  }

  /* 🔹 Tablets */
  @media (max-width: 768px) {
    max-width: 95%;
    height: auto;
    padding: 12px;
    border-radius: 12px;

    .fc {
      min-height: 360px;
    }
  }

  /* 🔹 Celulares */
 @media (max-width: 480px) {
  width: 100%;
  max-width: 95%; //mantém dentro da tela, mas sem colar nas bordas 
  margin: 0 auto; //garante centralização real 
  height: auto;
  padding: 10px;
  border-radius: 10px;

  .fc {
    min-height: 430px;
  }

  .fc .fc-toolbar-title {
    font-size: 1.3rem;
  }
}

`;

const DisplayCalendario = ({ barbeiro, tipoUsuario = "barbeiro" }) => {
  const [disponibilidade, setDisponibilidade] = useState({});
  const [calendarApi, setCalendarApi] = useState(null);

  const cores = ["verde", "amarelo", "vermelho", null];
  const coresHex = {
    verde: "#4caf50",
    amarelo: "#ffeb3b",
    vermelho: "#f44336",
  };

  const handleDateClick = (info) => {
    if (tipoUsuario !== "barbeiro") return;
    const atual = disponibilidade[info.dateStr];
    const proximaCor = cores[(cores.indexOf(atual) + 1) % cores.length];
    setDisponibilidade((prev) => ({
      ...prev,
      [info.dateStr]: proximaCor,
    }));
  };

  const renderDia = (info) => {
    const estado = disponibilidade[info.dateStr];
    const cor = coresHex[estado] || "";
    const cell = info.el.closest(".fc-daygrid-day");
    if (cell) {
      cell.style.backgroundColor = cor;
      cell.style.transition = "background-color 0.1s ease";
      cell.style.borderRadius = "6px";
      cell.style.color = estado ? "#000" : "";
    }
  };

  useEffect(() => {
    if (!calendarApi) return;
    const cells = document.querySelectorAll(".fc-daygrid-day");
    cells.forEach((cell) => {
      const date = cell.getAttribute("data-date");
      const estado = disponibilidade[date];
      const cor = coresHex[estado] || "";
      cell.style.backgroundColor = cor;
      cell.style.transition = "background-color 0.3s ease";
      cell.style.borderRadius = "6px";
      cell.style.color = estado ? "#000" : "";
    });
  }, [disponibilidade, calendarApi]);

  return (
    <Fundo style={{ flexDirection: "column", padding: "40px 0" }}>
      <TituloArea>
        <p>✂️ Agende um horário com seu barbeiro de confiança</p>
        <h2>Calendário de {barbeiro?.nome || "Barbeiro"}</h2>
      </TituloArea>

      <CalendarWrapper>
        <CalendarBox>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            locale="pt-br"
            height="100%" // força usar 100% da altura da box
            contentHeight="100%"
            expandRows={true}
            dateClick={handleDateClick}
            dayCellDidMount={renderDia}
            selectable={tipoUsuario === "barbeiro"}
            editable={tipoUsuario === "barbeiro"}
            ref={(el) => {
              if (el && !calendarApi) setCalendarApi(el.getApi());
            }}
            headerToolbar={{
              left: "prev,next",
              center: "title",
              right: "dayGridMonth",
            }}
          />
        </CalendarBox>

        <LadoCalendario tipoUsuario={tipoUsuario} />
      </CalendarWrapper>
    </Fundo>
  );
};

export default DisplayCalendario;
