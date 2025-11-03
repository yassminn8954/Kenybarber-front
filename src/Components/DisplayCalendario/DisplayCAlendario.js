import styled from "styled-components";

export const CalendarWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 25px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 24px;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

@media (max-width: 480px) {
  padding: 10px;
  border-radius: 15px;
}

  /* ---------- CALENDÁRIO ---------- */
  .calendar {
    flex: 1 1 600px;
    max-width: 800px;
    display: flex;
    justify-content: center;
    align-items: stretch;
    border-radius: 16px;
    padding: 10px;
    box-sizing: border-box;
    overflow: hidden;
    min-height: 370px;
  }

  .calendar .fc {
    width: 100% !important;
    box-sizing: border-box;
  }`