import styled from "styled-components";
import LocaisHeader from "../../Components/LocaisHeader";
import Cards from "../../Components/Cards";
import '../Inicial/Inicial.css';
import Footer from "../../Components/Footer";

export const Fundo = styled.div`
  background-color: #000; 
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column; 
  align-items: center;   
  justify-content: flex-start; 
  padding: 20px 0;    
`;

const Locais = () => {
    return (
      <>
       <Fundo>
          <LocaisHeader />
          <Cards />
       </Fundo>
       <Footer  corFundo="#a3a1a1" corTexto="#4E3118"/>
    </>
    );
}

export default Locais;
