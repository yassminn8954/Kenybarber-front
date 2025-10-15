import styled from "styled-components"

const BotaoSubmit=styled.button`
     display: block;
            margin: 20px auto 0 auto; 
            padding: 14px 40px;
            max-width: 200px; 
            width: 500px;
            border: none;
            border-radius: 25px;
            background-color: #C6A24D;
            color: black;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.3s;
`

 const Botao=()=>{
    return(
     <BotaoSubmit type="submit">Entrar</BotaoSubmit>

    )

}
export default Botao