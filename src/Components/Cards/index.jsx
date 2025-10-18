import React from "react";
import styled from "styled-components";
import locais from "./locais.json";

// Container geral dos cards
const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

// Card individual
const Card = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  overflow: hidden;
  width: 300px;
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
  font-size: 1.5rem;
  color: #333;
`;

// Endereço
const CardEndereco = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
`;

// Telefone
const CardTelefone = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  color: #444;
`;

// Ícones de redes
const CardIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;

  a {
    color: #333;
    font-size: 1.2rem;
    transition: color 0.3s;

    &:hover {
      color: #25d366; // ex: WhatsApp verde
    }
  }
`;

const Cards = () => {
  return (
    <ContainerCards>
      {locais.map((local, index) => (
        <Card key={index}>
          <CardImg
            src={`/imagens/${local.imagem}`} 
            alt={local.nome}
          />
          <CardBody>
            <CardTitle>{local.nome}</CardTitle>
            <CardEndereco>
              {local.nome} - {local.estado} <br />
              {local.endereco}
            </CardEndereco>
            <CardTelefone>{local.telefone}</CardTelefone>
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
