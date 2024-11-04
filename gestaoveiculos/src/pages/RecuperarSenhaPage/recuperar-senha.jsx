import React from 'react';
import './recuperar-senha.css';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate
import { useState } from 'react';

const FrotasRecuperarSenha = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [match, setMatch] = useState(false);
    const navigate = useNavigate(); // Cria uma instância do navegador

    // Função para atualizar o estado da senha e verificar se as senhas correspondem
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setMatch(newPassword === confirmPassword);
    };

    const handleConfirmPasswordChange = (e) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
        setMatch(newConfirmPassword === password);
    };

    // Função para lidar com a submissão do formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Impede o comportamento padrão do formulário
        if (match) {
            // Se as senhas correspondem, redireciona para a nova página
            navigate('/senha-recuperada'); // Redireciona para /senha-recuperada
        } else {
            alert('As senhas não correspondem.'); // Mensagem de erro opcional
        }
    };

    return (
        <div className='main-container'>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet"></link>
            <div className='left-section'>
                <div className='company-logo'></div>
                <div className='company-name'></div>
            </div>
            <div className='right-section'>
                <h1>Redefinir senha</h1>
                <div className='form-fields'>
                    <form onSubmit={handleSubmit}> {/* Adiciona o evento onSubmit */}
                        <div className='password-input-group'>
                            <label htmlFor='password'>Nova senha</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder="Digite sua senha"
                                required
                            />
                        </div>
                        <div className='password-input-group'>
                            <label htmlFor='confirmPassword'>Confirme nova senha</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                placeholder="Confirme nova senha"
                                required
                            />
                        </div>
                        {confirmPassword && (
                            match ?
                                <p style={{ color: 'green' }}>As senhas correspondem!</p> :
                                <p style={{ color: 'red' }}>As senhas não correspondem.</p>
                        )}
                        <div className='button-container'>
                            <button type='submit' className='submit-button'>Alterar Senha</button> {/* Remove href */}
                        </div>
                        <div className='login-link'>
                            <p><Link to="/">Voltar ao login</Link></p>
                        </div>
                        <div className='support-link'>
                            <Link to='/contato-suporte' className='support-text'>Conversar com o Suporte ➤</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FrotasRecuperarSenha;
