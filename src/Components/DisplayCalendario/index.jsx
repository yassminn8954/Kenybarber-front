import React, { useState, useEffect } from "react";
import { Fundo } from "../../pages/Cadastro";
import LadoCalendario from "./LadoCalendario";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { CalendarWrapper, TituloArea, CalendarBox } from "./DisplayCAlendario.js";

const DisplayCalendario = ({ barbeiro, tipoUsuario = "cliente" }) => {
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
            height="100%" 
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
