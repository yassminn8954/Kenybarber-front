import styled from "styled-components";

export const TituloArea = styled.div`
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
      font-size: 2rem;
    }
    p {
      font-size: 1.3rem;
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

export const CalendarBox = styled.div`
  width: 100%;
  height: 500px;
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


  .fc {
    width: 100%;
    flex: 1;
    min-height: 400px;
  }

  .fc .fc-toolbar-title {
    font-size: 1.1rem;
    margin: 0px;
}


  @media (max-width: 768px) {
    max-width: 95%;
    height: auto;
    padding: 12px;
    border-radius: 12px;

    .fc {
      min-height: 360px;
    }
  }


 @media (max-width: 480px) {
  width: 100%;
  max-width: 95%; 
  margin: 0 auto; 
  height: auto;
  padding: 10px;
  border-radius: 10px;

  .fc {
    min-height: 430px;
  }

  .fc .fc-toolbar-title {
    font-size: 1rem;
  }
}

`;

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 25px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 24px;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center; 
  }

  @media (max-width: 480px) {
    padding: 10px;
    border-radius: 15px;
  }

  // ---------- CALENDÁRIO ---------- 
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
  }
`;
