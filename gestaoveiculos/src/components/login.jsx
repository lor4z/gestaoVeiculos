import React from 'react';
import './login.css'; 
import frotasImg from "../assets/frotas.png"


const FrotasLogin = () => {

    return (
        <div className='container'>
            {/* Lado esquerdo com cor sólida */}
            <div className='left-side'>
                <div className='logo'></div> {/* Deixando vazio */}
                <div className='site-name'>LogiFleet</div> {/* Nome do site */}
            </div>

            {/* Lado direito com o formulário */}
            <div className='right-side'>
                <h1>Bem vindo de volta!</h1>
                <p>Insira seus dados abaixo para acessar a plataforma</p>
                <div className='fields-informations'>
                    <form>
                        <div className='input-group-field'>
                            <label htmlFor='email' required>Email</label>
                            <input type='text' className='text-field' id='email' />
                        </div>
                        <div className='input-group-field'>
                            <label htmlFor='password' required>Senha</label>
                            <input type='password' className='password-field' id='password' />
                        </div>
                        <div className='forgot-password'>
                            <a href='/forgot-pass'>Esqueceu a senha?</a>
                        </div>
                        <div className='btn access-account'>
                            <button type='submit' className='access-invite'>Acessar Conta</button>
                        </div>
                        <div className='create-account'>
                            <p>Não possui conta? <a href='/create-account'>Criar Agora</a></p>
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

export default FrotasLogin;
