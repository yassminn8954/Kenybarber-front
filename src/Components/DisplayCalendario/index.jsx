import React, { useState } from "react";
import { Fundo } from "../../pages/Cadastro";
import LadoCalendario from "./LadoCalendario";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { CalendarWrapper } from "./DisplayCAlendario.js";
import styled from "styled-components";

// 🔹 Novo título estilizado
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

const DisplayCalendario = ({ barbeiro }) => {
  const [eventos, setEventos] = useState([
    { title: "Reunião inicial", date: "2025-10-30" },
  ]);

  const handleDateClick = (info) => {
    const titulo = prompt("Digite o nome do evento:");
    if (titulo) {
      const novoEvento = { title: titulo, date: info.dateStr };
      setEventos([...eventos, novoEvento]);
    }
  };

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
            events={eventos}
            dateClick={handleDateClick}
            locale="pt-br"
            selectable={true}
            editable={true}
            height="auto"
            headerToolbar={{
              left: "prev,next",
              center: "title",
              right: "dayGridMonth,dayGridWeek,dayGridDay",
            }}
          />
        </div>

        <LadoCalendario />
      </CalendarWrapper>
    </Fundo>
  );
};

export default DisplayCalendario;
