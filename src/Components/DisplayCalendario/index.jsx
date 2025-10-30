import React, { useState } from "react";
import { Fundo } from "../../pages/Cadastro";
import LadoCalendario from "./LadoCalendario";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { CalendarWrapper } from "./DisplayCAlendario.js"

const DisplayCalendario=()=> {
  const [eventos, setEventos] = useState([
    { title: "Reunião inicial", date: "2025-10-30" },
  ]);

  // função chamada quando o usuário clica em uma data
  const handleDateClick = (info) => {
    const titulo = prompt("Digite o nome do evento:");
    if (titulo) {
      const novoEvento = { title: titulo, date: info.dateStr };
      setEventos([...eventos, novoEvento]);
    }
  };

  return (
  <Fundo>
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
            height: "90vh",
            right: "dayGridMonth,dayGridWeek,dayGridDay",
          }}
        />
      </div>

      
     <LadoCalendario />
    </CalendarWrapper>
    </Fundo>
  );
}

export default DisplayCalendario
