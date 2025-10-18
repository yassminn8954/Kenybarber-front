import styled from "styled-components";
import Barbeirocoptero from "../Barbeirocoptero/Barbeirocoptero";

const Fundo = styled.div`
  background-color: #000; 
  min-height: 100vh;
  display: flex;
  justify-content: center;
  min-width: 100vw;
`;

const HeaderDeLocais = styled.header`
  font-size: 32px;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 90px;

  width: 100%; 
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
`;


const LocaisHeader=()=> {
    return (
        <>
        <Fundo>
        <HeaderDeLocais><Barbeirocoptero/>Conheça nossas unidades<Barbeirocoptero/></HeaderDeLocais>   
        </Fundo>
    </>)
}

export default LocaisHeader;
