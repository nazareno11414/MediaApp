import "../styles/style_pagina_paciente.css";
import { useState } from "react";
import { MisTurnos } from "../components/MisTurnos.jsx";
import { PedirTurnos } from "../components/PedirTurnos.jsx";
import { Indicaciones } from "../components/Indicaciones.jsx";
import { MiPerfil } from "../components/MiPerfil.jsx";

export function PanelPaciente({ login, setLogin }) {
  const [vista, setVista] = useState("misTurnos");
  let vistaPrevia;
  if (vista === "misTurnos") {
    vistaPrevia = <MisTurnos />;
  }
  if (vista === "pedirTurno") {
    vistaPrevia = <PedirTurnos />;
  }
  if (vista === "Indicaciones") {
    vistaPrevia = <Indicaciones />;
  }
  if (vista === "miPerfil") {
    vistaPrevia = <MiPerfil />;
  }
  return (
    <div className="panel-paciente">
      <header className="header-paciente">
        <div className="header-logo">logo</div>
        <div className="header-texto">
          <h2>Bienvenido de nuevo {login}</h2>
          <h3>Paciente</h3>
        </div>

        <button
          type="button"
          className="btn-salir"
          onClick={() => setLogin(null)}
        >
          salir
        </button>
      </header>
      <nav className="pestanas-paciente">
        <button
          className={`boton-vista ${vista === "misTurnos" ? "activa" : ""}`}
          onClick={() => setVista("misTurnos")}
        >
          Mis turnos
        </button>
        <button
          className={`boton-vista ${vista === "pedirTurno" ? "activa" : ""}`}
          onClick={() => setVista("pedirTurno")}
        >
          Pedir turno
        </button>
        <button
          className={`boton-vista ${vista === "Indicaciones" ? "activa" : ""}`}
          onClick={() => setVista("Indicaciones")}
        >
          Indicaciones
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
