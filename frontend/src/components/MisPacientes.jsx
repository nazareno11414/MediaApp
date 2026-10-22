import { useState } from "react";
import { TarjetaMisPacientes } from "../components/TarjetaMisPacientes.jsx";
export function MisPacientes({ turnosMedico, nombrePacientes }) {
  const [buscar, setBuscar] = useState("");
  const buscarPaciente = nombrePacientes.filter(
    (e) =>
      e.dni.includes(buscar) ||
      e.nombre.toLowerCase().includes(buscar.toLowerCase()),
  );

  return (
    <div className="mis-pacientes">
      <div className="buscador">
        <label htmlFor="busqueda">Búsqueda</label>
        <input
          id="busqueda"
          type="text"
          value={buscar}
          onChange={(e) => setBuscar(e.target.value)}
          placeholder="Buscar por DNI o Nombre.."
        />
      </div>
      {buscarPaciente.map((p) => {
        const turnosDeEste = turnosMedico.filter(
          (t) => t.patient_id === p.patient_id,
        );

        return (
          <TarjetaMisPacientes
            key={p.patient_id}
            nombre={p.nombre}
            dni={p.dni}
            obraSocial={p.obraSocial}
            cantidadturnos={turnosDeEste.length}
          />
        );
      })}
      {buscarPaciente.length === 0 && nombrePacientes.length > 0 && (
        <p className="sin-turnos">Sin resultados sobre {buscar}</p>
      )}
      {nombrePacientes.length === 0 && (
        <p className="sin-turnos">Sin Pacientes</p>
      )}
    </div>
  );
}
