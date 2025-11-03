import styled from "styled-components";

// Container geral dos cards
export const ContainerCards = styled.div`
  width: 100vw;
  flex-direction: column;
  gap: ${({ $gap }) => $gap || "16px"};
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({$gap})=> $gap || "55px"};
  padding: 20px;
  margin-bottom: 50px;

  @media(max-width: 1024px){
    gap: 30px;
    padding: 30px;
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
  background-color: ${({ $backgroundcolor }) => $backgroundcolor || "#c7c4c4"};
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: ${({ $width }) => $width || "100%"};
  max-width: ${({ $maxwidth }) => $maxwidth || "100%"};
  display: flex;
  flex-direction: ${({ $flexdirection }) => $flexdirection || "column"};
  transition: transform 0.3s;
  box-sizing: border-box;
  flex-shrink: 0; //impede o flex de encolher o card 
  flex-grow: 0;   //impede o flex de expandir o card 
  flex-basis: ${({ $width }) => $width || "auto"}; // Usa o width como base 
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
    border-radius: 16px;
  }
`;

// Imagem do card
export const CardImg = styled.img`
  width: ${({$width})=> $width|| "100%"};
  height: 210px;
  object-fit: cover;

  @media (max-width:1920px){
    height: 220px;
  }

  @media (max-width:1024px){
    height: 250px;
  }

   @media (max-width:768px){
    height: 220px;
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
  font-size: 34px;
  font-weight: 400;
  color: ${({$color})=> $color || "#4E3118"};


  @media (max-width:768px){
    font-size: 24px;
  }

  &:hover{
    color: #976132;
  }
`;

// Endereço
export const CardEndereco = styled.p`
  font-size: 22px;
  color: ${({$color})=> $color || "#4E3118"};
  line-height: 1.4;
  font-weight: 400;

  @media (max-width:768px){
    font-size: 16px;
  }
`;

// Telefone
export const CardTelefone = styled.a`
  font-size: 18px;
  font-weight: 400;
  color: ${({$color})=> $color || "#4E3118"};     
  text-decoration: none; 

   @media (max-width:768px){
    font-size: 16px;
  }
  
  &:hover {
    text-decoration: underline; 
    color: ${({$color})=> $color || "#4E3118"};
    cursor: pointer;
  }

  &:visited {
    color: #4E3118;
  }
`;



