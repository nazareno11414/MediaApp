import "../styles/style_tarjetamispacientes.css";
export function TarjetaMisPacientes({
  nombre,
  dni,
  obraSocial,
  cantidadturnos,
}) {
  const nombreCortado = nombre.split(" ");
  const iniciales = nombreCortado[0][0] + nombreCortado[1][0];

  return (
    <article className="tarjeta-paciente">
      <div className="avatar-paciente">{iniciales.toUpperCase()}</div>
      <div className="info-paciente">
        <h4 className="nombre-paciente">{nombre}</h4>
        <p className="detalle-paciente">
          {dni} - {obraSocial} - {cantidadturnos} turnos
        </p>
      </div>
    </article>
  );
}
