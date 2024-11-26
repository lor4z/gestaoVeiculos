import React from "react";
import "./forgot-pass.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const FrotasRecuperarSenha = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setEmailError("");

    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.status === 200 && result.exists) {
        alert("Link de recuperação de senha enviado para o seu e-mail.");
      } else {
        setEmailError("E-mail não encontrado.");
      }
    } catch (error) {
      console.error("Erro ao verificar o e-mail:", error);
      setEmailError("Ocorreu um erro. E-mail incorreto.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-main">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <div className="section-left">
        <div className="logo"></div>
        <div className="name-site"></div>
      </div>
      <div className="section-right">
        <h1>Esqueceu sua senha?</h1>
        <p>Digite seu e-mail para receber o link de recuperação de senha.</p>
        <div className="input-fields">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="input-text"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            {emailError && <p className="error-message">{emailError}</p>}
            <div className="button access-account">
              <button type="submit" className="btn-access" disabled={loading}>
                Recuperar
              </button>
            </div>
            <div className="back-login">
              <p>
                <Link to="/">Voltar para o login</Link>
              </p>
            </div>
            <div className="support">
              <a href="/recuperar-senha" className="support-text">
                Fale com o suporte ➤
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FrotasRecuperarSenha;
