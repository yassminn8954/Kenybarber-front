import styled from "styled-components";
import Barbeirocoptero from "../Barbeirocoptero";


const HeaderDeLocais = styled.header`
  font-size: 32px;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  height: 110px;
  width: 100%; 
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;

  @media(max-width:480px){
    font-size:28px;
    text-align: center;
      height: 80px;
      gap: 10px;
  }
`;


const LocaisHeader=()=> {
    return (
        <>
        
        <HeaderDeLocais><Barbeirocoptero/>Conheça nossas unidades parceiras!<Barbeirocoptero/></HeaderDeLocais>   
        
    </>)
}

export default LocaisHeader;
