import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Fundo } from "../../pages/Cadastro";
import { 
  Card, CardBody, CardEndereco, CardImg, 
  CardTelefone, CardTitle, ContainerCards 
} from "../Cards";
import barbeiros from "./barbeiros.json";
import DisplayCalendario from "../DisplayCalendario"; // ajuste o caminho conforme seu projeto

const Barbeiros = styled.div`
  width: 28%;
  height: auto;
  padding: 20px;
  background-color: #97781C;
  border-radius: 25px;
  margin-top: 300px;
  margin-right: 0;
`;

const CalendarioContainer = styled(motion.div)`
  width: 70%;
  margin-left: 0;
`;

const ListaBarbeiros = () => {
  const [PickBarbeiro, setPickBarbeiro] = useState(null);

  const handleClick = (barbeiro) => {
    setPickBarbeiro(barbeiro);
  };

  return (
    <Fundo style={{ display: "flex" }}>
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
                src={new URL(`../../assets/barbeiros/${barbeiro.imagem}`, import.meta.url).href}
                alt={barbeiro.nome}
              />
              <CardBody>
                <CardTitle $color="#fff">{barbeiro.nome}</CardTitle>
                <CardEndereco $color="#fff">
                  {barbeiro.nome} <br />
                  {barbeiro.endereco}
                </CardEndereco>
                <CardTelefone $color="#fff" href={`tel:${barbeiro.telefone}`}>
                  {barbeiro.telefone}
                </CardTelefone>
              </CardBody>
            </Card>
          ))}
        </ContainerCards>
      </Barbeiros>

      <AnimatePresence>
        {PickBarbeiro && (
          <CalendarioContainer
            key={PickBarbeiro.nome}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
          >
            <DisplayCalendario barbeiro={PickBarbeiro} />
          </CalendarioContainer>
        )}
      </AnimatePresence>
    </Fundo>
  );
};

export default ListaBarbeiros;
