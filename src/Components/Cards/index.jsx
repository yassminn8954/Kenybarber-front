import React from "react";
import styled from "styled-components";
import locais from "./locais.json";
import Footer from "../Footer";


// Container geral dos cards
const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  padding: 40px;
  margin-bottom: 50px;
`;

// Card individual
const Card = styled.div`
  background-color: #d3d0d0;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  overflow: hidden;
  width: 420px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

// Imagem do card
const CardImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

// Corpo do card
const CardBody = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Título
const CardTitle = styled.h2`
  font-size: 28px;
  color: #4E3118;
`;

// Endereço
const CardEndereco = styled.p`
  font-size: 16px;
  color: #4E3118;
  line-height: 1.4;
`;

// Telefone
const CardTelefone = styled.a`
  font-size: 16px;
  font-weight: bold;
  color: #4E3118;      
  text-decoration: none; 
  
  &:hover {
    text-decoration: underline; 
    color: #3a2513;
    cursor: pointer;
  }

  &:visited {
    color: #4E3118;
  }
`;


// Ícones de redes sociais
const CardIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;

  a {
    color: #333;
    font-size: 1.2rem;
    transition: color 0.3s;
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
            <CardIcons>
              {local.whatsapp && (
                <a href={local.whatsapp} target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              )}
              {local.instagram && (
                <a href={local.instagram} target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              )}
              {local.maps && (
                <a href={local.maps} target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-location-dot"></i>
                </a>
              )}
            </CardIcons>
          </CardBody>
        </Card>
      ))}
    </ContainerCards>

  );
};

export default Cards;
