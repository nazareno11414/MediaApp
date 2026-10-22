import "../styles/style_pagina_paciente.css";
import { useState } from "react";
import { MisTurnos } from "../components/MisTurnos.jsx";
import { PedirTurnos } from "../components/PedirTurnos.jsx";
import { Indicaciones } from "../components/Indicaciones.jsx";
import { MiPerfil } from "../components/MiPerfil.jsx";

export function PanelPaciente({
  login,
  setLogin,
  turnos,
  agregarTurno,
  cancelarTurno,
  perfilPaciente,
}) {
  const pacientePerfil = perfilPaciente.find((m) => m.id === Number(1));
  const datosPerfilPaciente = [
    { etiqueta: "Nombre", valor: pacientePerfil.nombre },
    { etiqueta: "Email", valor: pacientePerfil.email },
    { etiqueta: "Telefono", valor: pacientePerfil.tell },
    { etiqueta: "Obra social", valor: pacientePerfil.obraSocial },
    { etiqueta: "Dni", valor: pacientePerfil.dni },
  ];

  const [vista, setVista] = useState("misTurnos");
  let vistaPrevia;
  if (vista === "misTurnos") {
    vistaPrevia = <MisTurnos turnos={turnos} cancelarTurno={cancelarTurno} />;
  }
  if (vista === "pedirTurno") {
    vistaPrevia = (
      <PedirTurnos
        turnos={turnos}
        agregarTurno={agregarTurno}
        patient_id={pacientePerfil.patient_id}
      />
    );
  }

  const indicacionesAtendidas = turnos.filter((i) => i.estado === "atendido");

  if (vista === "Indicaciones") {
    vistaPrevia = (
      <Indicaciones indicacionesAtendidas={indicacionesAtendidas} />
    );
  }

  if (vista === "miPerfil") {
    vistaPrevia = <MiPerfil perfil={datosPerfilPaciente} />;
  }

  const nombreCortado = pacientePerfil.nombre.slice(
    0,
    pacientePerfil.nombre.lastIndexOf(" "),
  );

  return (
    <div className="panel-paciente">
      <header className="header-paciente">
        <div className="header-logo">logo</div>
        <div className="header-texto">
          <h2>Bienvenido de nuevo {nombreCortado}</h2>
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
