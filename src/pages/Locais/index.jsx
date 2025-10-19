import styled from "styled-components";
import LocaisHeader from "../../Components/LocaisHeader";
import Cards from "../../Components/Cards";
import '../Inicial/Inicial.css';
import Footer from "../../Components/Footer";

const Fundo = styled.div`
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
       <Footer  corFundo="#979595" corTexto="#FFD700"/>
    </>
    );
}

export default Locais;
