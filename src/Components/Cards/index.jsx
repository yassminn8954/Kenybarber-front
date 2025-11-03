import React from "react";
import locais from "./locais.json";
import styled from "styled-components";
import {
  ContainerCards,
  Card as BaseCard,
  CardImg as BaseCardImg,
  CardBody,
  CardEndereco,
  CardTelefone,
  CardTitle,
} from "./Cards.js";

export * from "./Cards.js";

// 🔹 Container com linha de 3 cards
export const LocaisContainer = styled(ContainerCards)`
  width: 80%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  gap: 30px;

  @media (max-width: 1024px) {
    justify-content: center;
    gap: 20px;
  }
`;

// 🔹 Card com largura de 30%
export const LocaisCard = styled(BaseCard)`
  width: 30%;
  max-width: 30%;
  flex-basis: 30%;

  @media (max-width: 1024px) {
    width: 45%;
    max-width: 45%;
    flex-basis: 45%;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    flex-basis: 100%;
  }
`;

// 🔹 Imagem com altura responsiva
export const LocaisCardImg = styled(BaseCardImg)`
  height: 240px;
  object-fit: cover;

  @media (max-width: 1024px) {
    height: 200px;
  }

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 150px;
  }
`;

const Cards = () => {
  return (
    <LocaisContainer>
      {locais.map((local, index) => (
        <LocaisCard key={index}>
          <LocaisCardImg
            src={
              new URL(`../../assets/Cidades/${local.imagem}`, import.meta.url)
                .href
            }
            alt={local.nome}
          />
          <CardBody>
            <CardTitle>{local.nome}</CardTitle>
            <CardEndereco>
              {local.nome} - {local.estado} <br />
              {local.endereco}
            </CardEndereco>
            <CardTelefone href={`tel:${local.telefone}`}>
              {local.telefone}
            </CardTelefone>
          </CardBody>
        </LocaisCard>
      ))}
    </LocaisContainer>
  );
};

export default Cards;
