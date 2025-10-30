import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicial from "./pages/Inicial";
import Cadastro from "./pages/Cadastro";
import Locais from "./pages/Locais";
import Login from "./pages/Login";
import Erro404 from "./Components/Erro404";
import Calendario from "./pages/Calendario";
import Usuarios from "./pages/adm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/cadastro" element={<Cadastro />} />
         <Route path="/login" element={<Login />} />
         <Route path="/calendario" element={<Calendario />} />
        <Route path="/locais" element={<Locais />} />
        <Route path="/admin" element={<Usuarios />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 