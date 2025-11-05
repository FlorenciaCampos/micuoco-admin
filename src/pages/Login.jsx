import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLoginUser from "../hooks/useLoginUser";

export default function Login({ onLoginSuccess }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const { loginUser } = useLoginUser();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = await loginUser(form);

    if (token) {
      // Guardamos el token en el navegador (para mantener la sesión)
      sessionStorage.setItem("token", token);

      // Avisamos al App.jsx que ya tenemos token
      if (onLoginSuccess) {
        onLoginSuccess(token);
      }

      // Redirigimos después de iniciar sesión
      navigate("/productos"); // si querés ir a otra ruta, cambialo aquí
    }
  };

  return (
    <main className="login-container">
      <h1>Iniciar sesión</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            autoComplete="email"
          />
        </div>

        <div>
          <label>Contraseña</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••"
            autoComplete="current-password"
          />
        </div>

        <button type="submit">Ingresar</button>
      </form>
    </main>
  );
}
