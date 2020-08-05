import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/48360931?s=400&u=1a5b218c7795602b24ab06dcdd5ec23da143feeb&v=4" alt="Rogerio Filho" />
        <div>
          <strong>Rogerio Filho</strong>
          <span>Quimica</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologia de quimica avançada.
        <br /><br /> 
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 20 000 pessoas já passaram por minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;