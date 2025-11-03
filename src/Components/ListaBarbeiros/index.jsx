import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardBody,
  CardEndereco,
  CardImg,
  CardTelefone,
  CardTitle,
  ContainerCards,
} from "../Cards";
import barbeiros from "./barbeiros.json";
import DisplayCalendario from "../DisplayCalendario";

// Hook responsivo — principal: 1024px
const useIsMobile = (breakpoint = 1024) => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};

// Estilos principais
const FundoLista = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  box-sizing: border-box;
  padding: 40px; /* base equilibrada */
  overflow-x: hidden; /* evita bug visual */

  @media (max-width: 1920px) {
    gap: 35px;
    padding: 35px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 35px;
    padding: 25px 15px; //menos padding horizontal 
  }

  @media (max-width: 768px) {
    padding: 20px 12px;
    gap: 20px;
  }

  @media (max-width: 480px) {
    padding: 16px 8px;
    gap: 15px;
  }
`;

const Barbeiros = styled.div`
  width: 30%;
  background-color: #cd9a28;
  border-radius: 25px;
  padding: 16px;               
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: 1024px) {
    width: 65%;
    padding: 14px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 10px;
  }
`;


const CalendarioContainer = styled(motion.div)`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  transition: all 0.3s ease;
  box-sizing: border-box;

  @media (max-width: 1920px) {
    width: 65%;
  }

  @media (max-width: 1024px) {
    width: 100%;
    justify-content: center;
  }
`;

const ListaBarbeiros = () => {
  const [PickBarbeiro, setPickBarbeiro] = useState(null);
  const isMobile = useIsMobile(1024);

  const handleClick = (barbeiro) => {
    setPickBarbeiro((prev) =>
      prev?.nome === barbeiro.nome ? null : barbeiro
    );
  };

  return (
    <FundoLista>
      <Barbeiros>
        <ContainerCards
          $gap="30px"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          {barbeiros.map((barbeiro, index) => (
            <div
              key={index}
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Card
                  $flexdirection="row"
                  $backgroundcolor="#000"
                  $width="100%" /* Ajuste: ocupa o container inteiro */
                  onClick={() => handleClick(barbeiro)}
                  style={{ cursor: "pointer" }}
                >
                <CardImg
                  $width="25%"
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
                      src={new URL(
                        `../../assets/sociais/${barbeiro.redeimagem}`,
                        import.meta.url
                      ).href}
                      width={20}
                      height={20}
                      style={{
                        marginRight: "5px",
                        verticalAlign: "middle",
                      }}
                    />
                    {barbeiro.rede} <br />
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

              {/* 🔹 Calendário aparece logo abaixo do card correspondente no mobile */}
              {isMobile && PickBarbeiro?.nome === barbeiro.nome && (
                <motion.div
                  key={barbeiro.nome + "-calendar"}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    marginTop: "10px",
                    borderRadius: "15px",
                    overflow: "hidden",
                    width: "100%",
                    backgroundColor: "#111",
                    padding: "10px 0",
                  }}
                >
                  <DisplayCalendario barbeiro={barbeiro} />
                </motion.div>
              )}
            </div>
          ))}
        </ContainerCards>
      </Barbeiros>

      {/* 🔹 Fora do card, apenas no desktop */}
      {!isMobile && (
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
      )}
    </FundoLista>
  );
};

export default ListaBarbeiros;
