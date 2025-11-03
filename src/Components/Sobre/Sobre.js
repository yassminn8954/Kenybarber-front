import styled from "styled-components";

export const TextoSobreNos=styled.h1`
    color: #ffffff;
`

export const SeguraCards= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    gap: 130px;
    flex-wrap: wrap;
    padding: 15px;

    @media(max-width: 1600px){
      gap: 70px;
    }

    @media(max-width: 1024px){
      gap: 40px;
    }

    @media(max-width: 768px){
    margin: 0 auto;
    flex-direction: row;
    gap: 15px;
  }

  @media(max-width: 480px){
    flex-direction: column;
    gap: 20px;
  }
`

export const SobreCard = styled.div`
  width: 280px;
  height: 300px;
 background: linear-gradient(
  to top, 
  #070504ff 45%,      
  #dac084ff 100%  ); 
  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;

   @media(max-width: 1600px){
      width: 460px;
    height: 280px;
    }
    @media(max-width: 1024px){
    width: 320px;
    height: 250px;
    }

  .icones{
    width: 75px;
    z-index: 2;
    margin-bottom: 35px;
  }

  h2, h3, h4, h5 {
    color: #fff;
    position: relative; 
    z-index: 2;
    margin: 0;
    padding: 0 12px;
    text-align: center;
    
    font-size: 18px;
    width: 220px;

    @media(max-width: 768px){
    font-size: 16px;
    font-weight: 400;
  }
  }

  &:hover{ 
    transform: scale(1.1);
  }

  &::before {
    content: '';
    position: absolute;
    width: 70px;
    background-image: linear-gradient(180deg, rgba(160, 19, 19, 1), rgba(0, 38, 252, 1));
    height: 190%;
    animation: rotBGimg 20s linear infinite;
    transition: all 0.2s linear;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    line-height: 1;
	background: linear-gradient(
  to top, 
  #1f170fff 45%,      
  #d1b779ff 100%  ); 
    inset: 5px;
    border-radius: 15px;
    z-index: 1;
  }  


  @keyframes rotBGimg {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
`;
