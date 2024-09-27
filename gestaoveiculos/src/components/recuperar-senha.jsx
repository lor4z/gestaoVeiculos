import React from 'react';
import './forgot-pass.css'; 
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
        <div className='container'>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet"></link>
            <div className='left-side'>
                <div className='logo'></div> 
                <div className='site-name'></div> 
            </div>
            <div className='right-side'>
                <h1>Redefinir senha</h1>
                <div className='fields-informations'>
                <form>
                        <div className='input-group-field'>
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
                        <div className='input-group-field'>
                        <label htmlFor='password'>Confirme nova senha</label>
                            <input
                                type="password" 
                                id="confirmPassword" 
                                value={confirmPassword} 
                                onChange={handleConfirmPasswordChange}
                                placeholder="Confirme sua senha" 
                                required
                            />
                        </div>
                        {confirmPassword && (
                            match ? 
                            <p style={{ color: 'green' }}>As senhas correspondem!</p> : 
                            <p style={{ color: 'red' }}>As senhas não correspondem.</p>
                        )}
                        <div className='btn access-account'>
                            <button type='submit' className='access-invite'>Alterar Senha</button>
                        </div>
                        <div className='login-account'>
                        <p><Link to="/">Voltar ao login</Link></p>
                        </div>
                        <div className='support-link'>
                            <a href='/support' className= 'txt-suport-invite'>Conversar com o Suporte ➤</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FrotasRecuperarSenha;
