import styled from "styled-components"
import Cabecalho from "../../Components/Cabecalho"
import Carrossel from "../../Components/Carrossel"
import Footer from "../../Components/Footer"
import BarraSearch from "../../Components/Search"
import Sobre from "../../Components/Sobre"
import './Inicial.css'

const ContainerTodo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
 width: 100%;
 gap: 20px;
  `

const Inicial = () => {
  return (
    <ContainerTodo>
        <Cabecalho />
        <BarraSearch />
        <Carrossel />
        <Sobre />
        <Footer />
    </ContainerTodo>
  )
}

export default Inicial
