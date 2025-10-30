import { Button, Texto} from "./Botao.js"

const Botao = ({ texto, tipo = "button" }) => {
  return (
    <Button type={tipo}>
      <Texto>{texto}</Texto>
    </Button>
  );
};

export default Botao;
