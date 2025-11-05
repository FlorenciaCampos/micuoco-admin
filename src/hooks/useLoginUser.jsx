import { useState } from "react";

export default function useLoginUser() {
  const [loading, setLoading] = useState(false);

  const loginUser = async (formData) => {
    try {
      setLoading(true);

      const response = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error en login");
      }

      // ✅ Guardamos token
      sessionStorage.setItem("token", data.token);

      return data.token;

    } catch (error) {
      console.error("❌ Error al iniciar sesión:", error.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { loginUser, loading };
}
