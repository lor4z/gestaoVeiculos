import React from 'react';
import './login.css'; 

const FrotasRecuperarSenha = () => {
    return (
        <div className='container'>
            <div className='left-side'>
                <div className='logo'></div> 
                <div className='site-name'>LogiFleet</div> 
            </div>
            <div className='right-side'>
                <h1>Esqueceu a senha?</h1>
                <p>Insira seu e-mail para receber o link de recuperação de senha.</p>
                <div className='fields-informations'>
                    <form>
                        <div className='input-group-field'>
                            <label htmlFor='email'>Email</label>
                            <input type='text' className='text-field' id='email' />
                        </div>
                        <div className='btn access-account'>
                            <button type='submit' className='access-invite'>Acessar Conta</button>
                        </div>
                        <div className='create-account'>
                            <p>Voltar ao login<a href='/login'></a></p>
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
