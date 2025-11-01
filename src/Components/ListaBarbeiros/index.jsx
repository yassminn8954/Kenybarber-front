import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardBody,
  CardEndereco,
  CardImg,
  CardTelefone,
  CardTitle,
  ContainerCards
} from "../Cards";
import barbeiros from "./barbeiros.json";
import DisplayCalendario from "../DisplayCalendario";

// 🔹 Novo fundo só para esta tela
const FundoLista = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  padding: 60px 40px;
  box-sizing: border-box;

  /* Responsivo: em telas menores, coluna em vez de linha */
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    gap: 30px;
  }
`;

const Barbeiros = styled.div`
  width: 28%;
  padding: 20px;
  background-color: #97781c;
  border-radius: 25px;

  @media (max-width: 1024px) {
    width: 80%; /* ocupa mais espaço na tela menor */
  }
`;

const CalendarioContainer = styled(motion.div)`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 1024px) {
    width: 90%; /* ocupa quase toda a largura em tela pequena */
  }
`;

const ListaBarbeiros = () => {
  const [PickBarbeiro, setPickBarbeiro] = useState(null);

  const handleClick = (barbeiro) => {
    setPickBarbeiro(barbeiro);
  };

  return (
    <FundoLista>
      <Barbeiros>
        <ContainerCards $gap="30px">
          {barbeiros.map((barbeiro, index) => (
            <Card
              key={index}
              $flexdirection="row"
              $backgroundcolor="#000"
              $width="100%"
              onClick={() => handleClick(barbeiro)}
              style={{ cursor: "pointer" }}
            >
              <CardImg
                $width="30%"
                src={
                  new URL(
                    `../../assets/barbeiros/${barbeiro.imagem}`,
                    import.meta.url
                  ).href
                }
                alt={barbeiro.nome}
              />
              <CardBody>
                <CardTitle $color="#fff">{barbeiro.nome}</CardTitle>
                 <CardEndereco $color="#fff">
                  <img
                    src={new URL(`../../assets/sociais/${barbeiro.redeimagem}`, import.meta.url).href}
                    width={20}
                    height={20}
                    style={{ marginRight: "5px", verticalAlign: "middle" }}
                  />
                  {/* Nome de usuário da rede social */}
                  {barbeiro.rede} <br />
                  {/* Endereço do barbeiro */}
                  {barbeiro.endereco}
                </CardEndereco>
                <CardTelefone
                  $color="#fff"
                  href={`tel:${barbeiro.telefone}`}
                >
                  {barbeiro.telefone}
                </CardTelefone>
              </CardBody>
            </Card>
          ))}
        </ContainerCards>
      </Barbeiros>

      <AnimatePresence mode="wait">
        {PickBarbeiro && (
          <CalendarioContainer
            key={PickBarbeiro.nome}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <DisplayCalendario barbeiro={PickBarbeiro} />
          </CalendarioContainer>
        )}
      </AnimatePresence>
    </FundoLista>
  );
};

export default ListaBarbeiros;
