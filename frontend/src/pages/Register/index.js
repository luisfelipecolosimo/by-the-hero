import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import "./styles.css";

import logoImg from "../../assets/logo.svg";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      const res = await api.post("ongs", data);

      alert(`Seu ID de acesso: ${res.data.id}`);
      history.push('/');
    } catch (error) {
        alert("erro");
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img id="logo" src={logoImg} alt="BE YHE HERO" />
          <h1>Cadastro</h1>
          <p>Cadastre-se agora</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Ja tenho uma conta
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome da ong"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email da ong"
          />
          <input
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="WhatsApp da ong (com o codigo do pais sem '+' )"
          />
          <div className="input-group">
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Cidade"
            />
            <input
              value={uf}
              onChange={(e) => setUf(e.target.value)}
              placeholder="uf"
              style={{ width: 80 }}
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
