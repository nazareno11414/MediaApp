import "../styles/style_indicaciones.css";
export function TarjetaIndicaciones({ clinica, fecha, indicacion, medico }) {
  return (
    <article className="tarjeta-indicacion">
      <div className="indicacion-fecha">{fecha}</div>
      <h3 className="indicacion-medico">{medico}</h3>
      <p className="indicacion-medico">{clinica}</p>
      <div className="indicacion-nota">
        <p indicacion-especialidad>{indicacion}</p>
      </div>
    </article>
  );
}
