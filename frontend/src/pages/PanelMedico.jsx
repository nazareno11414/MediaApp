import "../styles/style_pagina_medico.css";
import { useState } from "react";
import { Agenda } from "../components/Agenda.jsx";
import { MisPacientes } from "../components/MisPacientes.jsx";
import { MiPerfil } from "../components/MiPerfil.jsx";

export function PanelMedico({ login, setLogin }) {
  const [vista, setVista] = useState("misPacientes");
  let vistaPrevia;
  if (vista === "misPacientes") {
    vistaPrevia = <MisPacientes />;
  }
  if (vista === "agenda") {
    vistaPrevia = <Agenda />;
  }
  if (vista === "miPerfil") {
    vistaPrevia = <MiPerfil />;
  }
  return (
    <div className="panel-medico">
      <header className="header-medico">
        <div className="header-logo">logo</div>
        <div className="header-texto">
          <h2>Bienvenido de nuevo {login}</h2>
          <h3>Medico</h3>
        </div>

        <button
          type="button"
          className="btn-salir"
          onClick={() => setLogin(null)}
        >
          salir
        </button>
      </header>
      <nav className="pestanas-medico">
        <button
          className={`boton-vista ${vista === "misPacientes" ? "activa" : ""}`}
          onClick={() => setVista("misPacientes")}
        >
          Mis pacientes
        </button>
        <button
          className={`boton-vista ${vista === "agenda" ? "activa" : ""}`}
          onClick={() => setVista("agenda")}
        >
          Agenda
        </button>
        <button
          className={`boton-vista ${vista === "miPerfil" ? "activa" : ""}`}
          onClick={() => setVista("miPerfil")}
        >
          Mi perfil
        </button>
      </nav>
      {vistaPrevia}
    </div>
  );
}
