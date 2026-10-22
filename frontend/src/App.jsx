import { Inicio } from "./pages/Inicio.jsx";
import { useState } from "react";
import { LoginApp } from "./pages/LoginApp.jsx";
import { PanelPaciente } from "./pages/PanelPaciente.jsx";
import { PanelMedico } from "./pages/PanelMedico.jsx";

export function App() {
  const [rol, setRol] = useState(null);
  const [login, setLogin] = useState("");
  const [turnos, setTurnos] = useState([
    {
      id: 1,
      medico: "Dr.Juan Perez",
      clinica: "clinica Medica",
      horario: "09:30",
      fecha: "2026-11-06",
      motivo: "control General",
      estado: "pendiente",
      indicaciones: "",
      doctor_id: 1,
      patient_id: 1,
    },
    {
      id: 2,
      medico: "Dr.Juan Perez",
      clinica: "clinica Medica",
      horario: "12:30",
      fecha: "2026-12-06",
      motivo: "control General",
      estado: "pendiente",
      indicaciones: "",
      doctor_id: 1,
      patient_id: 2,
    },
    {
      id: 2,
      medico: "Dr.Juan Perez",
      clinica: "clinica Medica",
      horario: "12:30",
      fecha: "2026-09-06",
      motivo: "control General",
      estado: "pendiente",
      indicaciones: "",
      doctor_id: 1,
      patient_id: 2,
    },
    {
      id: 2,
      medico: "Dr.Juan Perez",
      clinica: "clinica Medica",
      horario: "12:30",
      fecha: "2026-02-06",
      motivo: "control General",
      estado: "pendiente",
      indicaciones: "",
      doctor_id: 1,
      patient_id: 2,
    },
    {
      id: 3,
      medico: "Nazareno",
      clinica: "Pediatria",
      horario: "12:30",
      fecha: "2026-01-06",
      motivo: "control General",
      estado: "atendido",
      indicaciones: "tomar ibuprofeno cada media hora",
      doctor_id: 2,
      patient_id: 1,
    },
  ]);

  const perfilPaciente = [
    {
      id: 1,
      nombre: "Nazareno Cammarota",
      email: "naza2.0@hotmail.com",
      dni: "43082447",
      tell: "1140644367",
      obraSocial: "Osde",
      patient_id: 1,
    },
    {
      id: 2,
      nombre: "Juan Perez",
      email: "JuanPerez@hotmail.com",
      dni: "2222222",
      tell: "123456789",
      obraSocial: "Particular",
      patient_id: 2,
    },
  ];
  const agregarTurno = (nuevoTurno) => {
    const nuevoArrayTurno = [...turnos, nuevoTurno];
    setTurnos(nuevoArrayTurno);
  };
  const cancelarTurno = (id) => {
    const listaCancelada = turnos.map((c) =>
      c.id === id ? { ...c, estado: "cancelado" } : c,
    );
    setTurnos(listaCancelada);
  };

  if (login) {
    if (rol === "dr") {
      return (
        <PanelMedico
          login={login}
          setLogin={setLogin}
          turnos={turnos}
          perfilPaciente={perfilPaciente}
        />
      );
    } else if (rol === "pct") {
      return (
        <PanelPaciente
          login={login}
          setLogin={setLogin}
          turnos={turnos}
          agregarTurno={agregarTurno}
          cancelarTurno={cancelarTurno}
          perfilPaciente={perfilPaciente}
        />
      );
    }
  }
  if (rol !== null)
    return <LoginApp setRol={setRol} rol={rol} setLogin={setLogin} />;

  return <Inicio setRol={setRol} />;
}
