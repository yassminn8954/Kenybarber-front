import styled from "styled-components";


export const Pesquisa = styled.input`
  padding: 12px 48px 12px 20px;
  width: 100%;
  height: 55px;
  background-color: #b9b9b9;
  border-radius: 20px;
  outline: none;
  border: none;

  &::placeholder {
    color: rgba(0, 0, 0, 0.7);
    font-size: 20px;
    font-family: "Judson", serif;
  }

  @media(max-width:1920px) {
    width: 86%;
    margin-left: 2.8%;
    height: 35px;
  }

  @media (max-width: 768px) {
    margin-top: 25px;
    margin-left: 3%;
    height: 42px;
    padding: 10px 20px 10px 16px;
    &::placeholder { 
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    margin-top: 30px;
    height: 40px;
    padding: 8px 20px 8px 12px;
    &::placeholder { 
      font-size: 14px; 
    }
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 800px;

  @media (max-width: 768px) {
    max-width: 90%;
  }

  @media (max-width: 480px) {
    max-width: 95%;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 36px;
    height: 36px;
  }

  @media(max-width:1920px) {
    top: 30px;
      right: 40px;
    
  }

  @media (max-width: 768px) {
    right: 8%;
    top: 65%;
    svg { 
      width: 30px; 
      height: 35px; }
  }

  @media (max-width: 480px) {
    right: 10px;
    svg { 
      display: none;
     }
  }
  
`;
