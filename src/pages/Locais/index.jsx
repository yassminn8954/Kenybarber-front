import styled from "styled-components";
import LocaisHeader from "../../Components/LocaisHeader";
import Cards from "../../Components/Cards";

const Fundo = styled.div`
  background-color: #000; 
  min-height: 100vh;
  justify-content: center;
  min-width: 100vw;
`;

const Locais=()=> {
    return (
       <Fundo>
        <LocaisHeader />
       <Cards />
       </Fundo>
    )
}

export default Locais;
