import styled from "styled-components";

const Button = styled.button`
  background: #141313;
  border-radius: 2px;
  box-shadow:
    inset 0px -6px 18px -6px rgba(3, 15, 20, 0),
    inset #C6A24D -1px -1px 6px 0px,
    inset 12px 0px 12px -6px rgba(3, 15, 20, 0),
    inset -12px 0px 12px -6px rgba(3, 15, 20, 0),
    #C6A24D -1px -1px 6px 0px;
  border: solid 2px #030f14;
  cursor: pointer;
  font-size: 18px;
  padding: 15px 32px;
  outline: none;
  transition: all 0.3s;
  user-select: none;
  margin-bottom: 30px;

  &:hover {
    box-shadow:
      inset 0px -6px 18px -6px #c99240,
      inset 0px 6px 18px -6px #c99240,
      inset 12px 0px 12px -6px rgba(3, 15, 20, 0),
      inset -12px 0px 12px -6px rgba(3, 15, 20, 0),
      -1px -1px 6px 0px rgba(54, 69, 75, 1);

    .text {
      transform: scale(0.9);
    }
  }

  &:active {
    box-shadow:
      inset 0px -12px 12px -6px #9c681a,
      inset 0px 12px 12px -6px #c99240,
      inset 12px 0px 12px -6px #bb7c1d,
      inset -12px 0px 12px -6px #a77e0f,
      -1px -1px 6px 0px #4e4017,;

    .text {
      transform: scale(0.8);
    }
  }
`;

const Text = styled.span`
  color: #f8c256;
  font-weight: 700;
  margin: auto;
  transition: all 0.3s;
  width: fit-content;
`;

 const Botao=()=> {
  return (
    <Button>
      <Text className="text">Cadastrar</Text>
    </Button>
  );
}

export default Botao