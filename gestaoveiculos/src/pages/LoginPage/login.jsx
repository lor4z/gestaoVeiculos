import './login.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../../hooks/api';



const FrotasLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Enviando os dados de login ao backend
        try {
            const response = await API.post('/login', {
                login: email,
                senha: password
            })


            if (response.status === 200 || response.status === 201) {

                console.log(response.data.mensagem);
                navigate('/pagina-acesso');
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            console.log(error);

            setError('Erro ao realizar login. Senha ou E-mail incorreto.');
        }
    };

    return (
        <div className='container'>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet"></link>
            {/* Lado esquerdo com cor sólida */}
            <div className='left-side'>
                <div className='logo'></div> {/* Deixando vazio */}
                <div className='site-name'></div> {/* Nome do site */}
            </div>

            {/* Lado direito com o formulário */}
            <div className='right-side'>
                <h1>Bem vindo de volta!</h1>
                <p>Insira seus dados abaixo para acessar a plataforma</p>
                {error && <p className='error'>{error}</p>}
                <div className='fields-informations'>
                    <form onSubmit={handleSubmit}>
                        <div className='input-group-field'>
                            <label htmlFor='email'>E-mail</label>
                            <input
                                type='email'
                                className='text-field'
                                id='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className='input-group-field'>
                            <label htmlFor='password'>Senha</label>
                            <input
                                type='password'
                                className='password-field'
                                id='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className='forgot-password'>
                            <Link to="/esqueceu-a-senha">Esqueceu a senha?</Link>
                        </div>
                        <div className='btn access-account'>
                            <button type='submit' className='access-invite'>Acessar Conta</button>
                        </div>
                        <div className='create-account'>
                            <p>Não possui conta? <Link to="/criar-conta">Criar Agora</Link></p>
                        </div>
                        <div className='support-link'>
                            <Link to="/contato-suporte" className='txt-suport-invite'>Conversar com o Suporte ➤</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );


}

export default FrotasLogin;
