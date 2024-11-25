import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/LoginPage/login";
import CriarConta from "../pages/CreateAcountPage/criar-conta";
import EsqueceuSenha from "../pages/ForgotPassPage/forgot-pass";
import Suporte from "../pages/SuportePage/suporte";
import Recuperar from "../pages/RecuperarSenhaPage/recuperar-senha";
import SenhaRecuperada from "../pages/ForgotPassPage/senha-recuperada";
import Dashboard from "../pages/Dashboard";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/criar-conta" element={<CriarConta />} />
        <Route path="/esqueceu-a-senha" element={<EsqueceuSenha />} />
        <Route path="/contato-suporte" element={<Suporte />} />
        <Route path="/recuperar-senha" element={<Recuperar />} />
        <Route path="/senha-recuperada" element={<SenhaRecuperada />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
