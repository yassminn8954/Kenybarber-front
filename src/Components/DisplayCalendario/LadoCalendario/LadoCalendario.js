import styled from "styled-components";

export const Side = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: #d6d1d1;
  border-radius: 12px;
  padding: 16px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  max-width: 420px;
  width: 400px;
  height: 100%;
  transition: all 0.3s ease;

  h2 {
    font-size: 24px;
    color: #222;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 18px;
    color: #222;
    margin: 15px 0 8px 0;
  }

  p {
    margin: 0 0 10px 0;
    color: #444;
    font-size: 16px;
    font-weight: 700;
  }

  a {
    color: #006400;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }

  // ---------- RESPONSIVIDADE ---------- 
  @media (max-width: 1024px) {
    max-width: 360px;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 16px;
    h2 { font-size: 16px; }
    h3 { font-size: 15px; }
    p { font-size: 13px; }
  }

  @media (max-width: 480px) {
    max-width: 85%;
    padding: 14px;
    text-align: center;

    h2 { font-size: 20px; }
    h3 { font-size: 16px; }
    p { font-size: 16px; }
    a { font-size: 16px; }
  }
`;

export const Legenda = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 15px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    color: #333;
    flex-wrap: wrap;
  }

  span {
    width: 20px;
    height: 20px;
    border-radius: 4px;
  }

  @media (max-width: 480px) {
    div {
      justify-content: center;
      font-size: 16px;
    }
  }
`;
