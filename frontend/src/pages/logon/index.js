import React from "react";
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import './styles.css';

import logoImg from '../../assets/logo.svg';
import herosImg from '../../assets/heroes.png';

export default function Logon(){
    return (
        <div className="logon-container">
            <section className="form">
                <img id="logo" src={logoImg} alt="BE YHE HERO"/>

                <form action="" method="get">
                    <h1>Faça seu logon</h1>

                    <input type="text"/>
                    <button className="button" type="submit">Entrar</button>

                    <Link to="/register">
                        <FiLogIn size={16} color="#e02041"/>
                        Não tenho uma conta
                    </Link>
                </form>
            </section>
            <img className="heros" src={herosImg} alt="heros"/>
        </div>
    );
}