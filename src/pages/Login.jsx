
import { useState } from "react";

export default function Login(){

     // 1️⃣ Estado inicial del formulario
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // 2️⃣ Función para actualizar los valores del form
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };



    return(
        <main>
            <div className="login-container">
                <h1>Iniciar sesion</h1>

                <form >
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