import styled from "styled-components";

const Pesquisa = styled.input`
  padding: 12px;
  width: 800px;
  height: 40px;
  background-color: #B9B9B9;
  border-radius: 10px;
  outline: none;
  font-size: 14px;

`;

const Search = () => {
  return <Pesquisa type="text" placeholder="Buscar barbeiro, corte, local, calendário..." />;
};

export default Search;
