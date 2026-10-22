import { TarjetaIndicaciones } from "../components/TarjetaIndicaciones.jsx";
import "../styles/style_indicaciones.css";
export function Indicaciones({ indicacionesAtendidas }) {
  return (
    <div className="indicaciones">
      <h2 className="titulo-seccion">Indicaciones medicas</h2>
      {indicacionesAtendidas.map((ia) => (
        <TarjetaIndicaciones
          key={ia.id}
          clinica={ia.clinica}
          fecha={ia.fecha}
          indicacion={ia.indicaciones}
          medico={ia.medico}
        />
      ))}
      {indicacionesAtendidas.length === 0 && (
        <div className="sin-turnos">Sin indicacioes</div>
      )}
    </div>
  );
}
