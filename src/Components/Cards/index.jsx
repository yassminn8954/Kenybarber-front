import React from "react";
import styled from "styled-components";
import locais from "./locais.json";


// Container geral dos cards
export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({$gap})=> $gap || "55px"};
  padding: 40px;
  margin-bottom: 50px;

  @media(max-width:480px){
    flex-direction: column;
    gap: 40px;
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
  
  &:hover {
    transform: translateY(-5px);
  }

  @media(max-width:480px){
    width: 100%;
  }
`;

// Imagem do card
export const CardImg = styled.img`
  width: ${({$width})=> $width|| "100%"};
  height: 200px;
  object-fit: cover;

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
  font-size: 28px;
  color: ${({$color})=> $color || "#4E3118"};

  &:hover{
    color: #976132;
  }
`;

// Endereço
export const CardEndereco = styled.p`
  font-size: 16px;
  color: ${({$color})=> $color || "#4E3118"};
  line-height: 1.4;
`;

// Telefone
export const CardTelefone = styled.a`
  font-size: 16px;
  font-weight: bold;
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


const Cards = () => {
  return (
    <ContainerCards>
      {locais.map((local, index) => (
        <Card key={index}>
          <CardImg
              src={new URL(`../../assets/Cidades/${local.imagem}`, import.meta.url).href}  alt={local.nome}
              />
          <CardBody>
            <CardTitle>{local.nome}</CardTitle>
            <CardEndereco>
              {local.nome} - {local.estado} <br />
              {local.endereco}
            </CardEndereco>
           <CardTelefone href={`tel:${local.telefone}`}>{local.telefone}
</CardTelefone>
          </CardBody>
        </Card>
      ))}
    </ContainerCards>

  );
};

export default Cards;
