import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './components/login';
import RecuperarSenha from './components/forgot-pass'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Login />
  </>
);

Login();