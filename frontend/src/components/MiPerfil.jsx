import "../styles/style_mipefil.css";
export function MiPerfil({ pacientePerfil }) {
  return (
    <div className="mi-perfil">
      <dl className="datos-perfil">
        <dt>Nombre:</dt>
        <dd>{pacientePerfil.nombre}</dd>
        <dt>Email:</dt>
        <dd>{pacientePerfil.email}</dd>
        <dt>Numero de telefono:</dt>
        <dd>{pacientePerfil.tell}</dd>
        <dt>Obra social:</dt>
        <dd>{pacientePerfil.obraSocial}</dd>
        <dt>DNI:</dt>
        <dd>{pacientePerfil.dni}</dd>
      </dl>
    </div>
  );
}
