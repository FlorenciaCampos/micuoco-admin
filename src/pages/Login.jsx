
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login({onLoginSuccess }){

     // 1️⃣ Estado inicial del formulario
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();


  // 2️⃣ Función para actualizar los valores del form
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Error en el login");
      }
  
      sessionStorage.setItem("token", data.token);
  
      if (onLoginSuccess) {
        onLoginSuccess(data.token);
      }
  
      // 👇 Redirige a la página de gestión de productos
      navigate("/productos");
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
    }
  };
  



    return(
        <main>
            <div className="login-container">
                <h1>Iniciar sesion</h1>

                <form  onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" 
                            type="email" placeholder="tu@email.com"  
                            value={form.email}
                            onChange={handleChange}/>
                    </div>

                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <input id="password" name="password" 
                               type="password" placeholder="••••••••" 
                               value={form.password}
                               onChange={handleChange}/>
                    </div>
                    <button type="submit">Ingresar</button>

                </form>
               

            </div>
        </main>

    )
}