import { useState, useEffect } from "react";

export default function ProductForm({ onSubmit, initialData }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
  });

  // ✅ Verifica si es edición o creación
  const isEditing = initialData && initialData._id;

  useEffect(() => {
    if (initialData) {
      // ✅ Solo cargamos los campos editables, no todo el objeto
      setForm({
        name: initialData.name || "",
        price: initialData.price || "",
      });
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
    onSubmit(form); // se envían los datos del form
    setForm({ name: "", price: "" }); // limpia formulario luego de crear/editar
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{isEditing ? "Editar producto" : "Agregar producto"}</h3>

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
        {isEditing ? "Guardar cambios" : "Crear producto"}
      </button>
    </form>
  );
}
