import React from 'react';
import './criar-conta.css'; // Arquivo CSS para estilização


const CriarConta = () => {
    return (
        <div className="construction-container">
            <div className="text-section">
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet"></link>
                <div className="warning-icon">⚠️</div>
                <h1>Em construção</h1>
                <p>
                    Nosso site está em construção, mas estamos prontos para começar! Estamos
                    preparando algo incrível e emocionante para você. Surpresa especial
                    apenas para nossos assinantes.
                </p>
                <button className="notify-btn">Me avise</button>
            </div>
            <div className="image-section">
                <img src={require('../../assets/computador.png')} alt="Em Construção" className="illustration" />
            </div>
        </div>
    );

}

export default CriarConta;
