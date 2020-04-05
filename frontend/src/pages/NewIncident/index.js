import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

import logoImg from "../../assets/logo.svg";

export default function NewIncident() {
  return (
    <div className="new-incident">
            <div class="content">
                <section>
                    <img id="logo" src={logoImg} alt="BE YHE HERO"/>
                    <h1>Cadastro de novo caso</h1>
                    <p>Cadastro de novo caso</p>
                    <Link className='back-link' to="/profile">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Voltar
                    </Link>
                </section>
                <form action="">
                    <input type="text" placeholder='Nome do caso'/>
                    <textarea placeholder='Descrição'/>
                    <input placeholder='Valor em reais'/>

                    <button className='button' type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
  );
}
