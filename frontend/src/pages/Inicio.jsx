import "../styles/style_inicio.css";

export function Inicio({ setRol }) {
  return (
    <div className="box-inicio">
      <div className="doctor">
        <article>
          <h2>¿Sos Doctor?</h2>
          <button type="button" className="dr" onClick={() => setRol("dr")}>
            Ingresar
          </button>
        </article>
      </div>
      <div className="paciente">
        <article>
          <h2>¿Sos Paciente?</h2>
          <button type="button" className="pct" onClick={() => setRol("pct")}>
            Ingresar
          </button>
        </article>
      </div>
    </div>
  );
}
