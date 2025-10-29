import styled from "styled-components";
import Barbeirocoptero from "../Barbeirocoptero/Barbeirocoptero";


const HeaderDeLocais = styled.header`
  font-size: 38px;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  height: 120px;

  width: 100%; 
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;

  @media(max-width:480px){
    font-size:28px;
    text-align: center;
  }
`;


const LocaisHeader=()=> {
    return (
        <>
        
        <HeaderDeLocais><Barbeirocoptero/>Conheça nossas unidades parceiras!<Barbeirocoptero/></HeaderDeLocais>   
        
    </>)
}

export default LocaisHeader;
