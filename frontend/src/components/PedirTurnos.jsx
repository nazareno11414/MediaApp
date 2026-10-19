import { useState } from "react";
export function PedirTurnos({ turnos, agregarTurno }) {
  const [medico, setMedico] = useState("");
  const [fecha, setFecha] = useState("");
  const [horario, setHorario] = useState("");
  const [motivo, setMotivo] = useState("");

  const reservaTurno = (e) => {
    e.preventDefault();
    agregarTurno({
      id: 4,
      medico: medico,
      clinica: "Pediatria",
      horario: horario,
      fecha: fecha,
      indicacion: motivo,
      estado: "pendiente",
    });
  };

  return (
    <div>
      <form onSubmit={reservaTurno}>
        <h2>Reservar un turno</h2>
        <label>Medico</label>
        <select value={medico} onChange={(e) => setMedico(e.target.value)}>
          <option value="">Elegi un medico...</option>
          <option value="juan">Juan</option>
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
          <option value="1">Seleccione el horario</option>
          <option value="2">9:30</option>
        </select>
        <label htmlFor="">Motivo de la consulta</label>
        <input
          value={motivo}
          onChange={(e) => setMotivo(e.target.value)}
          type="text"
          name=""
          id=""
        />
        <button>Reservar turno</button>
      </form>
    </div>
  );
}
