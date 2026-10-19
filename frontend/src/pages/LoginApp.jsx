import "../styles/style_login.css";
import imgPaciente from "../imgs/paciente_sonriendo.png";
import imgDoctor from "../imgs/doctor_sonriendo.png";
import { useState } from "react";

export function LoginApp({ setRol, rol, setLogin }) {
  const rolPersona = rol === "dr" ? "Doctor" : "Paciente";
  const imgPersona = rol === "dr" ? imgDoctor : imgPaciente;
  const [campoPassword, setCampoPassowrd] = useState(true);
  const variableCampoPassword = campoPassword ? "password" : "text";
  const variableButtonPassword = campoPassword ? "ver" : "ocultar";

  const [user, setUser] = useState("");
  const [passw, setPassw] = useState("");

  const [loguear, setLogear] = useState("Iniciar sesion");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.trim() === "" || passw.trim() === "") {
      setLogear("Error, campos incompletos");
    } else {
      if (user.trim() === "naza" && passw.trim() === "123") {
        setLogin(user);
      } else {
        setLogear("Error en los campos");
      }
    }
  };

  return (
    <div className="box-login">
      <div className="box-img-login">
        <img src={imgPersona} alt="imagen" />
      </div>
      <div className="box-form-login">
        <h2>Bienvenido de nuevo {rolPersona}</h2>

        <h3>Por favor ingrese sus datos</h3>

        <form onSubmit={handleSubmit}>
          <label htmlFor="usuario">usuario</label>
          <input
            id="usuario"
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />

          <label htmlFor="password">contraseña</label>
          <input
            id="password"
            type={variableCampoPassword}
            value={passw}
            onChange={(e) => setPassw(e.target.value)}
          />
          <button
            className="mostrarContraseña"
            type="button"
            onClick={() => setCampoPassowrd(!campoPassword)}
          >
            {variableButtonPassword}
          </button>
          <p className="verificarLogin">{loguear}</p>
          <button className="btn-ingresar" type="submit">
            Ingresar
          </button>
        </form>
        <button className="btn-volver" onClick={() => setRol(null)}>
          volver atras
        </button>
      </div>
    </div>
  );
}
