import React, { useState, useEffect } from "react";
import { Fundo } from "../../pages/Cadastro";
import LadoCalendario from "./LadoCalendario";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { CalendarWrapper } from "./DisplayCAlendario.js";
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
`;

const DisplayCalendario = ({ barbeiro, tipoUsuario = "barbeiro" }) => {
  const [disponibilidade, setDisponibilidade] = useState({});
  const [calendarApi, setCalendarApi] = useState(null);

  const cores = ["verde", "amarelo", "vermelho", null];
  const coresHex = {
    verde: "#4CAF50",
    amarelo: "#FFEB3B",
    vermelho: "#F44336",
  };

  // ✅ alterna a cor ao clicar
  const handleDateClick = (info) => {
    if (tipoUsuario !== "barbeiro") return; // cliente não pode alterar

    const atual = disponibilidade[info.dateStr];
    const proximaCor =
      cores[(cores.indexOf(atual) + 1) % cores.length]; // alterna no ciclo

    setDisponibilidade((prev) => ({
      ...prev,
      [info.dateStr]: proximaCor,
    }));
  };

  // ✅ Pinta toda a célula (td)
  const renderDia = (info) => {
    const estado = disponibilidade[info.dateStr];
    const cor = coresHex[estado] || "";

    const cell = info.el.closest(".fc-daygrid-day");
    if (cell) {
      cell.style.backgroundColor = cor;
      cell.style.transition = "background-color 0.3s ease";
      cell.style.borderRadius = "6px";
      cell.style.color = estado ? "#000" : "";
    }
  };

  // ✅ Reaplica as cores toda vez que o estado mudar
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
        <div className="calendar">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            locale="pt-br"
            height="auto"
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
              right: "dayGridMonth,dayGridWeek,dayGridDay",
            }}
          />
        </div>

        <LadoCalendario tipoUsuario={tipoUsuario} />

      </CalendarWrapper>
    </Fundo>
  );
};

export default DisplayCalendario;
