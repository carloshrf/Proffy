import React from 'react';

import Input from '../../components/Input';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import logoDetails from '../../assets/images/logo-details.svg';
import logoDetailsBig from '../../assets/images/logo-details-big.svg';

import './styles.css';

function Login() {
  return (
    <div className="login-container">
      <header id="login-header">
        <div className="logo-top-container">
          <img className="top-logo" src={logoImg} alt="Logo"/>
          <p className="logo-description">Sua plataforma de estudos online</p>
        </div>
        
        <img className="logo-details" src={logoDetails} alt="Detalhes da logo"/>
        <img className="logo-details-big" src={logoDetailsBig} alt="Detalhes da logo"/>
      </header>
      
      <main id="login-main">
        <form>
          <div className="login-info">
            <span>Fazer login</span>
            <span className="desktop-create-account"></span>
            <span className="desktop-create-account-complement"></span>
            <Link to="/">Criar uma conta</Link>
          </div>

          <Input name="email" label="E-mail" type="text" placeholder=" " required></Input>
          <Input name="password" label="Senha" type="password" required></Input>

          <div className="login-options">
            <label>
              <input type="checkbox" />
              <span>Lembrar-me</span>
            </label>
            
            <Link to="/">Esqueci minha senha</Link>
          </div>

          <button type="button">Entrar</button>
        </form>
      </main>
    </div>
  );
}

export default Login;