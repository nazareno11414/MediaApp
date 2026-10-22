import { useState } from "react";
import "../styles/style_pedirturno.css";
export function PedirTurnos({ turnos, agregarTurno, patient_id }) {
  const [medico, setMedico] = useState("");
  const [fecha, setFecha] = useState("");
  const [horario, setHorario] = useState("");
  const [motivo, setMotivo] = useState("");

  const [error, setError] = useState("");

  const reservaTurno = (e) => {
    e.preventDefault();

    const medicoElegido = medicos.find((m) => m.id === Number(medico));

    if (medico === "") {
      setError("Elige un medico");
      return;
    }

    if (fecha === "") {
      setError("Eliga una fecha");
      return;
    }
    if (horario === "") {
      setError("Eliga un horario");
      return;
    }
    if (motivo === "") {
      setError("Escriba un motivo");
      return;
    }
    if (error !== "") {
      setError("");
    }

    agregarTurno({
      id: Date.now(),
      medico: medicoElegido.nameDoctor,
      clinica: medicoElegido.especialidad,
      horario: horario,
      fecha: fecha,
      motivo: motivo,
      estado: "pendiente",
      doctor_id: medicoElegido.id,
      patient_id: patient_id,
    });

    setMedico("");
    setFecha("");
    setHorario("");
    setMotivo("");
  };

  const medicos = [
    { id: 4, nameDoctor: "Juan Perez", especialidad: "Clinico" },
    { id: 2, nameDoctor: "Christian Cammarota", especialidad: "Pediatra" },
    { id: 1, nameDoctor: "Nazareno Cammarota", especialidad: "Cardiologo" },
  ];
  const horarios = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
  ];

  return (
    <div className="pedir-turno">
      <form onSubmit={reservaTurno} className="form-turno">
        <h2>Reservar un turno</h2>
        <label>Medico</label>
        <select value={medico} onChange={(e) => setMedico(e.target.value)}>
          <option value="">Elegi un medico...</option>
          {medicos.map((m) => (
            <option key={m.id} value={m.id}>
              {m.nameDoctor} - {m.especialidad}
            </option>
          ))}
        </select>
        <label>fecha</label>
        <input
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          type="date"
        />
        <label>horario</label>
        <select
          name=""
          id=""
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
        >
          <option value="">Seleccione el horario</option>
          {horarios.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
        <label htmlFor="">Motivo de la consulta</label>
        <input
          value={motivo}
          onChange={(e) => setMotivo(e.target.value)}
          type="text"
          name=""
          id=""
        />
        <button className="btn-reservar">Reservar turno</button>
      </form>
      {error !== "" && <p className="mensaje-error-reserva">{error}</p>}
    </div>
  );
}
