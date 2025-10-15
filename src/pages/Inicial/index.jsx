import styled from "styled-components"
import Cabecalho from "../../Components/Cabecalho/Cabecalho"
import Carrossel from "../../Components/Carrossel/Carrossel"
import Footer from "../../Components/Footer/Footer"
import Search from "../../Components/Search/Search"


const ContainerTodo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
  `

const Inicial = () => {
    return(
    <ContainerTodo>
    <Cabecalho />
    <Search />
    <Carrossel />

  <Footer/>
</ContainerTodo>
    )
}

export default Inicial
