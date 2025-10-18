import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicial from "./pages/Inicial";
import Cadastro from "./pages/Cadastro";
import Locais from "./pages/Locais";

const App=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/locais" element={<Locais />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App; 