import { Inicio } from "./pages/Inicio.jsx";
import { useState } from "react";
import { LoginApp } from "./pages/LoginApp.jsx";
import { PanelPaciente } from "./pages/PanelPaciente.jsx";
import { PanelMedico } from "./pages/PanelMedico.jsx";

export function App() {
  const [rol, setRol] = useState(null);
  const [login, setLogin] = useState("");

  if (login) {
    if (rol === "dr") {
      return <PanelMedico login={login} setLogin={setLogin} />;
    } else {
      if (rol === "pct") {
        return <PanelPaciente login={login} setLogin={setLogin} />;
      }
    }
  }
  if (rol !== null)
    return <LoginApp setRol={setRol} rol={rol} setLogin={setLogin} />;

  return <Inicio setRol={setRol} />;
}
