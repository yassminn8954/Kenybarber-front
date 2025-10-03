import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Cabecalho from "./Components/Cabecalho/Cabecalho.jsx";
import './reset.css'
import Search from "./Components/Search/Search.jsx";
import styled from "styled-components";
import Carrossel from "./Components/Carrossel/Carrossel.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const ContainerTodo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
  `

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ContainerTodo>
    <Cabecalho />
    <Search />
    <Carrossel />

  <Footer/>
</ContainerTodo>
  </StrictMode>,
)
