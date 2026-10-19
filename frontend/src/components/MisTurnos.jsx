import { TarjetaTurnos } from "./TarjetaTurnos";
import "../styles/style_misturnos.css";

export function MisTurnos({ turnos, cancelarTurno }) {
  const turnosPendientes = turnos.filter((t) => t.estado === "pendiente");
  const turnosHistorial = turnos.filter((h) => h.estado !== "pendiente");

  const sinTurnosPendientes = turnosPendientes.length === 0;
  const sinTurnosHistorial = turnosHistorial.length === 0;
  return (
    <div className="mis-turnos">
      <div className="seccion-turnos">
        <h2 className="titulo-seccion">Turnos pendientes</h2>
        {sinTurnosPendientes && <p className="sin-turnos">No tenes turnos</p>}
        {turnosPendientes.map((t) => (
          <TarjetaTurnos key={t.id} turno={t} onCancelar={cancelarTurno} />
        ))}
      </div>
      <div className="seccion-turnos historial">
        <h2 className="titulo-seccion">Historial</h2>
        {sinTurnosHistorial && (
          <p className="sin-turnos">Todavía no hay turnos pasados</p>
        )}
        {turnosHistorial.map((h) => (
          <TarjetaTurnos key={h.id} turno={h} />
        ))}
      </div>
    </div>
  );
}
