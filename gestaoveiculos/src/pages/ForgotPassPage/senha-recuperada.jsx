import React from "react";
import "./forgot-pass.css";
import { Link } from "react-router-dom";

const FrotasRecuperarSenha = () => {
  return (
    <div className="container">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <div className="left-side">
        <div className="logo"></div>
        <div className="site-name"></div>
      </div>
      <div className="right-side">
        <h1>Senha redefinida com sucesso</h1>
        <div className="fields-informations">
          <form>
            <div className="login-account">
              <p>
                <Link to="/">Novo login</Link>
              </p>
            </div>
            <div className="support-link">
              <a href="/support" className="txt-suport-invite">
                Conversar com o Suporte ➤
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FrotasRecuperarSenha;
