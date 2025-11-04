
import { useState, useEffect } from "react";

export default function ProductForm({ onSubmit, initialData }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
  });

  
  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{initialData ? "Editar producto" : "Agregar producto"}</h3>

      <div>
        <label>Nombre</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Ej: kit hamburguesa"
        />
      </div>

      <div>
        <label>Precio</label>
        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          placeholder="Ej: 3500"
        />
      </div>

      <button type="submit">
        {initialData ? "Guardar cambios" : "Crear producto"}
      </button>
    </form>
  );
}
