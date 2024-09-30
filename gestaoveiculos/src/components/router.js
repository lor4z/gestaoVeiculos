import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./login";
import CriarConta from "./criar-conta";
import EsqueceuSenha from "./forgot-pass";
import Suporte from "./suporte";
import VoltarLogin from "./forgot-pass";
import Recuperar from "./recuperar-senha";
import SenhaRecuperada from "./senha-recuperada";

const AppRoutes = () => {   
   return (
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<Login />} />
               <Route path="/criar-conta" element={<CriarConta />} />
               <Route path="/esqueceu-a-senha" element={<EsqueceuSenha />} />
               <Route path="/contato-suporte" element={<Suporte />} />
               <Route path="/recuperar-senha" element={<Recuperar/>}/>
               <Route path="/senha-recuperada" element={<SenhaRecuperada/>}/>

           </Routes>
       </BrowserRouter>
   )
}

export default AppRoutes;
