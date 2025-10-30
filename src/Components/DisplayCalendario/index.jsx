import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Fundo } from "../../pages/Cadastro";
import LadoCalendario from "./LadoCalendario";
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CalendarWrapper = styled.div`
  gap: 20px;
  padding: 25px;
  background-color: #ffffff;
  border-radius: 24px;
  max-width: 55%;
  margin: 20px auto;
  box-sizing: border-box;
  align-items: flex-start;
  animation: ${fadeIn}2s ease-in ;

  // calendario ocupa o espaço disponível 
  .calendar {
    flex: 1 1 0;
    min-width: 0;
  }

  // estilo interno do FullCalendar 
  .fc {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
  }

  .fc-day-today {
    background: #e8f4ff !important;
  }

  .fc-toolbar-title {
    color: #333;
    font-size: 1.25rem;
  }

  // barra lateral 
  .side {
    width: 260px;
    margin-top: 65px;
    background-color: #aca4a4;
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    padding: 20px 16px 30px 16px;
    flex: 0 0 260px;
  }

  @media (max-width: 1024px) {
    max-width: 95%;
    padding: 18px;
    gap: 16px;

    .side {
      width: 220px;
      flex: 0 0 220px;
      padding: 12px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 14px;
    .side {
    margin: 10px auto;
      width: 90%;
      flex: none;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 14px;
    .side {
    margin: 10px auto;
      width: 90%;
      flex: none;
    }
  }
`;



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
