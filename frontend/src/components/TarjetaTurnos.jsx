import "../styles/style_tarjetaturnos.css";
export function TarjetaTurnos({ turno, onCancelar }) {
  return (
    <div className="box-tarjetas">
      <div className="fecha-turno">
        <h2>{turno.medico}</h2>
        <p>
          {turno.clinica} - {turno.horario} h - {turno.indicacion}
        </p>
        <h4 class="estado pendiente">{turno.estado}</h4>
      </div>
      {turno.estado !== "atendido" && turno.estado !== "cancelado" && (
        <button type="button" onClick={() => onCancelar(turno.id)}>
          Cancelar
        </button>
      )}
    </div>
  );
}
