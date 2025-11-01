import { Button, Texto} from "./Botao.js"
export * from "./Botao.js";

const Botao = ({ texto, tipo = "button", ...props }) => {
  return (
    <Button type={tipo} {...props}>
      <Texto>{texto}</Texto>
    </Button>
  );
};

export default Botao;
