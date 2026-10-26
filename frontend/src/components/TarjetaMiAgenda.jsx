import "../styles/style_miagenda.css";
import { Fragment, useState, useEffect } from "react";
export function TarjetaMiAgenda({
  horario,
  motivo,
  estado,
  cambiarEstado,
  hoy,
  id,
  cambiarMotivo,
}) {
  const [indicar, setIndicar] = useState(false);
  const [textInd, setTextInd] = useState("");
  const [error, setError] = useState("");
  const textoVacio = (text) => text.trim().length === 0;
  const [limpiar, setLimpiar] = useState(false);
  useEffect(() => {
    if (limpiar) {
      cambiarMotivo(id, textInd);
      setLimpiar(false);
      setError("");
      setTextInd("");
    }
  }, [limpiar, id, textInd, cambiarMotivo]);
  return (
    <article className="tarjeta-agenda">
      <div className="agenda-hora">{horario}</div>
      <div className="agenda-info">
        <h3>Ana Gomez</h3>
        <p>{motivo} - Osde</p>
        <p className={`estado ${estado}`}>{estado}</p>
      </div>
      {hoy && estado === "pendiente" && (
        <Fragment>
          <div className="agenda-acciones">
            <button className="btn-atendido" onClick={() => cambiarEstado(id)}>
              Marcar Atendido
            </button>
            <button
              className="btn-indicacion"
              onClick={() => setIndicar(!indicar)}
            >
              Escribir Indicacion
            </button>
          </div>
          {indicar && (
            <Fragment>
              <div className="agenda-escribir">
                <label htmlFor={id}>Indicacion:</label>
                <textarea
                  id={id}
                  value={textInd}
                  onChange={(e) => setTextInd(e.target.value)}
                ></textarea>
                <button
                  className="btn-guardar"
                  onClick={() =>
                    textoVacio(textInd)
                      ? setError("Error, campo incompleto")
                      : setLimpiar(true)
                  }
                >
                  Agregar
                </button>
                {error && (
                  <p class Name="agenda-error">
                    {error}
                  </p>
                )}
              </div>
            </Fragment>
          )}
        </Fragment>
      )}
    </article>
  );
}
