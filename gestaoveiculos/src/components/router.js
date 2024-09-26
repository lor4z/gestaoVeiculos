import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./login";
import CriarConta from "./criar-conta";
import EsqueceuSenha from "./forgot-pass";
import Suporte from "./suporte";
import VoltarLogin from "./forgot-pass";

const AppRoutes = () => {   
   return (
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<Login />} />
               <Route path="/criar-conta" element={<CriarConta />} />
               <Route path="/esqueceu-a-senha" element={<EsqueceuSenha />} />
               <Route path="/contato-suporte" element={<Suporte />} />
           </Routes>
       </BrowserRouter>
   )
}

export default AppRoutes;
