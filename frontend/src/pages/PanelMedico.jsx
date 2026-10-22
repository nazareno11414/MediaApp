import "../styles/style_pagina_medico.css";
import { useState } from "react";
import { Agenda } from "../components/Agenda.jsx";
import { MisPacientes } from "../components/MisPacientes.jsx";
import { MiPerfil } from "../components/MiPerfil.jsx";

export function PanelMedico({ login, setLogin, turnos, perfilPaciente }) {
  const doctores = [
    {
      doctor_id: 1,
      medical_license: "20430284474",
      doctor_name: "Nazareno Cammarota",
      email: "naza2.0@hotmail.com",
      medical_speciality: "Cardiologia",
      user_id: 1,
    },
  ];
  const perfilDoctor = doctores.find((d) => d.user_id === 1);
  const datosPerfilDoctor = [
    { etiqueta: "Nombre", valor: perfilDoctor.doctor_name },
    { etiqueta: "Email", valor: perfilDoctor.email },
    { etiqueta: "Especialidad", valor: perfilDoctor.medical_speciality },
    { etiqueta: "Matrícula", valor: perfilDoctor.medical_license },
  ];
  const turnosMedico = turnos.filter(
    (t) => t.doctor_id === perfilDoctor.doctor_id,
  );
  const idPacientes = turnosMedico.map((pp) => pp.patient_id);
  const misPacientes = perfilPaciente.filter((p) =>
    idPacientes.includes(p.patient_id),
  );
  const [vista, setVista] = useState("misPacientes");
  let vistaPrevia;
  if (vista === "misPacientes") {
    vistaPrevia = (
      <MisPacientes
        turnosMedico={turnosMedico}
        nombrePacientes={misPacientes}
      />
    );
  }
  if (vista === "agenda") {
    vistaPrevia = <Agenda />;
  }
  if (vista === "miPerfil") {
    vistaPrevia = <MiPerfil perfil={datosPerfilDoctor} />;
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
