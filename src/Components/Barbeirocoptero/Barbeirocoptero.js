import styled from "styled-components";

export const Giragira = styled.img`
  display: ${({ $display }) => $display || "block"};
  flex: 0 0 auto;
  width: 75px; 
  height: auto;
  margin: 0.25rem; 
  object-fit: contain;
  transition: width 0.2s ease;


  @media (max-width: 1000px) {
    width: 56px;
  }

 
`;
