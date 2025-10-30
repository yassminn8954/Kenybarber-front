import styled from "styled-components"

  

const Side = styled.aside`
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

const LadoCalendario =()=>{
    return(
        <Side className="side" aria-label="Informações do calendário">
        <h2>Informações</h2>
        <p>Você cliente deve conversar com o barbeiro, assim ele agendará seu horário</p>
        <hr />
        <h3>
            Converse com o barbeiro para agendar um horário no dia:
        </h3>            
        <a href="https://www.whatsapp.com\">(42) 98237-9328</a>

        <p></p>
      
      </Side>
    )
}

export default LadoCalendario