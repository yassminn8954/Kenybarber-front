import { Search as SearchIcon } from "lucide-react";
import { IconWrapper, Pesquisa, Wrapper } from "./Search.js"

const SearchBar = () => {
  return (
    <Wrapper>
      <Pesquisa
        type="text"
        placeholder="Buscar barbeiro, corte, local, calendário..."
      />
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
    </Wrapper>
  );
};

export default SearchBar;