import styled from "styled-components";


// Container geral dos cards
export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({$gap})=> $gap || "55px"};
  padding: 20px;
  margin-bottom: 50px;

  @media(max-width: 1024px){
    gap: 30px;
    padding: 50px;
  }

   @media(max-width:768px){
    gap: 25px;
    padding: 25px;
  }

  @media(max-width:480px){
    gap: 20px;
    padding: 10px;
  }
`;

// Card individual
export const Card = styled.div`
  background-color: ${({$backgroundcolor}) => $backgroundcolor|| "#c7c4c4"} ;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  overflow: hidden;
  width: ${({$width})=> $width|| "24%" } ;
  display: flex;
  flex-direction: ${({$flexdirection})=>$flexdirection|| "column"};
  transition: transform 0.3s;

  @media(max-width:480px){
    height: 160px;
  }

  &:hover {
    transform: translateY(-5px);
  }

  
`;

// Imagem do card
export const CardImg = styled.img`
  width: ${({$width})=> $width|| "100%"};
  height: 200px;
  object-fit: cover;

  @media (max-width:1024px){
    height: 250px;
  }

`;

// Corpo do card
export const CardBody = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Título
export const CardTitle = styled.h2`
  font-size: 30px;
  color: ${({$color})=> $color || "#4E3118"};

  &:hover{
    color: #976132;
  }
`;

// Endereço
export const CardEndereco = styled.p`
  font-size: 18px;
  color: ${({$color})=> $color || "#4E3118"};
  line-height: 1.4;
  font-weight: 400;
`;

// Telefone
export const CardTelefone = styled.a`
  font-size: 18px;
  font-weight: 400;
  color: ${({$color})=> $color || "#4E3118"};     
  text-decoration: none; 
  
  &:hover {
    text-decoration: underline; 
    color: ${({$color})=> $color || "#4E3118"};
    cursor: pointer;
  }

  &:visited {
    color: #4E3118;
  }
`;

