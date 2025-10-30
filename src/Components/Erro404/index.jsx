import styled from 'styled-components';
import Imagem404 from '../../assets/imagem/404.png.png'; 
import { Fundo } from '../../pages/Cadastro';

const Img404=styled.img`
    width: 60%;
    height: auto;
    display: block;
`


export default function Erro404() {
  return (
    <Fundo $backgroundcolor="#432819 ">
      <Img404 src={Imagem404}/>
      </Fundo>
     
  );
}
