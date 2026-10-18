import { Inicio } from "./pages/Inicio.jsx";
import { useState } from "react";
import { LoginApp } from "./pages/LoginApp.jsx";

export function App() {
  const [rol, setRol] = useState(null);

  if (rol !== null) return <LoginApp setRol={setRol} rol={rol} />;
  return <Inicio setRol={setRol} />;
}
