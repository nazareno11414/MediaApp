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
  const textoVacio = (text) => (text.trim("").length === 0 ? true : false);
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
    <article>
      <div>{horario}</div>
      <div>
        <h3>Ana Gomez</h3>
        <p>{motivo} - Osde</p>
        <p>{estado}</p>
      </div>
      {hoy && estado === "pendiente" && (
        <Fragment>
          <button onClick={() => cambiarEstado(id)}>Marcar Atendido</button>
          <button onClick={() => setIndicar(!indicar)}>
            Escribir Indicacion
          </button>
          {indicar && (
            <Fragment>
              <div>
                <label htmlFor="text-indicacion">Indicacion:</label>
                <input
                  id="text-indicacion"
                  type="text"
                  value={textInd}
                  onChange={(e) => setTextInd(e.target.value)}
                />
                <button
                  onClick={() =>
                    textoVacio(textInd) ? setError("Error") : setLimpiar(true)
                  }
                >
                  Agregar
                </button>
                {error && <p>{error}</p>}
              </div>
            </Fragment>
          )}
        </Fragment>
      )}
    </article>
  );
}
