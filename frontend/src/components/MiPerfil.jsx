import "../styles/style_mipefil.css";
import { Fragment } from "react";
export function MiPerfil({ perfil }) {
  return (
    <div className="mi-perfil">
      <dl className="datos-perfil">
        {perfil.map((p) => (
          <Fragment key={p.etiqueta}>
            <dt>{p.etiqueta}</dt>
            <dd>{p.valor}</dd>
          </Fragment>
        ))}
      </dl>
    </div>
  );
}
