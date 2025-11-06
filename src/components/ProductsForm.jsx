import { useState, useEffect } from "react";

export default function ProductForm({ onSubmit, initialData }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: null, // archivo o null
  });

  const [preview, setPreview] = useState(null); // ✅ preview de imagen

  const isEditing = initialData && initialData._id;

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name || "",
        price: initialData.price || "",
        image: null,
      });

      // ✅ si estás editando, mostrar imagen actual del producto
      if (initialData.image) {
        setPreview(`http://localhost:3000/uploads/products/${initialData.image}`);
      }
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      const file = files[0];
      setForm({ ...form, image: file });

      // ✅ genera preview temporal
      setPreview(URL.createObjectURL(file));
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("price", form.price);

    if (form.image) {
      formData.append("image", form.image);
    }

    onSubmit(formData);
    setForm({ name: "", price: "", image: null });
    setPreview(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{isEditing ? "Editar producto" : "Agregar producto"}</h3>

      <label>Nombre</label>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Ej: Hamburguesa"
      />

      <label>Precio</label>
      <input
        name="price"
        type="number"
        value={form.price}
        onChange={handleChange}
        placeholder="Ej: 3500"
      />

      <label>Imagen</label>
      <input
        name="image"
        type="file"
        accept="image/*"
        onChange={handleChange}
      />

      {/* ✅ Mostramos preview si existe */}
      {preview && (
        <img
          src={preview}
          alt="preview"
          style={{
            width: "150px",
            height: "150px",
            objectFit: "contain",
            marginTop: "10px",
            borderRadius: "10px",
          }}
        />
      )}

      <button type="submit">
        {isEditing ? "Guardar cambios" : "Crear producto"}
      </button>
    </form>
  );
}
