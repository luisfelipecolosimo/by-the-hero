import React from "react";
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register(){
    return (
        <div className="register-container">
            <div class="content">
                <section>
                    <img id="logo" src={logoImg} alt="BE YHE HERO"/>
                    <h1>Cadastro</h1>
                    <p>Cadastre-se agora</p>
                    <Link className='back-link' to="/">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Ja tenho uma conta
                    </Link>
                </section>
                <form action="">
                    <input type="text" placeholder='Nome da ong'/>
                    <input type="text" placeholder='Email da ong'/>
                    <input type="text" placeholder='WhatsApp da ong'/>
                    <div className='input-group'>
                        <input type="text" placeholder='Cidade'/>
                        <input type="text" placeholder='uf' style={{ width:80 }}/>
                    </div>

                    <button className='button' type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}