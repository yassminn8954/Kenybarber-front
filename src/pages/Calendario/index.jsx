// ...existing code...
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import styled from "styled-components";
import { Fundo } from "../Cadastro";

const CalendarWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 25px;
  background-color: #ffffff;
  border-radius: 24px;
  max-width: 55%;
  margin: 20px auto;
  box-sizing: border-box;
  align-items: flex-start;

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

const LadoCalendario = styled.aside`
    flex-direction: column;

  h2{
    font-size: 18px;
    color: #222;
    margin: 10px 0 10px 0;
  }

  h3 {
    font-size: 16px;
    color: #222;
    margin: 10px 0 10px 0;
    line-height:18px ;
  }

  p {
    margin: 0;
    color: #444;
    font-size: 14px;
  }
`;

const Ajuda=styled.div`
    margin-top: 20px;
    width: 260px;
    background-color: #000;
`

export default function Calendario() {
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

  return (<Fundo>
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

      <LadoCalendario className="side" aria-label="Informações do calendário">
        <h2>Informações</h2>
        <p>Você cliente deve conversar com o barbeiro, assim ele agendará seu horário</p>
        <hr />
        <h3>
            Converse com o barbeiro para agendar um horário no dia {eventos.day}:
        </h3>            
        <a href="https://www.whatsapp.com\">(42) 98237-9328</a>

        <p></p>
      
      </LadoCalendario>
     
    </CalendarWrapper>
    </Fundo>
  );
}
