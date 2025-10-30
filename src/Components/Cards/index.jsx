import React from "react";
import locais from "./locais.json";
import { ContainerCards, CardImg, CardBody, CardEndereco, CardTelefone, CardTitle, Card } from "./Cards.js";

export * from "./Cards.js";

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
