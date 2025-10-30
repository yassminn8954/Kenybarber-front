import {Giragira} from './Barbeirocoptero.js'
import Imagem from '../../assets/imagem/barber-pole.png';

const Barbeirocoptero = ({ $display }) => {
  
  return <Giragira src={Imagem} alt="Logotipo barbeiro" $display={$display} />;
};

export default Barbeirocoptero;
