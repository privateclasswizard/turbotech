import React from "react";
import "../../assets/css/Formulario.css";

//import { useState } from "react"

function Formulario(props) {
  return (
    <div className="containerSection5">
      <div className="textcontaineSection5">
        <div className="divSpantextcontaineSection5">
          <span>Formulário</span>
        </div>
        <div className="divTitletextcontaineSection5">
          <h1>
            Lorem ipsum dolor sit amet,{" "}
            <span className="palavraTracejada">consectetur</span> consectetur
            adipis cing elit. Mauris a odio at purus.
          </h1>
        </div>
        <div className="divText2ContaineSection5">
          <span>
            Mauris a odio at purus faucibus laoreet. Nam est est, a nibh vel,
            tempor tempor
          </span>
        </div>
      </div>
      <div className="Form">
        <span className="tituloForm">Preencha o Formulário</span>
        <div className="divCombo">
          <div className="Combo">
            <label htmlFor="name" className="labelForm">
              Nome:
            </label>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              className="inputForm"
              placeholder="Digite o nome completo"
            />
            <br />
          </div>
          <div className="Combo">
            <label htmlFor="email" className="labelForm">
              Email:
            </label>
            <br />
            <input
              type="text"
              name="email"
              id="email"
              className="inputForm"
              placeholder="Seu email"
            />
            <br />
          </div>
          <div className="Combo">
            <label htmlFor="phone" className="labelForm">
              Telefone:
            </label>
            <br />
            <input
              type="text"
              name="phone"
              id="phone"
              className="inputForm"
              placeholder="(DDD)9999-9999"
            />
            <br />
          </div>
          <div className="Combo">
            <label htmlFor="empresa" className="labelForm">
              Empresa:
            </label>
            <br />
            <input
              type="text"
              name="empresa"
              id="empresa"
              className="inputForm"
              placeholder="Nome da empresa"
            />
            <br />
          </div>
          <div className="Combo">
            <label htmlFor="faturamento" className="labelForm">
              Faturamento:
            </label>
            <br />
            <select
              name="faturamento"
              id="faturamento"
              className="selectForm"
              placeholder="valor do faturamento"
            >
              <option value="500k">Ate 500k</option>
              <option value="500k - 1M">500k - 1M</option>
              <option value="1M - 5M">1M - 5M</option>
              <option value="5M - 20M">5M - 20M</option>
              <option value="20M+">20M+</option>
            </select>
          </div>
          <button type="button" className="buttonForm">
            {" "}
            Solicitar demostração
          </button>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
