import styled from "styled-components";
import { Search as SearchIcon } from 'lucide-react';

const Pesquisa = styled.input`
  padding: 12px 48px 12px 20px;
  width: 800px;
  height: 40px;
  background-color: #B9B9B9;
  border-radius: 20px;
  outline: none;
  font-size: 14px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.7);
    font-size: 20px;
    font-family: "Judson", serif;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 800px;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #333;
`;

const SearchBar = () => {
  return (
    <Wrapper>
      <Pesquisa type="text" placeholder="Buscar barbeiro, corte, local, calendário..." />
      <IconWrapper>
        <SearchIcon size={36} />
      </IconWrapper>
    </Wrapper>
  );
};

export default SearchBar;