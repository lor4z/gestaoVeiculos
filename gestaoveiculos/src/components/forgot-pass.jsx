import React from 'react';
import './forgot-pass.css'; 
import { Link } from 'react-router-dom';
import { useState } from 'react';


const FrotasRecuperarSenha = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setEmailError('');

        try {
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();

            if (response.status === 200 && result.exists) {
                alert('Link de recuperação de senha enviado para o seu e-mail.');
            } else {
                setEmailError('E-mail não encontrado.');
            }
        } catch (error) {
            console.error('Erro ao verificar o e-mail:', error);
            setEmailError('Ocorreu um erro. E-mail incorreto.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='container'>
            <div className='left-side'>
                <div className='logo'></div> 
                <div className='site-name'></div> 
            </div>
            <div className='right-side'>
                <h1>Esqueceu a senha?</h1>
                <p>Insira seu e-mail para receber o link de recuperação de senha.</p>
                <div className='fields-informations'>
                <form onSubmit={handleSubmit}>
                        <div className='input-group-field'>
                        <label htmlFor='email'>Email</label>
                            <input 
                                type='email' 
                                className='text-field' 
                                id='email' 
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                        </div>
                        {emailError && <p className='error'>{emailError}</p>}
                        <div className='btn access-account'>
                            <button type='submit' className='access-invite' disabled={loading}>Recuperar</button>
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
