import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: white;
  background: transparent;
  box-sizing: border-box;
  position: relative;
  
  .center-logo{
    display: none;
  }

  nav {
    flex: 1;
    display: flex;
    justify-content: center;
    gap: 4vw;
    align-items: center;

    @media(max-width:1000px){
      gap: 4vh;
    }

  }

  nav a {
    font-size: 30px;
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
    cursor: pointer;
    white-space: nowrap;

    @media(max-width: 1000px){
      font-size: 22px;
    }
  
  }

  nav a:hover {
    color: #ffcc00;
  }

  .menu-btn {
    display: none;
    background: transparent;
    border: none;
    color: white;
    font-size: 30px;
    cursor: pointer;
  }

  // Responsividade 

   @media (max-width: 768px) {
    padding: 5vw 10vw;

    .menu-btn {
      display: block;
      z-index: 25;
    }

    .logo,
    .right-logo {
      display: none;
    }

.center-logo {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center; 
  align-items: center;
  z-index: 20;
  pointer-events: none;
}

    nav {
      // menu hamburguer 
      position: absolute;
      top: 60px;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.95);
      border-radius: 8px;
      padding: 0.75rem;
      flex-direction: column;
      gap: 0.5rem;
      align-items: stretch;
      display: ${props => (props.$menuOpen ? "flex" : "none")};
      z-index: 15;

    }

    nav a {
      font-size: 20px;
      padding: 0.5rem 0.75rem;
    }
  }
`;

