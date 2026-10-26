import { TarjetaMiAgenda } from "../components/TarjetaMiAgenda.jsx";
import { Fragment, useState } from "react";

export function Agenda({ turnosMedico, cambiarEstado, cambiarMotivo }) {
  console.log(turnosMedico);
  const fechaActual = new Date();
  const fechaDia = fechaActual.getDate().toString().padStart(2, "0");
  const fechaMes = (fechaActual.getMonth() + 1).toString().padStart(2, "0");
  const fechaAnio = fechaActual.getFullYear().toString();
  const hoy = `${fechaAnio}-${fechaMes}-${fechaDia}`;

  const turnosHoy = turnosMedico.filter((t) => t.fecha === hoy);
  const turnosProximos = turnosMedico.filter((t) => t.fecha > hoy);
  const turnosAtendidos = turnosMedico.filter((t) => t.estado === "atendido");

  return (
    <div className="agenda">
      <div className="agenda-resumen">
      <div>
        <h3>{turnosHoy.length}</h3>
        <p>turnos hoy</p>
      </div>
      <div>
        <h3>{turnosProximos.length}</h3>
        <p>turnos por atender</p>
      </div>
      <div>
        <h3>{turnosAtendidos.length}</h3>
        <p>turnos atendidos</p>
      </div>
      </div>
      <h4 className="titulo-seccion">Hoy · {hoy}</h4>
      {turnosHoy.map((t) => (
        <TarjetaMiAgenda
          key={t.id}
          id={t.id}
          horario={t.horario}
          motivo={t.motivo}
          estado={t.estado}
          cambiarEstado={cambiarEstado}
          hoy={true}
          indicacion={t.indicaciones}
          cambiarMotivo={cambiarMotivo}
        />
      ))}
      <h4 className="titulo-seccion">Próximos días</h4>
      {turnosProximos.map((t) => (
        <TarjetaMiAgenda
          key={t.id}
          horario={t.horario}
          motivo={t.motivo}
          estado={t.estado}
          hoy={false}
        />
      ))}
    </div>
  );
}
