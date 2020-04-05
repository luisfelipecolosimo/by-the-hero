import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import api from "../../services/api";

import "./styles.css";

import logoImg from "../../assets/logo.svg";
import herosImg from "../../assets/heroes.png";

export default function Logon() {
  const [id, setId] = useState("");

  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();

    try {
        const res = await api.post('session', {id});

        alert(`Bem vindo ${res.data.name}`);
        localStorage.setItem('ongId',id);
        localStorage.setItem('ongName',res.data.name);
        history.push('/profile');
    } catch (error) {
        alert("foi nao");
    }
  }


  return (
    <div className="logon-container">
      <section className="form">
        <img id="logo" src={logoImg} alt="BE YHE HERO" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            type="text"
          />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho uma conta
          </Link>
        </form>
      </section>
      <img className="heros" src={herosImg} alt="heros" />
    </div>
  );
}
