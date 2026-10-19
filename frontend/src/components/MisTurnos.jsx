import { TarjetaTurnos } from "./TarjetaTurnos";
import { useState } from "react";
export function MisTurnos() {
  const [turnos, setTurnos] = useState([
    {
      id: 1,
      medico: "Dr.Juan Perez",
      clinica: "clinica Medica",
      horario: "09:30",
      indicacion: "control General",
      estado: "pendiente",
    },
    {
      id: 2,
      medico: "Dr.Juan Perez",
      clinica: "Pediatria",
      horario: "12:30",
      indicacion: "control General",
      estado: "cancelado",
    },
    {
      id: 3,
      medico: "Dr.Juan Perez",
      clinica: "Pediatria",
      horario: "12:30",
      indicacion: "control General",
      estado: "atendido",
    },
  ]);

  const turnosPendientes = turnos.filter((t) => t.estado === "pendiente");
  const turnosHistorial = turnos.filter((h) => h.estado !== "pendiente");

  const btonCancelar = (id) => {
    const listaCancelada = turnos.map((c) =>
      c.id === id ? { ...c, estado: "cancelado" } : c,
    );
    setTurnos(listaCancelada);
  };

  return (
    <div>
      <div>
        <h2>Turnos pendientes</h2>
        {turnosPendientes.map((t) => (
          <TarjetaTurnos key={t.id} turno={t} onCancelar={btonCancelar} />
        ))}
      </div>
      <div>
        <h2>Historial</h2>
        {turnosHistorial.map((h) => (
          <TarjetaTurnos key={h.id} turno={h} />
        ))}
      </div>
    </div>
  );
}
