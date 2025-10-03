import styled from "styled-components";

const Pesquisa = styled.input`
  padding: 12px;
  width: 800px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  font-size: 14px;

`;

const Search = () => {
  return <Pesquisa type="text" placeholder="Buscar..." />;
};

export default Search;
