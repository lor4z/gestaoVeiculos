import React from 'react';
import './recuperar-senha.css'; 
import { Link } from 'react-router-dom';
import { useState } from 'react';


const FrotasRecuperarSenha = () => {
        
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [match, setMatch] = useState(false);

    // Função para atualizar o estado da senha e verificar se as senhas correspondem
    const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setMatch(newPassword === confirmPassword);
    };

    const handleConfirmPasswordChange = (e) =>{
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
        setMatch(newConfirmPassword === password);
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
                <form>
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
                        <label htmlFor='password'>Confirme nova senha</label>
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
                            <button type='submit' className='submit-button'>Alterar Senha</button>
                        </div>
                        <div className='login-link'>
                        <p><Link to="/">Voltar ao login</Link></p>
                        </div>
                        <div className='support-link'>
                            <a href='/contato-suporte' className='support-text'>Conversar com o Suporte ➤</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FrotasRecuperarSenha;